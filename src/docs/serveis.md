# Configuració de serveis

## API Mock

### Endpoints disponibles

- `GET /elements` - Retorna tots els elements
- `GET /elements?popular=true` - Filtra elements populars
- `GET /elements?q=cobre` - Cerca elements per nom
- `GET /elements/:id` - Obté un element per ID

### Mètodes

- `obtenirTaladros(): void` - Retorna tots els taladros
- `obtenirPopulars(): void` - Retorna tots els taladros populars
- `cercar(terme: string): void` - Retorna els taladros que incloguin una paraula
- `comprovarResultats(terme: string): Observable<Taladro[]>` - Retorna els taladros d'una cerca sense modificar signals.
- `gestionarError(error: HttpErrorResponse): string` - Retorna el missatge corresponent segons l'error.

### Estats

- carregant pot ser true o false

## Preferits

### Mètodes

- `carregarPreferits(): void` - Carrega els preferits guardats en local.
- `desarPreferits(): void` - Desa el preferits al local.
- `afegirPreferit(taladro: Taladro): void` - Afegeix un taladro als preferits.
- `eliminarPreferit(taladroId: number): void` - Elimina un taladro dels preferits.
- `afegirNota(taladroId: number, nota: string): void` - Afegeix una nota a un taladro preferit.
- `eliminarNota(taladroId: number, indexNota: number): void` - Elimina una nota d'un taladro preferit.
- `esPreferit(taladroId: number): boolean` - Retorna true si el taladro es preferit, false si no.
- `obtenirPreferit(taladroId: number): Taladro | undefined` - Retorna un taladro preferit.