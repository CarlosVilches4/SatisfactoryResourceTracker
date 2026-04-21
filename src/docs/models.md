# Models

## Mapeig de camps

| TaladroApiResponse | Taladro | Tipus | Transformació |
| :--- | :---: | :---: | ---: |
| id | id | string | Cap |
| tier_taladro | nom | string | Renombrat |
| material | material | string | Cap |
| tier_beta | puresa | string | Renombrat |
| material_utilizado | materialUtilitzat | number | Renombrat |
| overclock | percentatjeOverclock | number | Renombrat |
| color | color | string | Cap |
| descripcio | descripcio | string | Cap |
| categoria | categoria | string | Cap |
| preu | preu | number | Cap |
| imatge | imatgeUrl | string | Renombrat |
| popular | esPopular | string | Renombrat |
| stock | unitats | number | Renombrat |

## Interficies

~~~

export interface Taladro {
    id: number;
    nom: string;
    material: string;
    puresa: string;
    materialUtilitzat: number;
    percentatjeOverclock: number;
    color: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatgeUrl: string;
    esPopular: boolean;
    unitats: number;
    nota?: string[];
}

~~~

~~~

export interface TaladroApiResponse{
    id: number;
    tier_taladro: string;
    material: string;
    tier_beta: string;
    material_utilizado: number;
    overclock: number;
    color: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatge: string;
    popular: boolean;
    stock: number;
}

~~~