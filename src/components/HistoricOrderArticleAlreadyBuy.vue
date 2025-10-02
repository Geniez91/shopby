<template>
           <v-row class="my-3">
        <v-col v-for="(value,index) in articlesAlreadyBuy" :key="index" cols="3">
          <v-card color="white" class="pa-3">
              <v-img :src="value.img" height="200px"></v-img>
            <p class="text-center my-3">{{ value.name }}</p>
          </v-card>
        </v-col>
       </v-row>
</template>
<script lang="ts" setup>
import { useCommandStore } from '@/store/command.store';
import { computed } from 'vue';
const commandStore=useCommandStore()

const articlesAlreadyBuy = computed(() => {
  const allArticles = commandStore.commands.flatMap(c => c.articles);
  return allArticles.filter(
    (article, index, self) =>
      index === self.findIndex(a => a.id === article.id)
  );
});
</script>