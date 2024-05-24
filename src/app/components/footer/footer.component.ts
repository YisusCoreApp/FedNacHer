import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor() {
  }

  confirmWhatsApp(event: MouseEvent){
    event.preventDefault();
    const userConfirmed = confirm("Estas a punto de contactar con la empresa ¿Deseas continuar?");
    if (userConfirmed){
      window.open('https://wa.me/7352066308', '_blank');
    }
  }

}
