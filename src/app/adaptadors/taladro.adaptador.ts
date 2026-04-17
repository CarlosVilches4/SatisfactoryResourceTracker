import { Taladro, TaladroApiResponse } from '../models/taladro.model';

export function adaptarElementApi(apiElement: TaladroApiResponse): Taladro {
  return {
    id: apiElement.id,
    nom: apiElement.tier_taladro,
    material: apiElement.material,
    puresa: apiElement.tier_beta,
    materialUtilitzat: apiElement.material_utilizado,
    percentatjeOverclock: apiElement.overclock,
    color: apiElement.color,
    descripcio: apiElement.descripcio,
    categoria: apiElement.categoria,
    preu: apiElement.preu,
    imatgeUrl: apiElement.imatge,
    esPopular: apiElement.popular,
    unitats: apiElement.stock,
  };
}

export function adaptarElementsApi(apiElements: TaladroApiResponse[]): Taladro[] {
  return apiElements.map(adaptarElementApi);
}

export function elementBuit(): Taladro {
  return {
    id: 0,
    nom: '',
    material: '',
    puresa: '',
    materialUtilitzat: 0,
    percentatjeOverclock: 0,
    color: '',
    descripcio: '',
    categoria: '',
    preu: 0,
    imatgeUrl: '',
    esPopular: false,
    unitats: 0,
  };
}