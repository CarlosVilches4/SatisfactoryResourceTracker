import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ElementService } from '../../services/lista-taladro.service';
import { codiDisponibleValidator } from '../../validators/codi-disponible.validator';
import { debounceTime } from 'rxjs/operators';

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
        ],
        updateOn: 'blur'
      }]
    });

    this.formulariCerca.get('termeCerca')?.valueChanges
      .pipe(debounceTime(400))
      .subscribe(terme => {
        if (this.formulariCerca.get('terme')?.valid) {
          this.cercar();
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
    return !!(control?.invalid && control?.touched);
  }

  get missatgeError(): string {
    const control = this.formulariCerca.get('termeCerca');
    if (control?.hasError('minlength')) {
      return 'Mínim 2 caràcters';
    }
    if (control?.hasError('maxlenght')) {
      return 'Màxim 50 caràcters';
    }
    return '';
  }
}