<template>
    <div>
        <p>Vos listes d'envies</p>
        <v-row class="my-3">
            <list-card :currentlist="currentlist" @update:currentlist="currentlist=$event"></list-card>
            <v-col>
              <list-add-new-list></list-add-new-list>
          </v-col>
        </v-row>
        <v-divider></v-divider>
     <list-description :currentlist="currentlist"></list-description>
        <v-divider></v-divider>
      <list-articles :currentlist="currentlist"></list-articles>
    </div>
</template>
<script lang="ts" setup>
import type { IListArticle } from '@/interfaces/list.interface';
import { ref } from 'vue';
import { useListStore } from '@/store/list.store';
const listStore=useListStore();
const currentlist=ref<IListArticle>(listStore.list[0])
</script>