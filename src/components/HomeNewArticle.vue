<template>
      <v-card class="pa-4" height="500px" color="white">
                <p class="text-subtitle-1 font-weight-bold">Les derniers articles ajoutés à la boutique</p>
                  <v-row class="my-3">
                    <v-col  v-for="value in articles" :key="value.idArticle"  class="cursor-pointer" @click="$router.push(`/article/${value.idArticle}`)">
                                                <div class="d-flex flex-column justify-center">
                                <v-img :src="`${BASE_URL}${value.coverUrl}`" height="250px"></v-img>
                        </div>
                        <div class="d-flex flex-column align-center">
                            <div class="my-4">{{ value.nomArticle }}</div>
                            <div class="my-4">{{ value.price }} €</div>
                        </div>
                   
                    </v-col>
                </v-row>
            </v-card>
</template>
<script lang="ts" setup>
import type { IArticle, IArticles } from "@/interfaces/article.interface";
import { getFiveLatestArticles } from '@/services/article.service'
import { onMounted, ref } from "vue";

const articles=ref<IArticles[]>([])
const BASE_URL = "http://localhost:8080";

onMounted(async ()=>{
    articles.value=await getFiveLatestArticles();
})
</script>