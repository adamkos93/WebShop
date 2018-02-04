
export interface IProduct {
  id?: number;
  name: string;
  price: string;
  categoryId: number;
  image: string;
  description: string;
  amount?: number;
}
export interface IFilterProductParameters {
  page: number,
  max: number,
  categoryId?: number,
  minPrice?: number,
  maxPrice?: number,
  name: string
}

export interface IFilteredProductResult {
  products: IProduct[],
  totalRecords: number
}
