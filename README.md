# SRT

## Descripció del projecte

### Satisfactory Resource Tracker
L'objectiu de l'aplicacó es portar un recompte dels materials utilitzats en el joc Satisfactory.

## Mapa de rutes

| Ruta | Component | Descripció | Accès |
|------|-----------|-------| ------- |
| `/` | — | Redirigeix a `/taladros` | Públic |
| `/taladros` | ListaTaladrosComponent | LListat de taladros | Públic |
| `/cerca` | FormulariCercaComponent | Cerca d'elements | Públic |
| `/preferits` | PreferitsPanelComponent | Els meus preferits | Privat |
| `/detall/:id`| DetallComponent | Detall d'un taladro passat per parametre de la URL | Públic |
| `/login`| LoginComponent | Login | Públic |
| `/**` | — | Redirigeix a `/taladros` (404) | Públic |

## Instruccions d'execució en local

- git clone [url-repositori]

- cd [nom-projecte]

- npm install

- ng serve

- Obrir http://localhost:4200

## Build de producció

Executar `ng build --configuration production` en el terminal

Mida del bundle: Initial total | 391,31 NB kB | Estimated transfer size: 103,07 kB

## Credencials de prova

Email: `admin@test.com`
Contrasenya: `1234`