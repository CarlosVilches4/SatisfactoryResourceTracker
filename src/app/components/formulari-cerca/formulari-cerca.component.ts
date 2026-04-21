import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ElementService } from '../../services/lista-taladro.service';
import { codiDisponibleValidator } from '../../validators/codi-disponible.validator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent implements OnInit {
  formulariCerca!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elementService: ElementService
  ) {}

  ngOnInit(): void {
    this.formulariCerca = this.fb.group({
      termeCerca: ['', {
        validators: [
          Validators.minLength(2),
          Validators.maxLength(50)
        ],
        asyncValidators: [
          codiDisponibleValidator(this.elementService)
        ]
      }]
    });


  const ctrl = this.formulariCerca.get('termeCerca')!;

  ctrl.statusChanges
    .pipe(debounceTime(400))
    .subscribe(status => {
      if (status === 'VALID') {
        this.elementService.cercar(ctrl.value || '');
      }
    });

  }

  cercar(): void {
    const terme = this.formulariCerca.get('termeCerca')?.value;
    this.elementService.cercar(terme);
  }

  netejar(): void {
    this.formulariCerca.reset();
    this.elementService.obtenirTaladros();
  }

  get estaCarregant(): boolean {
    return this.elementService.carregant() == true;
  }

  get termeInvalid(): boolean {
    const control = this.formulariCerca.get('termeCerca');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  get missatgeError(): string {
    const control = this.formulariCerca.get('termeCerca');
    if (control?.hasError('minlength')) {
      return 'Mínim 2 caràcters';
    }
    if (control?.hasError('maxlength')) {
      return 'Màxim 50 caràcters';
    }

    if (control?.hasError('sensResultats')) {
    return 'No s\'han trobat resultats';
  }
    return '';
  }
}