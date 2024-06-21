import { Component } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-paypal-payment',
  standalone: true,
  imports: [],
  templateUrl: './paypal-payment.component.html',
  styleUrl: './paypal-payment.component.css'
})
export class PaypalPaymentComponent {
  constructor() { }

  ngOnInit(): void {
    this.renderPayPalButton();
  }

  renderPayPalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '5000.00' // Reemplaza con la cantidad que deseas cobrar
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Pago realizado por ' + details.payer.name.given_name);
          // Aquí puedes manejar la lógica después del pago, como enviar una confirmación por correo electrónico
        }).catch((err: any) => {
          console.error(err);
          alert('Ocurrió un error durante el pago');
        });
      },
      onError: (err: any) => {
        console.error(err);
        alert('Ocurrió un error durante el pago');
      }
    }).render('#paypal-button-container');
  }
}
