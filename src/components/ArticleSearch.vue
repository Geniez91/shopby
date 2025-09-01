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
    style="color: #1B7D84;"
    class="my-1 w-100"
  @click="addFilter(value.name)">
    {{ value.name }}
  </v-chip>
</v-chip-group>
        </div>
        <div><p>Avis</p>
        <hr></hr>
        <v-chip-group column>
            <v-chip v-for="value in ratingMax" :key="value" style="color: #1B7D84;" class="my-1 w-100" @click="addFilter(value+' étoiles')">{{ value }} étoiles</v-chip>
        </v-chip-group>
        </div>
        <div>Prix</div>
        <hr></hr>
        <v-range-slider></v-range-slider>
        <div><p>Date</p>
        <hr></hr>
        <p style="color: #1B7D84;">Moins d'un an</p>
        <p style="color: #1B7D84;">Plus d'un an</p>
        <p style="color: #1B7D84;">Plus de 5 ans</p>
        </div>
    </div>
        </v-col>
        <v-col>
            <v-chip-group filter>
                <v-chip>Samsung A25</v-chip>
                <v-chip>Smartphone</v-chip>
                <v-chip>Prix: 100€ - 500€</v-chip>
                <v-chip>Moins d'un an</v-chip>
                <v-chip v-for="value in searchFilter" :key="value">
                  {{ value }}
                </v-chip>
            </v-chip-group>
            <div class="mb-2">
                Resultats
            </div>
            <div class="bg-white pa-3" style="border: 2px solid; height: 50px;" >1-48 sur plus de {{ ARTICLES.length }} résultats</div>

            <v-row class="mt-2">
                <v-col cols="3" v-for="value in ARTICLES" :key="value.id">
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
            <v-pagination :length="6"></v-pagination>
        </v-col>

    </v-row>
    
</template>
<script lang="ts" setup>
import { CATEGORY_ARTICLES } from "@/constants/article.constant";
import { ARTICLES } from "@/constants/article.constant";
import { ref } from "vue";
const ratingMax=5;
const searchFilter=ref<string[]>([])

const addFilter=(value:string):void=>{
if(searchFilter.value.includes(value)){
    return
}
searchFilter.value.push(value)
}
</script>