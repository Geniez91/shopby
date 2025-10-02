<template>
       <v-card class="fill-height" color="white">
                    <h6 class="text-h6 text-center" style="text-decoration: underline;">Mes adresses</h6>
                <div class="d-flex flex-column align-center mt-2">
                    <div>Livraison : <v-text-field width="350" :variant="disabledAdress ? 'plain' : 'outlined'" :disabled="disabledAdress" v-model="deliveryAdress" class="text-center"></v-text-field></div>
                    <div class="my-2">Facturation : <v-text-field width="350" :variant="disabledAdress ? 'plain' : 'outlined'" :disabled="disabledAdress" v-model="facturationAdress" class="text-center"></v-text-field></div>
                    <v-btn v-if="disabledAdress" prepend-icon="mdi-pencil" class="my-2" color="warning" @click="disabledAdress = false">Modifier mes informations</v-btn>
                    <v-btn v-if="!disabledAdress" prepend-icon="mdi-content-save" class="mb-5" color="success" @click="saveChanges(); disabledAdress=true">Enregistrer les modifications</v-btn>
                </div>
                </v-card>
</template>
<script lang="ts" setup>
import { useAccountStore } from '@/store/account.store'
import { ref } from 'vue'

const disabledAdress=ref<boolean>(true)
const accountStore=useAccountStore()
const deliveryAdress=ref<string>(accountStore.account.deliveryAdress ?? '')
const facturationAdress=ref<string>(accountStore.account.facturationAdress ?? '')


function saveChanges(){
    accountStore.updateAccount({
        ...accountStore.account,
        deliveryAdress:deliveryAdress.value,
        facturationAdress:facturationAdress.value
    })
   
}
</script>