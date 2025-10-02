<template>
    <v-card height="200px" class="d-flex justify-center align-center" color="white">
    <div>
        <router-link to="/historic-order" style="text-decoration: none; color: black;">
            <div>Vos commandes</div>
            <v-img  height="130" :src="Carton"></v-img>
        </router-link>
    </div>
</v-card>
</template>
<script lang="ts" setup>
import Carton from '@/assets/carton.png'
</script>