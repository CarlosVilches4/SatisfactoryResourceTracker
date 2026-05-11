# Sistema de rutes

## Rutes definides

| Ruta | Component | Descripció | Accès |
|------|-----------|-------| ------- |
| `/` | — | Redirigeix a `/taladros` | Públic |
| `/taladros` | ListaTaladrosComponent | LListat de taladros | Públic |
| `/cerca` | FormulariCercaComponent | Cerca d'elements | Públic |
| `/preferits` | PreferitsPanelComponent | Els meus preferits | Privat |
| `/detall/:id`| DetallComponent | Detall d'un taladro passat per parametre de la URL | Públic |
| `/login`| LoginComponent | Login | Públic |
| `/**` | — | Redirigeix a `/taladros` (404) | Públic |

## Fitxers modificats

- `src/main.ts`: Afegit `provideRouter(routes)`
- `src/app/app.routes.ts`: Definició de rutes
- `src/app/app.component.ts`: Importat `RouterModule`
- `src/app/app.component.html`: Afegit `<router-outlet>` i menú de navegació, afegit `routerLink` per cambiar de component
- `src/app/app.component.scss`: Estils per ruta activa