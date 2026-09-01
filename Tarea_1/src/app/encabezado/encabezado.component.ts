import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonHeader, IonToolbar, IonTitle,
  IonButtons, IonBackButton,
  IonButton,
  IonIcon
} from '@ionic/angular';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonButton,
    RouterLink,
    IonIcon
]}
)
export class EncabezadoComponent {

  @Input() titulo = "Mi App";
  
  @Input() volverA?: string;

  @Input() color = "primary";

  @Input() subtitulo?: string;

  @Input() mostrarBotonAcerca : boolean = false;

}

