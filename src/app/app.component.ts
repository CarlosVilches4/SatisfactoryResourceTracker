import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ElementService } from './services/lista-taladro.service';
import { Observable } from 'rxjs';
import { AuthService, Usuari } from './services/auth.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'SRT';

  elementService = inject(ElementService);

  usuari$!: Observable<Usuari | null>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuari$ = this.authService.obtenirUsuari();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
