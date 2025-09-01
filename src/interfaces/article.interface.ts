export interface ICategoryArticle{
    id: number;
    name: string;
    icon:string
}

export interface IArticle{
    id:number;
    name:string;
    category:ICategoryArticle;
    price:number;
    averageRating:number;
    date:Date;
    tags:string[];
    img:string ;
    quantity:number;
    nbSales:number;
}