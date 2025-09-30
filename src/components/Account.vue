<template>
    <div class="ma-3" >
        <h6 class="text-h6" style="text-decoration: underline;">Mon Compte</h6>
        <v-row class="mt-2">
            <v-col>
                <v-card color="white"> <h6 class="text-h6 text-center" style="text-decoration: underline;">Mes informations personnelles</h6>
                <div class="text-center mt-2">
                    <div>Nom : {{ ACCOUNT.lastName }}</div>
                    <div class="my-2">Prénom : {{ ACCOUNT.firstName }}</div>
                    <div class="my-2">Pays : {{ ACCOUNT.country }}</div>
                    <div class="my-2">Adresse Mail : {{ ACCOUNT.email }}</div>
                    <div class="my-2">Téléphone : {{ ACCOUNT.phone }}</div>
                </div>
                </v-card>
            </v-col>
              <v-col>
                <v-card class="fill-height" color="white">
                    <h6 class="text-h6 text-center" style="text-decoration: underline;">Mes adresses</h6>
                <div class="text-center mt-2">
                    <div>Livraison : 6 rue Ernest Cousseran 91470 Limours France</div>
                    <div class="my-2">Facturation : 6 rue Ernest Cousseran 91470 Limours France</div>
                </div>
                </v-card>
            </v-col>
        </v-row>
        <v-divider color="white" class="my-8"></v-divider>
        <v-row>
            <v-col>
<v-card height="200px" class="d-flex justify-center align-center" color="white">
    <div>
        <router-link to="/historic-order" style="text-decoration: none; color: black;">
            <div>Vos commandes</div>
            <v-img  height="130" :src="Carton"></v-img>
        </router-link>
    </div>
</v-card>

            </v-col>
              <v-col>
                <v-card height="200px" class="d-flex justify-center align-center" color="white"> 
                <div>
                    <router-link to="/list" style="text-decoration: none; color: black;">
                     <div>Vos listes d'envies</div>
                     <v-img height="120" :src="List"></v-img>
                     </router-link>
                </div>
                   
                
                </v-card>
            </v-col>
        </v-row>
                <v-divider color="white" class="my-6"></v-divider>
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
    </div>
    <div></div>
</template>
<script lang="ts" setup>
import Carton from '@/assets/carton.png'
import { ARTICLES } from "@/constants/article.constant";
import { getFirstFiveArticlesByDate } from '@/services/article.service'
import List from '../assets/list.jpg'
import { ACCOUNT } from '@/constants/account.constant';
</script>