import type { IArticle } from "@/interfaces/article.interface";

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