import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private router: Router){}

  redirecToAfiliate(){
    this.router.navigate(['/afiliacion']);
  }

  reditecToServicios(){
    this.router.navigate(['/servicios'])
  }
}
