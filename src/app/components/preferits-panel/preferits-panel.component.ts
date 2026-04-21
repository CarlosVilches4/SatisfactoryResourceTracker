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
  formulariNotes: FormGroup;
  preferitSeleccionat: Taladro | null = null;


  constructor(
    private fb: FormBuilder,
    public preferitsService: PreferitsService
  ) {
    this.formulariNotes = this.fb.group({
      notes: this.fb.array([])
    });
  }

  ngOnInit(): void {}

    get notes(): FormArray {
    return this.formulariNotes.get('notes') as FormArray;
  }

  seleccionarPreferit(preferit: Taladro): void {
    this.preferitSeleccionat = preferit;
    this.notes.clear();

    preferit.nota?.forEach(nota => {
      this.notes.push(this.fb.control(nota, [Validators.required, Validators.minLength(3)]));
    });

    this.notes.push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  afegirNota(): void {
    if (!this.preferitSeleccionat) return;

    const ultimIndex = this.notes.length - 1;
    const ultimControl = this.notes.at(ultimIndex);

    if (ultimControl.valid) {
      const nota = ultimControl.value;
      this.preferitsService.afegirNota(this.preferitSeleccionat.id, nota);

      const preferitActualitzat = this.preferitsService.obtenirPreferit(this.preferitSeleccionat.id);
      if (preferitActualitzat) {
        this.seleccionarPreferit(preferitActualitzat);
      }
    }
  }

    eliminarNota(index: number): void {
    if (!this.preferitSeleccionat) return;

    this.preferitsService.eliminarNota(this.preferitSeleccionat.id, index);

    const preferitActualitzat = this.preferitsService.obtenirPreferit(this.preferitSeleccionat.id);
    if (preferitActualitzat) {
      this.seleccionarPreferit(preferitActualitzat);
    } else {
      this.preferitSeleccionat = null;
      this.notes.clear();
    }
  }

  eliminarPreferit(taladroId: number): void {
    this.preferitsService.eliminarPreferit(taladroId);
    if (this.preferitSeleccionat?.id === taladroId) {
      this.preferitSeleccionat = null;
      this.notes.clear();
    }
  }

    tancarPanel(): void {
    this.preferitSeleccionat = null;
    this.notes.clear();
  }
}