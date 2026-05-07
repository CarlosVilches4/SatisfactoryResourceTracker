# Sistema de rutes

## Rutes definides

| Ruta | Component | Descripció |
|------|-----------|-------|
| `/` | — | Redirigeix a `/taladros` |
| `/taladros` | ListaTaladrosComponent | LListat de taladros |
| `/cerca` | FormulariCercaComponent | Cerca d'elements |
| `/preferits` | PreferitsPanelComponent | Els meus preferits |
| `/detall/:id`| DetallComponent | Detall d'un taladro passat per parametre de la URL |
| `/login`| LoginComponent | Login |
| `/**` | — | Redirigeix a `/taladros` (404) |

## Fitxers modificats

- `src/main.ts`: Afegit `provideRouter(routes)`
- `src/app/app.routes.ts`: Definició de rutes
- `src/app/app.component.ts`: Importat `RouterModule`
- `src/app/app.component.html`: Afegit `<router-outlet>` i menú de navegació, afegit `routerLink` per cambiar de component
- `src/app/app.component.scss`: Estils per ruta activa