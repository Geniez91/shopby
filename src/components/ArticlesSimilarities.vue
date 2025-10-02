<template>
    <v-card color="white" height="300" class="pa-4">
 <p>Produits Similaires</p>
 <v-row>
    <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
 </v-row>
            </v-card>
</template>

<script lang="ts" setup>
import Smartphone from '@/assets/smartphone.jpg'
</script>