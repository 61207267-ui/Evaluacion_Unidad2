import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Medicos } from './components/medicos/medicos';
import { Opinion } from './components/opinion/opinion';
import { Servicios } from './components/servicios/servicios';

@Component({
  imports: [Header, Medicos,Opinion, Servicios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Fabrisio');
}
