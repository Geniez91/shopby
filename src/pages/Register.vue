<template>
    <div>
        <h6 class="text-h6"  style="text-decoration: underline;">
            Inscription
        </h6>
        <v-form v-model="isFormValid" ref="form" >
        <v-card class="my-3" outlined>
            <v-card-title>
                Informations personnelles
                </v-card-title>
            <v-card-text>
                           <div>
                <div class="my-2">
                    <p>Nom :</p>
                    <v-text-field v-model="nom" required :rules="textRule" :counter="60" ></v-text-field>
                </div>
                <div class="my-2">
                    <p>Prénom :</p>
                    <v-text-field v-model="prenom" required :rules="textRule" :counter="60"></v-text-field>
                </div>
                <div class="my-2">
                    <p>Pays :</p>
                    <v-select v-model="country" required  :rules="textRule" :items="countries" clearable></v-select>
                </div>
                <div class="my-2">
                    <p>Téléphone :</p>
                    <v-text-field v-model="phone" required  :rules="phoneRule" type="tel" clearable></v-text-field>
                </div>
           </div>
            </v-card-text>
        </v-card>
        <v-divider color="white" class="my-6"></v-divider>
        <v-card class="my-3" outlined>
            <v-card-title>
                Informations de connexion
                </v-card-title>
            <v-card-text>
                            <div>
                 <div class="my-2">
                      <p>Email :</p>
                      <v-text-field v-model="email" required name="email" :rules="emailRule" type="email"></v-text-field>
                 </div>
                 <div class="my-2">
                      <p>Mot de passe :</p>
                      <v-text-field v-model="password" required name="password" type="password" :rules="passwordRule"></v-text-field>
                      <p style="font-style: italic;">Le mot de passe doit comporter au moins 8 caractères, dont une majuscule, une minuscule et un chiffre.</p>
                 </div>
                            </div>
            </v-card-text>
        </v-card>
        </v-form>
            <div class="d-flex flex-column">
            <v-btn class="my-1" :color="isFormValid ? 'primary' : ''" :disabled="!isFormValid" @click="handleRegisterUser">S'inscrire</v-btn>
            <a class="my-1" href="/login">Vous avez déjà un compte ? Connectez-vous</a>
            </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { registerUser } from '@/services/register.service'
import { useRouter } from 'vue-router'
import { emailRule, phoneRule, textRule, passwordRule } from '@/services/rulesForm.service'
import type { IRegisterInput } from '@/interfaces/register.interface'
const prenom =ref<string>('')
const nom = ref<string>('')
const country = ref<string>('')
const phone = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()

const isFormValid = ref(false)
const countries = [
  'France',
  'Belgique',
  'Suisse',
  'Canada',
  'Allemagne',
  'Espagne',
  'Italie'
]

async function handleRegisterUser(){
  const form: IRegisterInput = {
    nom: nom.value,
    prenom: prenom.value,
    country: country.value,
    phone: phone.value,
    email: email.value,
    password: password.value
  }  
  await registerUser(form);
  router.push('/activation')
}

</script>