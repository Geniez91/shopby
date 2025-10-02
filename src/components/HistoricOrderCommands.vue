<template>
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
</template>
<script lang="ts" setup>
import Smartphone from '@/assets/smartphone.jpg';
import type { TListArticle } from '@/interfaces/list.interface';
import { ref } from 'vue';
import Livraison from '@/assets/icon_livraison.png'
import { useCommandStore } from '@/store/command.store';
import { formatDateToDateWithoutTime } from '@/services/basic.service';

const props=defineProps<{
    currentTabs:TListArticle
}>()
const commandStore=useCommandStore()
</script>