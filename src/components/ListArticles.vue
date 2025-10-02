<template>
           <v-row class="my-3">
        <v-col v-for="(value,index) in currentlist.articles" :key="index" cols="2">
          <v-card color="white" class="pa-3">
              <v-img :src="value.img" height="200px"></v-img>
            <p class="text-center my-3">{{ value.name }}</p>
          </v-card>
        </v-col>
       </v-row>
</template>
<script lang="ts" setup>
import type { IListArticle } from '@/interfaces/list.interface';
import type { PropType } from 'vue';

const props = defineProps({
    currentlist: {
        type: Object as PropType<IListArticle>,
        required: true
    }
})
</script>