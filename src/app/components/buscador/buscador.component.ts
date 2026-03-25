import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {

  textoBusqueda: string = '';

   @Output() buscar = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.buscar.emit(value);
  }

  onSubmit() {
    this.buscar.emit(this.textoBusqueda);
  }

  limpiar(){
    this.textoBusqueda = '';
    this.buscar.emit('');
  }

}
