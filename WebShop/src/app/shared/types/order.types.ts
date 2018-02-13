import { Data } from "@angular/router/src/config";

export interface IOrder {
  id: number;
  city: string;
  createdAt: Date;
  postCode: string;
  flatNumber?: number;
  street: string;
  streetNumber: number;
  status: string;
  orderProducts: Array<IOrderProduct>;
}

export interface IOrderProduct {
  orderId: number
  productId: number
  productName: string,
  price: string,
  count: number
}
