<template>
  <v-app-bar app absolute color="#1B7D84">
    <v-btn icon @click="drawer = !drawer" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
<div class="d-flex align-center mx-4">
  <a href="/" class="text-h4 mb-0 text-yellow" style="text-decoration: underline;">ShopBy</a>
  <v-img
    :src="ShopByIcon"
    alt="ShopBy Logo"
    width="48"
    height="48"
    class="ml-3"
  />
</div>
<v-autocomplete
  :items="autocompleteItems"
  item-title="label"
  item-value="label"
  v-model="valueSearch"
  hide-details
  dense
  prepend-inner-icon="mdi-magnify"
  class="bg-white ml-16"
  clearable
  @update:model-value="onChangeSearchValue"
>
<template #item="{ props,item }">
   <v-list-item
                  v-bind="props"
                  :subtitle="item.raw.type"
                  :title="item.raw.label"
                ></v-list-item>
</template>
</v-autocomplete>
   <v-btn class="mx-2" variant="elevated"  color="orange" icon="mdi-search-web" @click="transferdataToSearch()"></v-btn>
    <div class="d-flex align-center">
    <v-img
      :src="FlagFrance"
      alt="French Flag"
      width="52"
      height="32"
      class="ml-3"
    />
    <p class="mx-1">FR</p>
    </div>
    <div class="d-flex flex-column align-center mx-4">
      <a href="/account" style="text-decoration: underline;">
    <v-icon icon="mdi-account-circle" width="72" height="72"></v-icon>
    Mon Compte
    </a>
    </div>
       <div class="d-flex flex-column align-center mx-4">
  <v-img
    :src="ShopByIcon"
    alt="ShopBy Logo"
    width="25"
    height="25"
    class="ml-3"
  />
    Panier
    </div>
    
  </v-app-bar>
  <v-navigation-drawer color="navbar" v-model="drawer" temporary class="d-md-none">
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import ShopByIcon from '../assets/shopbyIcon.png'
import { useDisplay } from 'vuetify';
import FlagFrance from '../assets/FlagFrance.png'
import { useRouter } from 'vue-router';
import {ARTICLES, CATEGORY_ARTICLES} from '@/constants/article.constant'
const drawer = ref(false)
const{mdAndUp}=useDisplay()
const valueSearch=ref('')
const router = useRouter();

function transferdataToSearch():void{
  router.push({path:'/search',query:{
    ...router.currentRoute.value.query,
    name:valueSearch.value}})
}

const autocompleteItems = computed(() => [
  ...CATEGORY_ARTICLES.map(cat => ({
    type: 'Catégorie',
    label: cat.name
  })),
  ...ARTICLES.map(article => ({
    type: 'Article',
    label: article.name
  }))
])

function onChangeSearchValue(selectedValue:string){
  const value=autocompleteItems.value.find(item=>item.label===selectedValue)
  if(!value) return

  if(value.type==='Catégorie'){
    router.push({path:'/search',query:{...router.currentRoute.value.query,category:value.label}})
  }
  else{
    router.push({path:'/search',query:{...router.currentRoute.value.query,name:value.label}})
  }
}
</script>