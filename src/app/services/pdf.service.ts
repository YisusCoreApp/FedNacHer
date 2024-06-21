import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private localStorageKey = 'idCounter';

  constructor() { 
    // Inicializar el contador de cédulas desde localStorage
    const storedCounter = localStorage.getItem(this.localStorageKey);
    this.idCounter = storedCounter ? parseInt(storedCounter, 10) : 0;
  }

  private idCounter: number;

  generatePdf(formData: any) {
    this.idCounter++;
    // Guardar el contador actualizado en localStorage
    localStorage.setItem(this.localStorageKey, this.idCounter.toString());

    const idNumber = this.formatIdNumber(this.idCounter);
    
    const doc = new jsPDF();

    // Agregar contenido del formulario al PDF
    doc.text(`Cédula: ${idNumber}`, 10, 10);
    doc.text(`Fecha: ${formData.date}`, 10, 20);
    doc.text(`Nombre: ${formData.name}`, 10, 30);
    doc.text(`Correo: ${formData.email}`, 10, 40);
    // Agrega más campos según sea necesario

    // Guarda el PDF
    doc.save(`document_${idNumber}.pdf`);
  }

  resetCounter() {
    this.idCounter = 0;
    localStorage.setItem(this.localStorageKey, this.idCounter.toString());
  }

  private formatIdNumber(counter: number): string {
    const idNumber = counter.toString().padStart(5, '0');
    const part1 = idNumber.substring(0, 2);
    const part2 = idNumber.substring(2, 5);
    return `${part1} - ${part2}`;
  }
}

// import { Injectable } from '@angular/core';
// import { jsPDF } from 'jspdf';

// @Injectable({
//   providedIn: 'root'
// })
// export class PdfService {
//   private localStorageKey = 'idCounter';

//   constructor() { 
//     // Inicializar el contador de cédulas desde localStorage
//     const storedCounter = localStorage.getItem(this.localStorageKey);
//     this.idCounter = storedCounter ? parseInt(storedCounter, 10) : 0;
//   }

//   private idCounter: number;

//   generatePdf(formData: any) {
//     this.idCounter++;
//     // Guardar el contador actualizado en localStorage
//     localStorage.setItem(this.localStorageKey, this.idCounter.toString());

//     const idNumber = this.formatIdNumber(this.idCounter);
//     const currentDate = new Date().toLocaleDateString(); // Obtener la fecha actual

//     const doc = new jsPDF();

//     // Agregar contenido del formulario al PDF
//     doc.text(`Cédula: ${idNumber}`, 10, 10);
//     doc.text(`Fecha: ${currentDate}`, 10, 20);
//     doc.text(`Nombre: ${formData.name}`, 10, 30);
//     doc.text(`Correo: ${formData.email}`, 10, 40);
//     // Agrega más campos según sea necesario

//     // Guarda el PDF
//     doc.save(`Cedula_${idNumber}.pdf`);
//   }

//   private formatIdNumber(counter: number): string {
//     const idNumber = counter.toString().padStart(5, '0');
//     const part1 = idNumber.substring(0, 2);
//     const part2 = idNumber.substring(2, 5);
//     return `${part1} - ${part2}`;
//   }
// }
