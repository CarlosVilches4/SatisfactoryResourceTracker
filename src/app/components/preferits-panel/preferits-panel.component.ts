import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';
import { Taladro } from '../../models/taladro.model';
import { TargetaTaladroComponent } from "../targeta-taladro/targeta-taladro.component";

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TargetaTaladroComponent],
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss'
})
export class PreferitsPanelComponent implements OnInit {
  preferitSeleccionat: Taladro | null = null;

  constructor(
    private fb: FormBuilder,
    public preferitsService: PreferitsService
  ) {
  }

  ngOnInit(): void {}

  eliminarPreferit(taladroId: number): void {
    this.preferitsService.eliminarPreferit(taladroId);
    if (this.preferitSeleccionat?.id === taladroId) {
      this.preferitSeleccionat = null;
    }
  }

  tancarPanel(): void {
    this.preferitSeleccionat = null;
  }
}