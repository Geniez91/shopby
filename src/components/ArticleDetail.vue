<template>
    <div>
        <v-card class="bg-white">
            <v-row>
                <v-col cols="9">
                    <v-breadcrumbs :items="['Informatique', 'Téléphones', 'Samsung A25']"></v-breadcrumbs>
                    <v-row>
                        <v-col>
                            <v-img :src="Smartphone" height="650px"></v-img>
                            <div class="d-flex my-3">
                                <v-img
                                    :aspect-ratio="1"
                                    class=""
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                                                                <v-img
                                    :aspect-ratio="1"
                                    class=""
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                                                                <v-img
                                    :aspect-ratio="1"
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                                                                <v-img
                                    :aspect-ratio="1"
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                            </div>

                        </v-col>
                        <v-col>
                            <div>
                <p>{{ article.name }}</p>
                <v-rating
  readonly
  :length="article.averageRating"
  :size="26"
  :model-value="3"
  active-color="primary"
 /> (12 avis)
            </div>
            <div>Marque : Samsung</div>
            <div class="my-4">Fiche technique : 
                <ul>
                    <li>Ecran : 6.5 pouces</li>
                    <li>Processeur : Octa-core</li>
                    <li>Mémoire vive : 4 Go</li>
                    <li>Stockage interne : 128 Go</li>
                    <li>Appareil photo : 50 MP + 5 MP + 2 MP</li>
                    <li>Batterie : 5000 mAh</li>
                </ul>
            </div>
                        </v-col>
                    </v-row>

            
                </v-col>
                <v-col>
                <v-card class="bg-grey pa-3">
                    <div class="my-3">Etat : Neuf</div>
                    <div class="my-3">{{ article.price }}€</div>
                    <div class="my-3">Quantité : {{ article.quantity }}</div>
                    <div class="d-flex flex-column">
                    <v-btn class="my-2" color="yellow" @click="articleStore.addArticleToCart(article)">Ajouter au panier</v-btn>
                    <v-btn class="my-2" color="orange">Acheter maintenant</v-btn>
                    <v-menu open-on-hover>
                           <template v-slot:activator="{ props }">
                            <v-btn class="my-2" color="blue" v-bind="props" append-icon="mdi-plus">Ajouter à votre liste</v-btn>
                           </template>
                            <v-list>
        <v-list-item
          v-for="(item, index) in listStore.list"
          :key="index"
          :value="index"
          :prepend-avatar="item.img"
          @click="addArticleToList(index)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
                    </v-menu>
                    </div>
                </v-card>
                </v-col>
            </v-row>
        </v-card>
            <hr class="my-6"></hr>
            <v-card color="white" height="300" class="pa-4">
 <p>Produits Similaires</p>
 <v-row>
    <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
 </v-row>
            </v-card>
        <hr class="my-6"></hr>
        <v-card color="white pa-3">
            <v-row>
                <v-col cols="2">
 <div>
            Commentaires clients
            <v-divider></v-divider>
            <div class="d-flex flex-column">
 <div>
    <v-tabs direction="vertical" class="mt-3" background-color="transparent" show-arrows v-model="currentTab">
        <v-tab value="all"><v-icon icon="mdi-comment" class="mr-2"></v-icon> Tous ({{ allcomments.length }})</v-tab>
        <v-tab value="positive"><v-icon icon="mdi-thumb-up" color="info" class="mr-2"></v-icon> Positif ({{ positiveComments.length }})</v-tab>
        <v-tab value="negative"><v-icon icon="mdi-thumb-down" color="red" class="mr-2"></v-icon> Négatif ({{ negativeComments.length }})</v-tab>
    </v-tabs>
            </div>
            </div>
        </div>
                </v-col>
                <v-divider vertical class="" ></v-divider>
                <v-col cols="6">
                    <div v-for="comment in selectionComments" :key="comment.id" class="mb-6 mt-2">
<div class="d-flex" >
                        <div>
                            <v-img :src="comment.countryImg" width="40" class="mr-2"></v-img>
                        </div>
                       <div>{{ comment.author }}</div>
                    </div>
                    <v-rating
                    class="my-2"
  readonly
  :length="5"
  :size="26"
  :model-value="comment.rating"
  :active-color="comment.rating<3 ? 'red':'primary'"
 />
 <div class="my-2">Avis laissé le {{ formatDateToDateWithoutTime(comment.date) }}</div>
 <div class="my-2">{{ comment.content }}</div>
 <div class="my-2"><v-icon icon="mdi-thumb-up" class="mr-2"></v-icon>{{ comment.likes }}</div>
 <v-btn class="mr-3">Utile</v-btn>
 <v-btn>Signaler</v-btn>
                    </div>
                    
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script lang="ts" setup>
import Smartphone from '@/assets/smartphone.jpg';
import { useArticleStore } from '@/store/article.store';
import { computed, ref } from 'vue';
import {getArticleById } from '@/services/article.service'
import { useRoute } from 'vue-router';
import { ARTICLES } from "@/constants/article.constant";
import { useListStore } from '@/store/list.store';
import { COMMENTS } from '@/constants/comment.constant';
import { formatDateToDateWithoutTime } from '@/services/basic.service'
import type { TComment } from '@/interfaces/comment.interface';
const currentTab=ref<TComment>('all')
const listStore = useListStore();
const route = useRoute();
const articleId = ref<string>(route.params.id as string ?? '');
const articleStore = useArticleStore()
const article = computed(() => getArticleById(Number(articleId.value), ARTICLES));
const allcomments=computed(()=>COMMENTS.filter((comment)=>comment.articleId===article.value.id))
const negativeComments=computed(()=>allcomments.value.filter((comment)=>comment.rating<3))
const positiveComments=computed(()=>allcomments.value.filter((comment)=>comment.rating>=3))

const selectionComments=computed(()=>{
    if(currentTab.value==='all'){
        return allcomments.value
    }else if(currentTab.value==='positive'){
        return positiveComments.value
    }else{
        return negativeComments.value
    }
})

function addArticleToList(index:number){
    listStore.list[index].articles.push(article.value)
}
</script>