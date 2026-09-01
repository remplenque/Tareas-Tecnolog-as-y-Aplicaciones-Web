import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
    imports: [
    IonContent,
    EncabezadoComponent,
    RouterLink
    // IonButtons e IonBackButton tampoco van:
    // el botón atrás también vive en el encabezado
  ],
})
export class AcercaPage {}
