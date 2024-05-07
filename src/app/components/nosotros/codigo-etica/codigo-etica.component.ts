import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-etica',
  standalone: true,
  imports: [],
  templateUrl: './codigo-etica.component.html',
  styleUrl: './codigo-etica.component.css'
})
export class CodigoEticaComponent {

  constructor() { }

  cargarPDF() {
    var importar = "/assets/docs/codigoEtica.pdf";
    window.open(importar, '_blank');
  }

}

