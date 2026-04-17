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
}

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
