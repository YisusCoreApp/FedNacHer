import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormComponent implements OnInit {
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

      // Márgenes
      const margenIzquierdo = 10;
      const margenDerecho = 10;
      const anchoPagina = doc.internal.pageSize.getWidth() - margenIzquierdo - margenDerecho;

      // Obtener la fecha actual
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toLocaleDateString();

      // Obtener el número de afiliación actual
      const numeroCedula = this.generarNumeroCedula();

      // Configurar estilos de texto
      doc.setFont('times', 'normal');
      doc.setFontSize(12);

      // Añadir texto al PDF
      doc.text(`No. Cédula de Afiliación: ${numeroCedula}`, margenIzquierdo + 80, 10);
      doc.text(`Fecha: ${fechaFormateada}`, margenIzquierdo, 30);
      doc.text(`Nombre representante legal (sin abreviaturas): ${formData.nombreRepresentante}`, margenIzquierdo, 150);
      doc.text(`Nombre de la marca/ empresa: ${formData.nombreMarca}`, margenIzquierdo, 160);
      doc.text(`R.F.C: ${formData.rfc}`, margenIzquierdo, 170) ;
      doc.text(`Teléfono: ${formData.telefono}`, margenIzquierdo, 180);
      doc.text(`Corrreo Electrónico: ${formData.email}`, margenIzquierdo, 190);
      doc.text(`Dirección: ${formData.direccion}`, margenIzquierdo, 200);

      // Añadir texto adicional con justificación
      const textoAdicional = "Por éste medio manifiesto respetuosamente mi absoluto consentimiento para afiliarme como miembro de la Federación Nacional De La Industria Herbolaria Medicina Alternativa, Tradicional Y Naturista A.C. (FNIHMATN) La cual fue constituida en beneficio de todas las áreas del sector herbolario naturista de nuestro país: productores (campesinos), recolectores de plantas, fabricantes de productos naturistas, distribuidores, terapeutas y médicos tradicionales. Por lo que me comprometo a cubrir con la cuota anual de Afiliación a partir de ésta fecha."; 
      const textoDividido = doc.splitTextToSize(textoAdicional, anchoPagina);
      doc.text(textoDividido, margenIzquierdo, 50, { align: 'left' });

      // Guardar el PDF
      doc.save('Cedula de Afiliación.pdf');

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
}
