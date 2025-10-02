<template>
            <v-card height="200px" class="d-flex justify-center align-center" color="white"> 
                <div>
                    <router-link to="/list" style="text-decoration: none; color: black;">
                     <div>Vos listes d'envies</div>
                     <v-img height="120" :src="List"></v-img>
                     </router-link>
                </div>
            </v-card>
</template>
<script lang="ts" setup>
import List from '@/assets/list.jpg'
</script>