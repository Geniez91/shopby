<template>
    <v-card color="white" class="pa-3">
            <v-row class="align-center" v-for="value in articles">
                <v-col cols="4">
                      <v-img :src="value.img" height="100px"></v-img>
                </v-col>
                <v-col cols="4">
                    <p class="text-center">{{ value.name }}</p>
                </v-col>
                <v-col cols="4">
                    <p class="text-center">{{ value.price }} €</p>
                </v-col>
            </v-row>
            <v-row class="align-center" v-if="codePromo === 'promo'">
                <v-col cols="12" class="d-flex justify-center">
                      Code promo 10 €
                </v-col>
            </v-row>
</v-card>
<v-card color="#1B7D84" class="pa-3">
          <div class="my-4 text-center">
            Total : {{ totalPrice }} €
        </div>
        </v-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useArticleStore } from '@/store/article.store';
const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);
const props=defineProps<{
    totalPrice:number,
    codePromo:string
}>()
</script>