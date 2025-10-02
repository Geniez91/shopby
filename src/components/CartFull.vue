<template>
            <div class="d-flex flex-column align-center">
            <v-card class="my-5 px-4" color="white" width="800" height="fit-content">
                <p class="text-h5 text-center my-6">Panier</p>
                <v-row v-for="value in articles" :key="value.id">
                           <v-divider></v-divider>
                    <v-col cols="7">
                        <router-link :to="`/article/${value.id}`" style="text-decoration: none; color: black;">
                        <div class="d-flex align-center">
                        <v-img :src="value.img" height="250"></v-img>
                        <p class="text-center">{{ value.name }}</p>
                        </div>
                        </router-link>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="3">
                        <div class="d-flex align-center fill-height">
                        <p class="text-center">{{ value.price }}€</p>
                        </div>
                    </v-col>
                         <v-divider vertical></v-divider>
                    <v-col cols="2">
                        <div class="d-flex align-center fill-height">
                        <v-btn color="red" @click="articleStore.removeArticleFromCart(value)">Supprimer</v-btn>
                        </div>
                    </v-col>
                </v-row>
                
                                <v-divider class="mb-4"></v-divider>
            </v-card>
            <div>
                Total : {{ totalPrice }} €
            </div>
            <div>
                  <v-btn class="my-2" color="yellow" to="/order">Pässer la commande</v-btn>
            </div>
        </div>
</template>
<script lang="ts" setup>
import { useArticleStore } from '@/store/article.store';
import { computed } from 'vue';
const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);

const totalPrice=computed(()=>{
    return articles.value.reduce((acc,article)=>acc+article.price,0)
})
</script>
