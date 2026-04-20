import { computed, Injectable, signal } from '@angular/core';
import { Taladro } from '../models/taladro.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly CLAU_STORAGE = 'preferits-cataleg';
  private readonly preferitsSignal = signal<Taladro[]>([]);

  readonly preferits = this.preferitsSignal.asReadonly();
  
  readonly totalPreferits = computed(() =>
  this.preferitsSignal().length) ;

  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    const dades = localStorage.getItem(this.CLAU_STORAGE);
    if (dades) {
      try {
        const preferits = JSON.parse(dades) as Taladro[];
        this.preferitsSignal.set(preferits);
      } catch (error) {
        console.error('Error carregant preferits:', error);
        this.preferitsSignal.set([]);
      }
    }
  }

  private desarPreferits(): void {
    localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(this.preferitsSignal()));
  }


  afegirPreferit(taladro: Taladro): void {
    if (this.esPreferit(taladro.id)) {
      return;
    }
    this.preferitsSignal.update(preferits => [...preferits, taladro]);
    this.desarPreferits();
  }

  eliminarPreferit(taladroId: number): void {
    this.preferitsSignal.update(preferits =>
      preferits.filter(p => p.id !== taladroId)
    );
    this.desarPreferits();
  }

  esPreferit(taladroId: number): boolean {
    return this.preferitsSignal().some(p => p.id === taladroId);
  }
}