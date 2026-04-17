export interface ICategoryArticle{
    id: number;
    name: string;
    icon:string
}

export interface IArticles{
    idArticle:number;
    nomArticle:string;
    category:ICategoryArticle;
    price:number;
    averageRating:number;
    ratingCount:number;
    coverUrl:string;
    creationDate:Date;
    tags:string[];
    quantity:number;
    nbSales:number;
    version:number;
    brandName:string;
    typeLibelle:string;
}

export interface IPhotoArticle{
    idPhoto:number;
    idArticle:number;
    url:string;
    alt:string;
    position:number;
}

export interface IArticle{
    idArticle:number;
    nomArticle:string;
    category:ICategoryArticle;
    price:number;
    averageRating:number;
    ratingCount:number;
    photos:IPhotoArticle[];
    creationDate:Date;
    tags:string[];
    quantity:number;
    nbSales:number;
    version:number;
    brandName:string;
    typeLibelle:string;
    descriptionArticle:string;
    breadcrumb:string[];
}

