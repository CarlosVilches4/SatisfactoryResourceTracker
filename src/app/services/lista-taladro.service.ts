import { Injectable, signal, computed  } from '@angular/core';
import { Taladro } from '../models/taladro.model';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private readonly elementsSignal = signal<Taladro[]>([]);
  private readonly carregantSignal = signal<Boolean>(false);
  private readonly errorSignal = signal<string | null>('');

  readonly elements = this.elementsSignal.asReadonly();
  readonly carregant = this.carregantSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenirTaladros(): void{
    this.carregantSignal.set(true);
    this.errorSignal.set('');

    this.http.get<Taladro[]>(`${this.apiUrl}/elements`)
      .pipe(
        tap(elements => {
          this.elementsSignal.set(elements);
          this.carregantSignal.set(false)
      }),
      catchError((error: HttpErrorResponse) => {
        const missatgeError = this.gestionarError(error);
        this.errorSignal.set(missatgeError);
        this.carregantSignal.set(false)
        this.elementsSignal.set([]);
        return of([]);
      })
    )
    .subscribe();
    console.log(this.elementsSignal());
  }

  obtenirHierro(): void {

    this.carregantSignal.set(true);
    this.errorSignal.set('');

    this.http.get<Taladro[]>(`${this.apiUrl}/elements?material=hierro`)
      .pipe(
        tap(elements => {
          this.elementsSignal.set(elements);
          this.carregantSignal.set(false);
        }),
        catchError((error: HttpErrorResponse) => {
          const missatgeError = this.gestionarError(error);
          this.errorSignal.set(missatgeError);
          this.carregantSignal.set(false)
          this.elementsSignal.set([]);
          return of([]);
        })
      )
      .subscribe();
  }



  cercar(terme: string): void {
    if (!terme.trim()) {
      this.obtenirTaladros();
      return;
    }

    this.carregantSignal.set(true);
    this.errorSignal.set('');

    this.http.get<Taladro[]>(`${this.apiUrl}/elements?q=${terme}`)
      .pipe(
        tap(elements => {
          this.elementsSignal.set(elements);
          this.carregantSignal.set(false);
        }),
        catchError((error: HttpErrorResponse) => {
          const missatgeError = this.gestionarError(error);
          this.errorSignal.set(missatgeError);
          this.carregantSignal.set(false)
          this.elementsSignal.set([]);
          return of([]);
        })
      )
      .subscribe();
  }

  trackById(item: any) {
    return item.id;
  }

  private gestionarError(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      // Error de client o xarxa
      return `Error de xarxa: ${error.error.message}`;
    }

    // Error del servidor
    switch (error.status) {
      case 0:
        return 'No es pot connectar al servidor. Comprova que json-server està actiu.';
      case 404:
        return 'Endpoint no trobat. Verifica la URL de l\'API.';
      case 500:
        return 'Error intern del servidor.';
      default:
        return `Error desconegut (${error.status}): ${error.message}`;
    }
  }
}