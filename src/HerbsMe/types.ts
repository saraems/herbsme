export interface IProduct {
  name: string;
  price: number;
  categoty: string;
  image: string;
  origin: string;
  harvested: number;
  healingProperties: string;
  description: string;
}

export enum ProductAccessor {
  name = 'name',
  price = 'price',
  categoty = 'categoty',
  origin = 'origin',
  harvested = 'harvested',
  healingProperties = 'healingProperties',
}
