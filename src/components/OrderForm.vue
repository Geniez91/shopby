<template>
    <div>
            <p>Facturation : </p>
            <v-text-field label="Nom" class="my-4" width="300" v-model="local.name" required :rules="requiredRule"></v-text-field>
            <v-text-field prepend-inner-icon="mdi-credit-card" :rules="cardRules" label="Numéro de carte bancaire" class="my-4" width="300" v-model="displayCardNumber"  maxlength="19" required ></v-text-field>
             <p class="my-2">Date d'expiration : </p>
            <v-row>
  <v-col cols="6">
    <v-select
      v-model="local.expMonth"
      :items="['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']"
      label="Mois"
      required
      :rules="requiredRule"
    />
  </v-col>
  <v-col cols="6">
    <v-select
      v-model="local.expYear"
      :items="['2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035']"
      label="Année"
      required
      :rules="requiredRule"
    />
  </v-col>
</v-row>
            <v-text-field v-model="local.cvv" label="Cryptogramme" class="my-4" width="300" maxlength="3"></v-text-field>
        </div>
</template>

<script lang="ts" setup>
import type { IOrderForm } from '@/interfaces/order.interface';
import { computed, reactive, watch } from 'vue';
const cardRegex = /^([456]\d{3})([\s-]?\d{4}){3}$/

const props = defineProps<{
  orderForm: IOrderForm
}>()

const local = reactive<IOrderForm>({
  name: props.orderForm.name,
  cardNumber: props.orderForm.cardNumber,
  expMonth: props.orderForm.expMonth,
  expYear: props.orderForm.expYear,
  cvv: props.orderForm.cvv
})

const cardRules = [
  () => !!local.cardNumber || "Le numéro est requis",
  () => cardRegex.test(local.cardNumber) || "Numéro de carte invalide"
]

const requiredRule = [(v: string) => !!v || 'Ce champ est requis']

const displayCardNumber = computed({
  get: () => {
    return local.cardNumber.replace(/\D/g, "").replace(/(.{4})/g, "$1-").replace(/-$/, "")
  },
  set: (val) => {
    local.cardNumber = val.replace(/\D/g, "")
  }
})

const emit = defineEmits<{
  (e: 'update:orderForm', v: IOrderForm): void
}>()

watch(local, () => {
  emit('update:orderForm', { ...local })
}, { deep: true })
</script>