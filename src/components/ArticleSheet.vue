<template>
    <v-card class="bg-white">
            <v-row>
                <v-col cols="9">
                    <v-breadcrumbs :items="article.breadcrumb" ></v-breadcrumbs>
                    <v-row>
                        <v-col>
                            <v-img :src="BASE_URL + article.photos[0].url" height="650px"></v-img>
                            <div class="d-flex my-3">
                                <v-img
                                v-for="value in article.photos"
                                    :aspect-ratio="1"
                                    class=""
                                    :src="BASE_URL + value.url"
                                    width="50"
                                ></v-img>
                            </div>

                        </v-col>
                        <v-col>
                            <div class="my-3">
                <p>{{ article.nomArticle }}</p>
                <v-rating
  readonly
  :length="article.averageRating"
  :size="26"
  :model-value="3"
  active-color="primary"
 /> (12 avis)
            </div>
            <div class="my-3">Marque : {{ article.brandName }}</div>
            <div class="my-3">Description : {{ article.descriptionArticle }}</div>
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
</template>
<script lang="ts" setup>
import { useArticleStore } from '@/store/article.store';
import { useListStore } from '@/store/list.store';
import type { IArticle } from '@/interfaces/article.interface';
import {addWishlistItem} from '@/services/wishlist.service'
const listStore = useListStore();
const articleStore = useArticleStore()
const BASE_URL = "http://localhost:8080";


const props=defineProps<{
    article: IArticle
}>()

function addArticleToList(index:number){
    listStore.list[index].articles.push(props.article)
    addWishlistItem(listStore.list[index].id, props.article.idArticle)
}
</script>