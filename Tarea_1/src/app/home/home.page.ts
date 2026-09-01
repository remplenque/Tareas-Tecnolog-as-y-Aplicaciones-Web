import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
} from '@ionic/angular';

import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent, IonItem, IonInput, IonButton,
    FormsModule, RouterLink,
    EncabezadoComponent, RouterOutlet        // <- el componente nuevo
    // IonHeader, IonToolbar, IonTitle ya NO van:
    // el header ahora lo pone el encabezado
  ],

})
export class HomePage {
  nombre = ''; // se conecta con el input
  ciudad = ''; // se conecta con el input
  saludo = ''; // lo que mostramos al apretar el botón

  saludarYSalir() {
    this.saludo =  `¡Hola, ${this.nombre} de ${this.ciudad}!`;
  }
}
