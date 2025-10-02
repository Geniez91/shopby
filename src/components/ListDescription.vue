<template>
      <div class="my-3">
           <p>{{ currentlist.name }}</p>
           <p class="my-4">{{ currentlist.description }}</p>
           <p class="my-4">Liste de {{ currentlist.articles.length }} objets crée le 5 janvier 2024 et modifié le 23 octobre 2025</p>
           <v-autocomplete
  :items="autocompleteItems"
  item-title="label"
  item-value="label"
  v-model="valueSearch"
  hide-details
  dense
  prepend-inner-icon="mdi-magnify"
  class="bg-white"
  clearable
  @update:model-value="onChangeSearchValue"
>
<template #item="{ props,item }">

   <v-list-item
                  v-bind="props"
                  :subtitle="`${item.raw.price}€`"
                  :title="item.raw.label"
                  :prepend-avatar="item.raw.img"
                ></v-list-item>
</template>
</v-autocomplete>
        </div>
</template>
<script lang="ts" setup>
import { ARTICLES } from '@/constants/article.constant';
import type { IListArticle } from '@/interfaces/list.interface';
import { computed, ref, type PropType } from 'vue';
const props = defineProps({
    currentlist: {
        type: Object as PropType<IListArticle>,
        required: true
    }
})

const valueSearch=ref('')
const autocompleteItems = computed(() => [
  ...ARTICLES.map(article => ({
    ...article,
    type: 'Article',
    label: article.name,
  }))
])

function onChangeSearchValue(selectedValue:string){
  const value=autocompleteItems.value.find(item=>item.label===selectedValue)
  props.currentlist.articles.push(ARTICLES.find(article=>article.id===value?.id)!)
}
</script>