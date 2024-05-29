import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';


@Component({
  selector: 'app-afiliacion',
  standalone: true,
  imports: [FormularioComponent, RouterLink],
  templateUrl: './afiliacion.component.html',
  styleUrl: './afiliacion.component.css'
})
export class AfiliacionComponent {


constructor(private router : Router){

}

reditecToForms(){
  this.router.navigate(['/formulario'])
}
}
