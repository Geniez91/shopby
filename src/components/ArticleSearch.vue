<template>
    <v-row class="fill-height">
        <v-col cols="2" style="border:1px solid 
        ;" class="bg-white">
        <article-search-criteria v-model:currentselected-category="currentselectedCategory!" v-model:currentRate="currentRate" v-model:price-range="priceRange!" v-model:current-date="currentDate"></article-search-criteria>
        </v-col>
        <v-col>
            <article-search-chip-group :getNameRouteParam="getNameRouteParam" :currentselectedCategory="currentselectedCategory!" :currentRate="currentRate" :priceRange="priceRange!" :currentDate="currentDate" :searchFilter="searchFilter"></article-search-chip-group>
            <article-search-result :getNameRouteParam="getNameRouteParam" :currentselectedCategory="currentselectedCategory!" :currentRate="currentRate" :priceRange="priceRange!" :currentDate="currentDate" :searchFilter="searchFilter"></article-search-result>
        </v-col>

    </v-row>
    
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const searchFilter=ref<string[]>([])
const route = useRoute();
const getNameRouteParam = ref<string>(route.query.name as string ?? '');
const getCategoryRouteParam = route.query.category as string | undefined;
const currentselectedCategory = ref<string | undefined>(getCategoryRouteParam);
const currentRate=ref<string>('')
const currentDate=ref<string>('')
const priceRange=ref<[number,number]>()
</script>