<template>
    <div>
        <h6 class="text-h6" style="text-decoration: underline;">Categories</h6>
        <v-row>
            <v-col v-for="value in CATEGORY_ARTICLES" :key="value.id">
                <v-card height="150px" color="#1B8450" hover>
                    <div class="d-flex flex-column align-center justify-center fill-height">
                        <v-icon size="48">{{ value.icon }}</v-icon>
                        <p>{{ value.name }}</p>
                    </div>    
                </v-card>  
            </v-col>
        </v-row>
        <div class="mt-10">
            <v-card class="pa-4" height="500px" color="white">
                <p>Les meilleurs articles vendu du mois</p>
                <v-row class="my-3">
                    <v-col  v-for="value in getFirstFiveArticlesByNbSales(ARTICLES)" :key="value.id">
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
                   
                    </v-col>
                </v-row>
            </v-card>
        </div>
             <div class="my-6">
            <v-card class="pa-4" height="400px" color="white">
                <p>Les derniers articles ajoutés à la boutique</p>
            </v-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { CATEGORY_ARTICLES } from "@/constants/article.constant";
import { ARTICLES } from "@/constants/article.constant";
import { getFirstFiveArticlesByNbSales } from '@/services/article.service'


</script>