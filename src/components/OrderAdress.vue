<template>
            <div>
            <p>Adresse de livraison : </p>
            <div class="d-flex mt-2" >
                <div>
                    <v-text-field width="600" v-model="adresseLivraison"  :disabled="isDisabledDeliviery"></v-text-field>
                </div>
                <div class="mx-4 d-flex ">  
            <v-btn height="60" v-if="!isDisabledDeliviery" prepend-icon="mdi-check">Valider</v-btn>
            <v-btn height="60" v-if="!isDisabledDeliviery" prepend-icon="mdi-close" class="mx-4">Annuler</v-btn>
            </div>
            </div>
            <div class="d-flex flex-column">
             <v-btn  width="300" class="" @click="isDisabledDeliviery = !isDisabledDeliviery">Nouvelle adresse ?</v-btn>
            </div>
                   <v-card color="success" class="pa-3 my-5">
            <v-row class="align-center">
                <v-col cols="3">
                    <v-img :src="Livraison" height="100px"></v-img>
                </v-col>
                <v-col cols="9">
                        <p class="text-h5">Livraison prévue pour le 24 septembre</p>
                </v-col>
            </v-row>
        </v-card>
        </div>
</template>
<script lang="ts" setup>
import { ACCOUNT } from '@/constants/account.constant';
import { ref } from 'vue';
import Livraison from '@/assets/icon_livraison.png'
const adresseLivraison = ref<string>(ACCOUNT?.deliveryAdress ?? '');
const isDisabledDeliviery=ref<boolean>(true);
</script>