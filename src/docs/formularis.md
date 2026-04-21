# Formularis

## FormulariCercaComponent

### Funcionalitat

Formulari reactiu per cercar elements del catàleg amb validació de longitud mínima i cerca automàtica amb debounce.

### Validacions

Validador Síncron:
- Mínim 2 caràcters.
- Màxim 50 caràcters.

Validador Asíncron:
- Comprova si hi ha resultats. Retorna { sensResultats: true } si no hi ha elements.

### Comportament

- Cerca automàtica amb debounce de 400 ms mentre l'usuari escriu.
- Botó «Netejar» que apareix únicament quan el camp conté text.
- Indicador visual («Validant...» o spinner) durant la validació asíncrona.
- Missatges d'error visibles per a cadascuna de les validacions.
- Els errors no s'han de mostrar fins que l'usuari hagi tocat el camp (ng-touched).
