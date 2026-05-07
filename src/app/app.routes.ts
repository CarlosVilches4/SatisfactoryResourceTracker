import { Routes } from '@angular/router';
import { ListaTaladrosComponent } from './components/lista-taladro/lista-taladro.component';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from './components/preferits-panel/preferits-panel.component';
import { DetallComponent } from './components/detall/detall.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'taladros', pathMatch: 'full' },

    { path: 'taladros', component: ListaTaladrosComponent, title: 'LListat de Taladros'},
    { path: 'cerca', component: FormulariCercaComponent, title: 'Cerca de Taladros'},
    { path: 'preferits', component: PreferitsPanelComponent, title: 'Els meus preferits'},
    { path: 'detall/:id', component: DetallComponent, title: 'Detall'},
    { path: 'login', component: LoginComponent, title: 'Inicia Sessió'},

    { path: '**', redirectTo: 'taladros'}
];
