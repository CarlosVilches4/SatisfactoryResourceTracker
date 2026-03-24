import { Component, Input } from '@angular/core';
import { Taladro } from '../../models/taladro.model';

@Component({
  selector: 'app-targeta-taladro',
  standalone: true,
  imports: [],
  templateUrl: './targeta-taladro.component.html',
  styleUrl: './targeta-taladro.component.scss',
})
export class TargetaTaladroComponent {
  @Input() taladro!: Taladro;
}
