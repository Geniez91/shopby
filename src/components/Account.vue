<template>
    <div class="ma-3" >
        <h6 class="text-h6" style="text-decoration: underline;">Mon Compte</h6>
        <v-row class="mt-2">
            <v-col>
                <v-card color="white"> <h6 class="text-h6 text-center" style="text-decoration: underline;">Mes informations personnelles</h6>
                <div class="d-flex flex-column align-center mt-2">
                    <div>Nom : <v-text-field width="300" :variant="disabledPersonalInformation ? 'plain' : 'outlined'" :disabled="disabledPersonalInformation" v-model="name" class="text-center"></v-text-field></div>
                    <div>Prénom : <v-text-field width="300" :variant="disabledPersonalInformation ? 'plain' : 'outlined'" :disabled="disabledPersonalInformation" v-model="firstName" class="text-center"></v-text-field></div>
                    <div>Pays : <v-text-field width="300" :variant="disabledPersonalInformation ? 'plain' : 'outlined'" :disabled="disabledPersonalInformation" v-model="country" class="text-center"></v-text-field></div>
                    <div>Adresse Mail : <v-text-field width="300" :variant="disabledPersonalInformation ? 'plain' : 'outlined'" :disabled="disabledPersonalInformation" v-model="email" class="text-center"></v-text-field></div>
                    <div>Téléphone : <v-text-field width="300" :variant="disabledPersonalInformation ? 'plain' : 'outlined'" :disabled="disabledPersonalInformation" v-model="phone" class="text-center"></v-text-field></div>
                    <v-btn v-if="disabledPersonalInformation" prepend-icon="mdi-pencil" class="mb-5" color="warning" @click="disabledPersonalInformation = false">Modifier mes informations</v-btn>
                    <v-btn v-if="!disabledPersonalInformation" prepend-icon="mdi-content-save" class="mb-5" color="success" @click="saveChanges(); disabledPersonalInformation=true">Enregistrer les modifications</v-btn>
                </div>
                </v-card>
            </v-col>
              <v-col>
                <v-card class="fill-height" color="white">
                    <h6 class="text-h6 text-center" style="text-decoration: underline;">Mes adresses</h6>
                <div class="d-flex flex-column align-center mt-2">
                    <div>Livraison : <v-text-field width="350" :variant="disabledAdress ? 'plain' : 'outlined'" :disabled="disabledAdress" v-model="deliveryAdress" class="text-center"></v-text-field></div>
                    <div class="my-2">Facturation : <v-text-field width="350" :variant="disabledAdress ? 'plain' : 'outlined'" :disabled="disabledAdress" v-model="facturationAdress" class="text-center"></v-text-field></div>
                    <v-btn v-if="disabledAdress" prepend-icon="mdi-pencil" class="my-2" color="warning" @click="disabledAdress = false">Modifier mes informations</v-btn>
                    <v-btn v-if="!disabledAdress" prepend-icon="mdi-content-save" class="mb-5" color="success" @click="saveChanges(); disabledAdress=true">Enregistrer les modifications</v-btn>
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
import { ref } from 'vue';
import { useAccountStore } from '@/store/account.store';

const disabledPersonalInformation=ref<boolean>(true)
const disabledAdress=ref<boolean>(true)
const accountStore=useAccountStore()
const name=ref<string>(accountStore.account.lastName)
const firstName=ref<string>(accountStore.account.firstName)
const country=ref<string>(accountStore.account.country)
const email=ref<string>(accountStore.account.email)
const phone=ref<string>(accountStore.account.phone)
const deliveryAdress=ref<string>(accountStore.account.deliveryAdress ?? '')
const facturationAdress=ref<string>(accountStore.account.facturationAdress ?? '')


function saveChanges(){
    accountStore.updateAccount({
        lastName:name.value,
        firstName:firstName.value,
        country:country.value,
        email:email.value,
        phone:phone.value,
        deliveryAdress:deliveryAdress.value,
        facturationAdress:facturationAdress.value
    })
   
}
</script>