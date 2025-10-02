import type { IArticle } from "./article.interface";

export interface Order{
    id:number;
    dateOrder:Date;
    articles:IArticle[];
    deliveryAddress:string;
    totalPrice:number;
    status:string;
    dateDelivery:Date;
}

export interface IOrderForm{
    name:string;
    cardNumber:string;
    expMonth:string;
    expYear:string;
    cvv:string;
}