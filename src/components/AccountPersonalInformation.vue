<template>
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
</template>
<script lang="ts" setup>
import { useAccountStore } from '@/store/account.store';
import { ref } from 'vue';
const accountStore=useAccountStore()
const name=ref<string>(accountStore.account.lastName)
const firstName=ref<string>(accountStore.account.firstName)
const country=ref<string>(accountStore.account.country)
const email=ref<string>(accountStore.account.email)
const phone=ref<string>(accountStore.account.phone)
const disabledPersonalInformation=ref<boolean>(true)

function saveChanges(){
    accountStore.updateAccount({
        lastName:name.value,
        firstName:firstName.value,
        country:country.value,
        email:email.value,
        phone:phone.value,
    })
   
}

</script>