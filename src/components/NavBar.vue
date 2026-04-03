<template>
  <v-app-bar app absolute color="#1B7D84">
    <v-btn icon @click="drawer = !drawer" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
<div class="d-flex align-center mx-4">
  <router-link to="/" class="text-h4 mb-0 text-yellow" style="text-decoration: underline;">ShopBy</router-link>
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
   <div v-if="isAuthenticated" class="d-flex align-center">
      <div class="d-flex flex-column align-center mx-4">
      <router-link to="/account" style="text-decoration: none; color: #000;">
    <v-icon icon="mdi-account-circle" width="72" height="72"></v-icon>
    Mon Compte
    </router-link>
    </div>
       <div class="d-flex flex-column align-center mx-4">
          <router-link class="d-flex" to="/cart" style="text-decoration: none; color: #000;">
  <v-img
    :src="ShopByIcon"
    alt="ShopBy Logo"
    width="25"
    height="25"
    class="mx-3"
  />
    Panier
 {{ articles.length }}
          </router-link>
        
    </div>
    <div class="d-flex flex-column align-center">
      <v-btn  @click="handLogOut" style="color: #000;" prepend-icon="mdi-logout">Déconnexion</v-btn>
    </div>
   </div>
    

    <div class="d-flex align-center mx-4" v-else>
      <div class="d-flex flex-column align-center mx-4">
      <router-link to="/login" style="text-decoration: none; color: #000;">
           <v-icon icon="mdi-login" width="72" height="72"></v-icon>
        Login</router-link>
      </div>
      <div class="d-flex flex-column align-center mx-4">
      <router-link to="/register" style="text-decoration: none; color: #000;">
           <v-icon icon="mdi-account" width="72" height="72"></v-icon>
        S'inscrire</router-link>
      </div>  
</div>
  </v-app-bar>
  <v-navigation-drawer color="navbar" v-model="drawer" temporary class="d-md-none">
  </v-navigation-drawer>
        
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import ShopByIcon from '../assets/shopbyIcon.png'
import { useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import {ARTICLES, CATEGORY_ARTICLES} from '@/constants/article.constant'
import { useArticleStore } from '@/store/article.store';
import { useAccountStore } from '@/store/account.store';
import { logoutUser } from '@/services/logout.service';

const drawer = ref(false)
const{mdAndUp}=useDisplay()
const valueSearch=ref('')
const router = useRouter();
const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);
import { storeToRefs } from 'pinia'

const accountStore = useAccountStore()
const { isAuthenticated } = storeToRefs(accountStore)

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

function handLogOut(){
 logoutUser();
  accountStore.logOut();
  router.push('/login')
}
</script>