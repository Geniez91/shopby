<template>
                <v-card class="pa-4" height="500px" color="white">
                <p class="text-subtitle-1 font-weight-bold">Les meilleurs articles vendu du mois</p>
                <v-row class="my-3">
                    <v-col   class="cursor-pointer" @click="$router.push(`/article/${value.id}`)"  v-for="value in getFirstFiveArticlesByNbSales(ARTICLES)" :key="value.id">
                                                <div class="d-flex flex-column justify-center">
                                <v-img :src="value.img" height="250px"></v-img>
                        </div>
                        <div class="d-flex flex-column align-center">
                            <div class="my-4">{{ value.name }}</div>
                            <div class="my-4">{{ value.price }} €</div>
                        </div>
                   
                    </v-col>
                </v-row>
            </v-card>
</template>
<script lang="ts" setup>
import { getFirstFiveArticlesByNbSales } from '@/services/article.service'
import { ARTICLES } from "@/constants/article.constant";
</script>