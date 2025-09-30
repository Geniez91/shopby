import type { IArticle } from "./article.interface";

export type TCommandStatus='En cours de traitement'|'Livrée'

export interface ICommand{
    id:number;
    accountId:number;
    deliveryDate:Date;
    articles:IArticle[];
    totalPrice:number;
    status:TCommandStatus;
}