<template>
    <div>
    <div>Vos Commandes</div>
    <v-tabs class="my-2" v-model="currentTabs">
        <v-tab value="Commandes">Commandes</v-tab>
        <v-tab value="En attente d'expédition">En attente d'expédition</v-tab>
        <v-tab value="Acheter à nouveau">Acheter à nouveau</v-tab>
    </v-tabs>
    <div v-if="currentTabs==='Acheter à nouveau'">
       <v-row class="my-3">
        <v-col v-for="(value,index) in articlesAlreadyBuy" :key="index" cols="3">
          <v-card color="white" class="pa-3">
              <v-img :src="value.img" height="200px"></v-img>
            <p class="text-center my-3">{{ value.name }}</p>
          </v-card>
        </v-col>
       </v-row>
    </div>
    <div v-if="currentTabs!=='Acheter à nouveau'">
    <p class="my-4">{{ commandStore.commands.length }} commandes passées</p>
   
    <div  v-for="command in commandStore.commands" :key="command.id" >
         <v-divider class="my-8"></v-divider>
        <v-card color="success" class="pa-3 my-5" v-if="currentTabs===`En attente d'expédition`">
            <v-row class="align-center">
                <v-col cols="3">
                    <v-img :src="Livraison" height="100px"></v-img>
                </v-col>
                <v-col cols="9">
                        <p class="text-h5">Livraison prévue pour le {{ formatDateToDateWithoutTime(command.deliveryDate) }}</p>
                </v-col>
            </v-row>
        </v-card>
        <v-card color="#1B7D84" class="pa-3">
            <p class="font-weight-bold">N°DE COMMANDE : {{ command.id }}</p>
            <p class="font-weight-bold mt-3">Date de livraison : {{ formatDateToDateWithoutTime(command.deliveryDate) }}</p>
        </v-card>
        <v-card color="white" class="pa-3">
            <v-row class="align-center" v-for="value in command.articles" :key="value.id">
                <v-col cols="4">
                      <v-img :src="Smartphone" height="200px"></v-img>
                </v-col>
                <v-col cols="4">
                    <p class="text-center">{{ value.name }}</p>
                </v-col>
                <v-col cols="4">
                    <p class="text-center">{{ value.price }} €</p>
                </v-col>
            </v-row>
          </v-card>
                  <v-card color="#1B7D84" class="pa-3">
          <div class="my-4 text-center">
            Total : {{ command.totalPrice }} €
        </div>
        </v-card>
    </div>
    </div>
    </div>
</template>
<script lang="ts" setup>
import Smartphone from '@/assets/smartphone.jpg';
import type { TListArticle } from '@/interfaces/list.interface';
import { computed, ref } from 'vue';
import Livraison from '@/assets/icon_livraison.png'
import { useCommandStore } from '@/store/command.store';
import { formatDateToDateWithoutTime } from '@/services/basic.service';

const currentTabs=ref<TListArticle>('Commandes')
const commandStore=useCommandStore()

const articlesAlreadyBuy = computed(() => {
  const allArticles = commandStore.commands.flatMap(c => c.articles);

  return allArticles.filter(
    (article, index, self) =>
      index === self.findIndex(a => a.id === article.id)
  );
});
</script>