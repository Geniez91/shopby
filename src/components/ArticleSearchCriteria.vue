<template>
    <div>
        <div><p>Categories</p>
        <hr></hr>
 <v-chip-group column>
  <v-chip
    v-for="value in CATEGORY_ARTICLES"
    :key="value.id"
    :style="currentselectedCategory===value.name ? 'color:#1B7D84' : undefined"
    class="my-1 w-100"
  @click="emit('update:currentselectedCategory', value.name)">
    {{ value.name }}
  </v-chip>
</v-chip-group>
        </div>
        <div><p>Avis</p>
        <hr></hr>
        <v-chip-group column>
            <v-chip v-for="value in ratingMax" :key="value" :style="currentRate===value.toString() ? 'color:#1B7D84' : undefined" class="my-1 w-100" @click="emit('update:currentRate', value.toString())">{{ value }} étoiles</v-chip>
        </v-chip-group>
        </div>
        <div>Prix</div>
        <hr></hr>
        <v-range-slider class="my-4" step="10" thumb-label="always" min="0" max="1000" v-model="priceRange!" @update:model-value="emit('update:priceRange', $event)"></v-range-slider>
        <div><p>Date</p>
        <hr></hr>
                <v-chip-group column>
            <v-chip v-for="value in dateCriteria" :key="value"     :style="currentDate===value ? 'color:#1B7D84' : undefined" class="my-1 w-100" @click="emit('update:currentDate', value)">{{ value }}</v-chip>
        </v-chip-group>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { CATEGORY_ARTICLES } from "@/constants/article.constant";
const ratingMax=5;
const dateCriteria:string[]=[`Moins d'un an`,`1 à 5 ans`,`Plus de 5 ans`]

const props=defineProps<{
  currentselectedCategory: string | null
  currentRate: string | null
  priceRange: [number,number] | null
  currentDate: string | null
}>()

const emit = defineEmits<{
  (e:'update:currentselectedCategory', v:string|null):void
  (e:'update:currentRate', v:string|null):void
  (e:'update:priceRange', v:[number,number]):void
  (e:'update:currentDate', v:string|null):void
}>()
</script>
