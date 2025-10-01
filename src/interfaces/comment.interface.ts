
export type TComment='all'|'positive'|'negative'

export interface IComment{
    id?: number;
    articleId: number;
    author:string;
    rating: number;
    content:string;
    countryImg:string;
    date: Date;
    likes?:number;
    report?:number
}