<template>
    <div>
        <div>Commandes</div>
        <v-divider color="white" class="my-2" length="200"></v-divider>
        <div class="font-weight-bold my-4">Récapitulatif de la commande</div>
        <order-card-articles :totalPrice="totalPrice" :codePromo="codePromo"></order-card-articles>
        <v-divider class="my-4"></v-divider>
         <v-form v-model="valid" ref="form" >
                <div>
            <p>Code de Promotion : </p>
            <v-text-field label="Code" v-model="codePromo" class="my-2" width="300"></v-text-field>
            <v-alert v-if="codePromo === 'promo'" class="my-3" color="info">Code promo de 10 € ajouté </v-alert>
        </div>
                <v-divider class="my-4"></v-divider>
       <order-adress></order-adress>
        <v-divider class="my-4"></v-divider>
        <order-form :order-form="formData" v-model:formData="formData"></order-form>
        <v-btn :disabled="!valid" color="green" class="" width="100%" @click="submit">Valider la commande</v-btn>
        </v-form>
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useArticleStore } from '@/store/article.store';
import type { VForm } from 'vuetify/components';
import { useCommandStore } from '@/store/command.store';
import { useRouter } from 'vue-router';
const codePromo=ref<string>('');
const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);
const valid = ref(false)
const commandStore=useCommandStore()
const router = useRouter()
const form = ref<VForm | null>(null)

const formData = reactive({
  name: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvv: ''
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