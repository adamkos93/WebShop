import { IProduct } from './product.types';

export interface IShoppingBasket {
  productId: number,
  amount: number
}
export interface IShoppingBasketPayload {
  amount: number;
  product: IProduct;
}
