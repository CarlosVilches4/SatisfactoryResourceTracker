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

- **Debounce:** Evita cerques excessives mentre l'usuari escriu amb debounce de 400ms
