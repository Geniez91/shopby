<template>
    <div>
    <p>Vos Commandes</p>
    <v-tabs class="my-2" v-model="currentTabs">
        <v-tab value="Commandes">Commandes</v-tab>
        <v-tab value="En attente d'expédition">En attente d'expédition</v-tab>
        <v-tab value="Acheter à nouveau">Acheter à nouveau</v-tab>
    </v-tabs>
    <div v-if="currentTabs==='Acheter à nouveau'">
        <historic-order-article-already-buy></historic-order-article-already-buy>
    </div>
    <div v-if="currentTabs!=='Acheter à nouveau'">
        <historic-order-commands :currentTabs="currentTabs"></historic-order-commands>
    </div>
    </div>
</template>
<script lang="ts" setup>
import type { TListArticle } from '@/interfaces/list.interface';
import { ref } from 'vue';
const currentTabs=ref<TListArticle>('Commandes')
</script>