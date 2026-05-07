import { Injectable, signal, computed  } from '@angular/core';
import { Taladro, TaladroApiResponse } from '../models/taladro.model';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { adaptarElementsApi, adaptarElementApi } from '../adaptadors/taladro.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private readonly elementsSignal = signal<Taladro[]>([]);
  private readonly carregantSignal = signal<Boolean>(false);
  private readonly errorSignal = signal<string | null>('');
  private readonly senseResultatsSignal = signal(false);


  readonly elements = this.elementsSignal.asReadonly();
  readonly carregant = this.carregantSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();
  readonly senseResultats = this.senseResultatsSignal.asReadonly();

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenirTaladros(): void{
    this.carregantSignal.set(true);
    this.errorSignal.set('');

    this.http.get<TaladroApiResponse[]>(`${this.apiUrl}/elements`)
      .pipe(
        map(adaptarElementsApi),
        tap(elements => {
          
          this.senseResultatsSignal.set(elements.length === 0);

        if (elements.length > 0) {
          this.elementsSignal.set(elements);
        }

        this.carregantSignal.set(false);
      }),
      catchError((error: HttpErrorResponse) => {
        const missatgeError = this.gestionarError(error);
        this.errorSignal.set(missatgeError);
        this.carregantSignal.set(false)
        return of([]);
      })
    )
    .subscribe();
    console.log(this.elementsSignal());
  }

  obtenirPopulars(): void {

    this.carregantSignal.set(true);
    this.errorSignal.set('');

    this.http.get<TaladroApiResponse[]>(`${this.apiUrl}/elements?esPopular=true`)
      .pipe(
        map(adaptarElementsApi),
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
    this.carregantSignal.set(true);
    this.errorSignal.set('');

    this.http.get<TaladroApiResponse[]>(`${this.apiUrl}/elements?q=${terme}`)
      .pipe(
        map(adaptarElementsApi),
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

  comprovarResultats(terme: string): Observable<Taladro[]> {
  return this.http.get<TaladroApiResponse[]>(`${this.apiUrl}/elements?q=${terme}`)
    .pipe(
      map(adaptarElementsApi)
    );
  }

  trackById(item: any) {
    return item.id;
  }

  obtenirPerId(id: number): Observable<Taladro> {
  return this.http.get<TaladroApiResponse>(`${this.apiUrl}/elements/${id}`)
    .pipe(
      map(adaptarElementApi)
    );
}

  private gestionarError(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      return `Error de xarxa: ${error.error.message}`;
    }

  
    switch (error.status) {
      case 0:
        return 'No es pot connectar al servidor.';
      case 404:
        return 'Endpoint no trobat. Verifica la URL de l\'API.';
      case 500:
        return 'Error intern del servidor.';
      default:
        return `Error desconegut (${error.status}): ${error.message}`;
    }
  }
}