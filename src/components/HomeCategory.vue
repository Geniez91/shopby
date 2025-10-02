<template>
            <h6 class="text-h6" style="text-decoration: underline;">Categories</h6>
        <v-row>
            <v-col v-for="value in CATEGORY_ARTICLES" :key="value.id">
                <v-card height="150px" color="#1B8450" hover :to="`/search?category=${value.name}`">
                    <div class="d-flex flex-column align-center justify-center fill-height">
                        <v-icon size="48">{{ value.icon }}</v-icon>
                        <p>{{ value.name }}</p>
                    </div>    
                </v-card>  
            </v-col>
        </v-row>
</template>
<script lang="ts" setup>
import { CATEGORY_ARTICLES } from "@/constants/article.constant";
</script>