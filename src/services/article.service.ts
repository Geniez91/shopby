import type { IArticle, IArticles } from "@/interfaces/article.interface";
import api from "./axios.service";


export function getSortedArticlesByNbSales(articles:IArticle[]):IArticle[]{
articles.sort((a,b)=>{
    if(a.nbSales<b.nbSales){
        return 1
    }
    if(a.nbSales>b.nbSales){
        return -1
    }
    return 0
})
return articles
}

export function getSortedArticlesByDate(articles:IArticle[]):IArticle[]{
    articles.sort((a,b)=>{
        if(a.date<b.date){
            return 1
        }
        if(a.date>b.date){
            return -1
        }
        return 0
    })
    return articles
}

export function getFirstFiveArticlesByNbSales(articles:IArticle[]):IArticle[]{
    const sortedArticles=getSortedArticlesByNbSales(articles)
    return sortedArticles.slice(0,5)
}

export function getFirstFiveArticlesByDate(articles:IArticle[]):IArticle[]{
    const sortedArticles=getSortedArticlesByDate(articles)
    return sortedArticles.slice(0,5)
}

export function getArticleById(id:number, articles:IArticle[]):IArticle{
    return articles.find(a=>a.id===id) as IArticle
}



const urlArticleLatest = "/article/latest"
const urlArticleById = "/article/"

export async function getFiveLatestArticles() : Promise<IArticles[]> {
try{
const result=await api.get(urlArticleLatest)
console.log("Latest articles fetched:", result.data);
return result.data;
}
catch(error){
    console.error("Error fetching latest articles:", error);
    throw error;
}
}

export async function getArticleByIdApi(id:number) : Promise<IArticle> {
try{
const result=await api.get(urlArticleById+id)
console.log("Article fetched:", result.data);
return result.data;
}
catch(error){
    console.error("Error fetching article:", error);
    throw error;
}
}


