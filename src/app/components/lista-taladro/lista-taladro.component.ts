import { Component, effect, inject, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TargetaTaladroComponent } from '../targeta-taladro/targeta-taladro.component';
import { ElementService } from '../../services/lista-taladro.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Taladro } from '../../models/taladro.model';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-lista-taladros',
  standalone: true,
  imports: [TargetaTaladroComponent, NgIf, CdkVirtualScrollViewport, ScrollingModule, NgFor],
  templateUrl: './lista-taladro.component.html',
  styleUrl: './lista-taladro.component.scss'
})
export class ListaTaladrosComponent implements OnInit {
  elementService = inject(ElementService);

  itemsPerFila = 0

  itemHeight = 266;

  files: Taladro[][] = [];

  ngOnInit(): void {
    this.elementService.obtenirTaladros();

    this.actualitzarItemsPerFila();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.actualitzarItemsPerFila();
  }

  constructor() {

    effect(() => {

      const items = this.elementService.elements();

      this.crearFiles(items);

    });

  }

  onBuscar(valor: string) {
    this.elementService.cercar(valor);
  }

  retryConnection(): void {
    this.elementService.obtenirTaladros();

  }

  actualitzarItemsPerFila(): void {

    const width = window.innerWidth;

    if (width < 640) {

      this.itemsPerFila = 1;

    } else if (width < 1024) {

      this.itemsPerFila = 2;

    } else if (width < 1400) {

      this.itemsPerFila = 3;

    } else {

      this.itemsPerFila = 4;
    }

    this.crearFiles(this.elementService.elements());
  }

  crearFiles(items: Taladro[]): void {

    this.files = [];

    for (let i = 0; i < items.length; i += this.itemsPerFila) {
      this.files.push(items.slice(i, i + this.itemsPerFila));
    }
  }

  trackByFila(index: number) {
    return index;
  }
}
