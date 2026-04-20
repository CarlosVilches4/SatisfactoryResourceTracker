import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TargetaTaladroComponent } from '../targeta-taladro/targeta-taladro.component';
import { ElementService } from '../../services/lista-taladro.service';


@Component({
  selector: 'app-lista-taladros',
  standalone: true,
  imports: [NgFor, TargetaTaladroComponent, NgIf],
  templateUrl: './lista-taladro.component.html',
  styleUrl: './lista-taladro.component.scss'
})
export class ListaTaladrosComponent {
  elementService = inject(ElementService);

  ngOnInit(): void{
    this.elementService.obtenirTaladros();
  }

  onBuscar(valor: string) {
    this.elementService.cercar(valor);
  }

  retryConnection(): void{
    this.elementService.obtenirTaladros();
  }

}
