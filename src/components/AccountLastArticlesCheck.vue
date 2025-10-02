<template>
                <div class="text-center">Vos derniers articles consultés : </div>
                 <v-card class="pa-4 my-5" height="350px" color="white">
                  <v-row class="my-3">
                    <v-col  v-for="value in getFirstFiveArticlesByDate(ARTICLES)" :key="value.id"  class="cursor-pointer" @click="$router.push(`/article/${value.id}`)">
                                                <div class="d-flex flex-column justify-center">
                                <v-img :src="value.img" height="250px"></v-img>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
</template>
<script lang="ts" setup>
import { ARTICLES } from "@/constants/article.constant";
import { getFirstFiveArticlesByDate } from '@/services/article.service'
</script>
