import type { IArticle } from "./article.interface";

export interface IListArticle{
    id:number;
    name:string;
    img:string;
    description:string;
    articles:IArticle[]
}

export type TListArticle='Commandes'|`En attente d'expédition`|'Acheter à nouveau'