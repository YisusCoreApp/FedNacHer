import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {

  constructor() { }

  redirectToWebsite() {
    const url = "https://www.gob.mx/cofepris/documentos/alertas-sanitarias-de-suplementos-alimenticios";

    window.open(url, '_blank');

  }
}
