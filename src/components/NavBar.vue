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

    
   <v-text-field hide-details dense solo-inverted prepend-inner-icon="mdi-magnify" class="bg-white ml-16" :model-value="value" @update:model-value="value = $event"></v-text-field>
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
    <v-icon icon="mdi-account-circle" width="72" height="72"></v-icon>
    Mon Compte
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
import { ref } from 'vue';
import ShopByIcon from '../assets/shopbyIcon.png'
import { useDisplay } from 'vuetify';
import FlagFrance from '../assets/FlagFrance.png'
const drawer = ref(false)
const{mdAndUp}=useDisplay()
const value=ref('')
</script>