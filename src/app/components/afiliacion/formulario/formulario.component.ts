import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';



// import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormComponent implements OnInit{
  private currentAffiliationNumber: number = 0;

  ngOnInit(): void {
    // Obtener el número de afiliación actual desde el almacenamiento local
    const savedNumber = localStorage.getItem('affiliationNumber');
    if (savedNumber !== null) {
      this.currentAffiliationNumber = parseInt(savedNumber, 10);
    } else {
      this.currentAffiliationNumber = 0;
      localStorage.setItem('affiliationNumber', this.currentAffiliationNumber.toString());
    }
  }

  generarPDF(formulario: any) {
    if (formulario.valid) {
      const formData = formulario.value;
      const doc = new jsPDF();

      // Obtener la fecha actual
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toLocaleDateString();

      // Obtener el número de afiliación actual
      const numeroCedula = this.generarNumeroCedula();

      // Añadir texto al PDF
      doc.text(`Por éste medio manifiesto respetuosamente mi absoluto consentimiento para afiliarme como miembro de la
            Federación Nacional De La Industria Herbolaria Medicina Alternativa, Tradicional Y Naturista A.C. (FNIHMATN)`,10,0)
      doc.text('Formulario de Afiliación', 10, 10);
      doc.text(`Fecha: ${fechaFormateada}`, 10, 20);
      doc.text(`Número de Cédula: ${numeroCedula}`, 10, 30);
      doc.text(`Nombre: ${formData.nombre}`, 10, 40);
      doc.text(`Apellido: ${formData.apellido}`, 10, 50);

      
      // Guardar el PDF
      doc.save('formulario_afiliacion.pdf');

      // Incrementar y guardar el nuevo número de afiliación
      this.currentAffiliationNumber++;
      localStorage.setItem('affiliationNumber', this.currentAffiliationNumber.toString());
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }

  private generarNumeroCedula(): string {
    // Dividir el número de afiliación en dos partes para formar 00-000
    const parte1 = Math.floor(this.currentAffiliationNumber / 1000).toString().padStart(2, '0');
    const parte2 = (this.currentAffiliationNumber % 1000).toString().padStart(3, '0');
    return `${parte1}-${parte2}`;
  }




  /*!Este es el bueno*/
  // generarPDF(formulario: any) {
  //   if (formulario.valid) {
  //     const formData = formulario.value;
  //     const doc = new jsPDF();

  //     // Obtener la fecha actual
  //     const fechaActual = new Date();
  //     const fechaFormateada = fechaActual.toLocaleDateString();

  //     // Generar un número de cédula aleatorio con la estructura 00-000
  //     const numeroCedula = this.generarNumeroCedula();

  //     // Añadir texto al PDF
  //     doc.text('Formulario de Afiliación', 10, 10);
  //     doc.text(`Fecha: ${fechaFormateada}`, 10, 20);
  //     doc.text(`Número de Cédula: ${numeroCedula}`, 10, 30);
  //     doc.text(`Nombre: ${formData.nombre}`, 10, 40);
  //     doc.text(`Apellido: ${formData.apellido}`, 10, 50);

  //     // Guardar el PDF
  //     doc.save('formulario_afiliacion.pdf');
  //   }
  // }

  // private generarNumeroCedula(): string {
  //   const parte1 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  //   const parte2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  //   return `${parte1}-${parte2}`;
  // }





}
