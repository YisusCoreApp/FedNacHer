import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-afiliacion',
  standalone: true,
  imports: [],
  templateUrl: './afiliacion.component.html',
  styleUrl: './afiliacion.component.css'
})
export class AfiliacionComponent {


constructor(private router : Router){

}


reditecToForms(){
  this.router.navigate(['/formulario'])
}

redirectToPaypal(){
  this.router.navigate(['/pay'])
}
}
