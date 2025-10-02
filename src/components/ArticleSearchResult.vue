<template>
                <div class="mb-2">
                Resultats
            </div>
            <div class="bg-white pa-3" style="border: 2px solid; height: 50px;" >1-20 sur plus de {{ filteredArticles.length }} résultats</div>

            <v-row class="mt-2">
                <v-col cols="3" v-for="value in paginedArticle" :key="value.id">
                    <v-card class="pa-3" color="white" :to="`/article/${value.id}`" >
                        <div class="d-flex flex-column justify-center">
                                <v-img :src="value.img" height="250px"></v-img>
                        </div>
                        <div class="d-flex flex-column align-center">
                            <div class="my-4">{{ value.name }}</div>
                            <div class="my-4">{{ value.price }} €</div>
                            <div>
                                <v-btn color="warning" @click="articleStore.addArticleToCart(value)">Ajouter au panier</v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <hr class="my-4"></hr>
            <v-pagination v-model="page" :length="pageCount" ></v-pagination>
</template>

<script lang="ts" setup>
import { ARTICLES } from '@/constants/article.constant';
import type { IArticle } from '@/interfaces/article.interface';
import { useArticleStore } from '@/store/article.store';
import { computed, ref } from 'vue';
const articleStore = useArticleStore()

const props=defineProps<{
    getNameRouteParam:string
    currentselectedCategory:string|null
    currentRate:string|null
    priceRange:[number,number]|null
    currentDate:string|null
    searchFilter:string[]
}>()


    
const filteredArticles = computed<IArticle[]>(() => {
 return filteredByName().filter(article => filteredByRate().includes(article)).filter(article => filteredSelectedCategory().includes(article)).filter((article)=>filteredByPriceRate().includes(article)).filter((article)=>filteredbyDate().includes(article));
});

function filteredSelectedCategory(): IArticle[]{
       if (props.currentselectedCategory) {
        return ARTICLES.filter((article) => article.category.name === props.currentselectedCategory);
    }
     return ARTICLES;
}

function filteredByName(): IArticle[]{
    if(props.getNameRouteParam){
        return ARTICLES.filter((article)=>article.name.toLocaleLowerCase().includes(props.getNameRouteParam.toLocaleLowerCase()))
    }
    return ARTICLES;
}

function filteredByRate(): IArticle[]{
    if(props.currentRate){
        return ARTICLES.filter((article)=>article.averageRating===Math.floor(Number(props.currentRate)))
    }
    return ARTICLES;
}

function filteredByPriceRate():IArticle[]{
    if(props.priceRange){
        return ARTICLES.filter((article)=>article.price>=props.priceRange![0]&& article.price<= props.priceRange![1])
    }
    return ARTICLES;
}

function filteredbyDate():IArticle[]{
    if(props.currentDate){
        const now=new Date();
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        const fiveYearAgo=new Date(now)
        fiveYearAgo.setFullYear(new Date().getFullYear()-5);

        if(props.currentDate===`Moins d'un an`){
            return ARTICLES.filter((article)=>new Date(article.date).getTime() > oneYearAgo.getTime())
        }
        if(props.currentDate===`1 à 5 ans`){
            return ARTICLES.filter((article)=>new Date(article.date).getTime()<=oneYearAgo.getTime() && new Date(article.date).getTime() >= fiveYearAgo.getTime())
        }
        if(props.currentDate==='Plus de 5 ans'){
            return ARTICLES.filter((article)=>new Date(article.date).getTime()<fiveYearAgo.getTime())
        }
    }
    return ARTICLES
}
const page = ref(1)
const itemsPerPage = 20; 

const pageCount = Math.ceil(filteredArticles.value.length / itemsPerPage);

const paginedArticle= computed<IArticle[]>(() => {
    const start=(page.value-1)*itemsPerPage
    const end=start+itemsPerPage
    return filteredArticles.value.slice(start,end)
})

</script>