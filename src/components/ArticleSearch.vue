<template>
    <v-row class="fill-height">
        <v-col cols="2" style="border:1px solid 
        ;" class="bg-white">
<div>
        <div><p>Categories</p>
        <hr></hr>
 <v-chip-group column>
  <v-chip
    v-for="value in CATEGORY_ARTICLES"
    :key="value.id"
    :style="currentselectedCategory===value.name ? 'color:#1B7D84' : undefined"
    class="my-1 w-100"
  @click="currentselectedCategory = value.name">
    {{ value.name }}
  </v-chip>
</v-chip-group>
        </div>
        <div><p>Avis</p>
        <hr></hr>
        <v-chip-group column>
            <v-chip v-for="value in ratingMax" :key="value"     :style="currentRate===value.toString() ? 'color:#1B7D84' : undefined" class="my-1 w-100" @click="currentRate = value.toString()">{{ value }} étoiles</v-chip>
        </v-chip-group>
        </div>
        <div>Prix</div>
        <hr></hr>
        <v-range-slider class="my-4" step="10" thumb-label="always" min="0" max="1000" v-model="priceRange"></v-range-slider>
        <div><p>Date</p>
        <hr></hr>
                <v-chip-group column>
            <v-chip v-for="value in dateCriteria" :key="value"     :style="currentDate===value ? 'color:#1B7D84' : undefined" class="my-1 w-100" @click="currentDate = value">{{ value }}</v-chip>
        </v-chip-group>
        </div>
    </div>
        </v-col>
        <v-col>
            <v-chip-group filter>
                <v-chip v-if="getNameRouteParam">{{ getNameRouteParam }}</v-chip>
                <v-chip>{{ currentselectedCategory }}</v-chip>
                <v-chip v-if="currentRate">{{ currentRate }} étoiles</v-chip>
                <v-chip v-if="priceRange">{{ `${priceRange[0]} - ${priceRange[1]} €` }}</v-chip>
                <v-chip v-if="currentDate">{{ currentDate }}</v-chip>
                <v-chip v-for="value in searchFilter" :key="value">
                  {{ value }}
                </v-chip>
            </v-chip-group>
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
                                <v-btn color="warning">Ajouter au panier</v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <hr class="my-4"></hr>
            <v-pagination v-model="page" :length="pageCount" ></v-pagination>
        </v-col>

    </v-row>
    
</template>
<script lang="ts" setup>
import { CATEGORY_ARTICLES } from "@/constants/article.constant";
import { ARTICLES } from "@/constants/article.constant";
import type { IArticle } from "@/interfaces/article.interface";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const ratingMax=5;
const searchFilter=ref<string[]>([])
const route = useRoute();
const getNameRouteParam = ref<string>(route.query.name as string ?? '');
const getCategoryRouteParam = route.query.category as string | undefined;
const currentselectedCategory = ref<string | undefined>(getCategoryRouteParam);
const currentRate=ref<string>('')
const currentDate=ref<string>('')
const page = ref(1)
const itemsPerPage = 20; 





const priceRange=ref<[number,number]>()
const dateCriteria:string[]=[`Moins d'un an`,`1 à 5 ans`,`Plus de 5 ans`]

const filteredArticles = computed<IArticle[]>(() => {
 return filteredByName().filter(article => filteredByRate().includes(article)).filter(article => filteredSelectedCategory().includes(article)).filter((article)=>filteredByPriceRate().includes(article)).filter((article)=>filteredbyDate().includes(article));
});

const pageCount = Math.ceil(filteredArticles.value.length / itemsPerPage);

const paginedArticle= computed<IArticle[]>(() => {
    const start=(page.value-1)*itemsPerPage
    const end=start+itemsPerPage
    return filteredArticles.value.slice(start,end)
})

function filteredSelectedCategory(): IArticle[]{
       if (currentselectedCategory.value) {
        return ARTICLES.filter((article) => article.category.name === currentselectedCategory.value);
    }
     return ARTICLES;
}

function filteredByName(): IArticle[]{
    if(getNameRouteParam.value){
        return ARTICLES.filter((article)=>article.name.toLocaleLowerCase().includes(getNameRouteParam.value.toLocaleLowerCase()))
    }
    return ARTICLES;
}

function filteredByRate(): IArticle[]{
    if(currentRate.value){
        return ARTICLES.filter((article)=>article.averageRating===Math.floor(Number(currentRate.value)))
    }
    return ARTICLES;
}

function filteredByPriceRate():IArticle[]{
    if(priceRange.value){
        return ARTICLES.filter((article)=>article.price>=priceRange.value![0]&& article.price<= priceRange.value![1])
    }
    return ARTICLES;
}

function filteredbyDate():IArticle[]{
    if(currentDate.value){
        const now=new Date();
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        const fiveYearAgo=new Date(now)
        fiveYearAgo.setFullYear(new Date().getFullYear()-5);

        if(currentDate.value===`Moins d'un an`){
            return ARTICLES.filter((article)=>new Date(article.date).getTime() > oneYearAgo.getTime())
        }
        if(currentDate.value===`1 à 5 ans`){
            return ARTICLES.filter((article)=>new Date(article.date).getTime()<=oneYearAgo.getTime() && new Date(article.date).getTime() >= fiveYearAgo.getTime())
        }
        if(currentDate.value==='Plus de 5 ans'){
            return ARTICLES.filter((article)=>new Date(article.date).getTime()<fiveYearAgo.getTime())
        }
    }
    return ARTICLES
}

</script>