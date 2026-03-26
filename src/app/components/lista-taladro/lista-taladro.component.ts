import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MATERIAL_TALADRO_MOCK } from '../../mocks/dades-mock';
import { TargetaTaladroComponent } from '../targeta-taladro/targeta-taladro.component';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-lista-taladros',
  standalone: true,
  imports: [NgFor, TargetaTaladroComponent, BuscadorComponent, NgIf],
  templateUrl: './lista-taladro.component.html',
  styleUrl: './lista-taladro.component.scss'
})
export class ListaTaladrosComponent {
  materiales = MATERIAL_TALADRO_MOCK;
  busqueda: string = ''

  onBuscar(valor: string) {
    this.busqueda = valor;
  }

  get materialesFiltrados() {
    const texto = this.busqueda.toLowerCase();

    return this.materiales.filter(item =>
      item.color.toLowerCase().includes(texto) ||
      item.tier_taladro.toLowerCase().includes(texto) ||
      item.material.toLowerCase().includes(texto) ||
      item.tier_beta.toLowerCase().includes(texto)
    );
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
