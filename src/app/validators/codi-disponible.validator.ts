import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ElementService } from '../services/lista-taladro.service';


export function codiDisponibleValidator(elementService: ElementService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {

    const terme = (control.value || '').toLowerCase();

    if (!terme) {
      return of(null);
    }

    return of(control.value).pipe(
      delay(500),
      switchMap(terme => elementService.comprovarResultats(terme)),
      map(resultats =>
        resultats.length === 0 ? { sensResultats: true } : null
        )
    );
  };
}