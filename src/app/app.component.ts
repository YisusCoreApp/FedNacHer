import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollService } from './services/scroll.service';
import { PaypalPaymentComponent } from './paypal-payment/paypal-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/afiliacion/formulario/formulario.component';
import { Action } from 'rxjs/internal/scheduler/Action';

declare var paypal : any;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,
    RouterLink,
    NavBarComponent,
    FooterComponent,
    FontAwesomeModule,
    PaypalPaymentComponent,
    ReactiveFormsModule,
    FormComponent],
})
export class AppComponent implements OnInit {

  title = 'herbolaria';

  constructor(private scrollService: ScrollService) { }

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  producto = {
    descripcion : 'producto en venta',
    precio: 1500.00
  }


  ngOnInit() {
    this.scrollService.init();

    paypal.
    Buttons({
      createOrder: (data :any, actions : any) =>{
        return actions.order.create({
          purchase_units:[
            {
              description: this.producto.descripcion,
              amount : {
                currency_code: 'MXN',
                value : this.producto.precio
              }
            }
          ]
        })
      },
      onApprove: async (data : any, actions : any) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: function(err: any) { // Asegúrate de definir onError aquí
        console.error('Error during payment process', err);
      }
    })
    .render(this.paypalElement.nativeElement);
  }



}
