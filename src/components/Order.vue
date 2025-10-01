<template>
    <div>
        <div>Commandes</div>
        <v-divider color="white" class="my-2" length="200"></v-divider>
        <div class="font-weight-bold my-4">Récapitulatif de la commande</div>
<v-card color="white" class="pa-3">
            <v-row class="align-center" v-for="value in articles">
                <v-col cols="4">
                      <v-img :src="value.img" height="100px"></v-img>
                </v-col>
                <v-col cols="4">
                    <p class="text-center">{{ value.name }}</p>
                </v-col>
                <v-col cols="4">
                    <p class="text-center">{{ value.price }} €</p>
                </v-col>
            </v-row>
            <v-row class="align-center" v-if="codePromo === 'promo'">
                <v-col cols="12" class="d-flex justify-center">
                      Code promo 10 €
                </v-col>
            </v-row>
</v-card>
<v-card color="#1B7D84" class="pa-3">
          <div class="my-4 text-center">
            Total : {{ totalPrice }} €
        </div>
        </v-card>
        <v-divider class="my-4"></v-divider>
         <v-form v-model="valid" ref="form" >
                <div>
            <p>Code de Promotion : </p>
            <v-text-field label="Code" v-model="codePromo" class="my-2" width="300"></v-text-field>
            <v-alert v-if="codePromo === 'promo'" class="my-3" color="info">Code promo de 10 € ajouté </v-alert>
        </div>
                <v-divider class="my-4"></v-divider>
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
        <v-divider class="my-4"></v-divider>
        <div>
            <p>Facturation : </p>

            <v-text-field label="Nom" class="my-4" width="300" v-model="nom" required :rules="requiredRule"></v-text-field>
            <v-text-field prepend-inner-icon="mdi-credit-card" :rules="cardRules" label="Numéro de carte bancaire" class="my-4" width="300" v-model="displayCardNumber"  maxlength="19" required ></v-text-field>
             <p class="my-2">Date d'expiration : </p>
            <v-row>
  <v-col cols="6">
    <v-select
      v-model="expMonth"
      :items="['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']"
      label="Mois"
      required
      :rules="requiredRule"
    />
  </v-col>
  <v-col cols="6">
    <v-select
      v-model="expYear"
      :items="['2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035']"
      label="Année"
      required
      :rules="requiredRule"
    />
  </v-col>
</v-row>
            <v-text-field v-model="cryptogramme" label="Cryptogramme" class="my-4" width="300" maxlength="3"></v-text-field>
        </div>
        <v-btn :disabled="!valid" color="green" class="" width="100%" @click="submit">Valider la commande</v-btn>
        </v-form>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import Livraison from '@/assets/icon_livraison.png'
import { useArticleStore } from '@/store/article.store';
import { ACCOUNT } from '@/constants/account.constant';
import type { VForm } from 'vuetify/components';
import { useCommandStore } from '@/store/command.store';
import { useRouter } from 'vue-router';
const nom=ref<string>('');
const codePromo=ref<string>('');
const numeroCarte=ref<string>('');
const cryptogramme=ref<string>('');
const adresseLivraison = ref<string>(ACCOUNT?.deliveryAdress ?? '');
const isDisabledDeliviery=ref<boolean>(true);
const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);
const cardRegex = /^([456]\d{3})([\s-]?\d{4}){3}$/
const expMonth = ref<string>('');
const expYear = ref<string>('');
const valid = ref(false)
const commandStore=useCommandStore()
const router = useRouter()
const form = ref<VForm | null>(null)

const cardRules = [
  () => !!numeroCarte.value || "Le numéro est requis",
  () => cardRegex.test(numeroCarte.value) || "Numéro de carte invalide"
]

const requiredRule = [(v: string) => !!v || 'Ce champ est requis']

const displayCardNumber = computed({
  get: () => {
    return numeroCarte.value.replace(/\D/g, "").replace(/(.{4})/g, "$1-").replace(/-$/, "")
  },
  set: (val) => {
    numeroCarte.value = val.replace(/\D/g, "")
  }
})

const totalPrice=computed(()=>{
    if(codePromo.value=='promo'){
        return articles.value.reduce((acc,article)=>acc +article.price,0)-10
    }
    return articles.value.reduce((acc,article)=>acc+article.price,0)
})

const submit = async () => {
  if (form.value && await form.value.validate()) {
    commandStore.addCommand({
        id: Math.floor(Math.random()*10000),
        articles: articles.value,
        deliveryDate: new Date(),
        accountId: 1,
        status: 'En cours de traitement',
        totalPrice: totalPrice.value
    })
    alert('Commande validée !')
    articleStore.clearCart()
    router.push('/account')
  }
}


</script>