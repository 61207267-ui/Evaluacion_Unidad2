import { Component, signal } from '@angular/core';

import { Promociones } from './components/promociones/promociones';
import { Historial } from './components/historial/historial';
import { Objetivos } from './components/objetivos/objetivos';

@Component({
  imports: [Promociones, Historial, Objetivos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Andres');
}
