import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { ListaTaladrosComponent } from './components/lista-taladro/lista-taladro.component';
import { ElementService } from './services/lista-taladro.service';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from "./components/preferits-panel/preferits-panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaTaladrosComponent, NgIf, FormulariCercaComponent, PreferitsPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SRT';

  elementService = inject(ElementService);

  constructor(){
    console.log("SRT: Started")
  }
}
