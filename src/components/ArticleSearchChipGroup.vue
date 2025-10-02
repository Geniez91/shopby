<template>
             <v-chip-group filter>
                <v-chip v-if="getNameRouteParam">{{ getNameRouteParam }}</v-chip>
                <v-chip>{{ currentselectedCategory }}</v-chip>
                <v-chip v-if="currentRate">{{ currentRate }} étoiles</v-chip>
                <v-chip v-if="priceRange">{{ `${priceRange[0]} - ${priceRange[1]} €` }}</v-chip>
                <v-chip v-if="currentDate">{{ currentDate }}</v-chip>
                <v-chip v-for="value in searchFilter" :key="value">
                  {{ value }}
                </v-chip>
            </v-chip-group>
</template>

<script lang="ts" setup>
const props=defineProps<{
  getNameRouteParam: string | null
  currentselectedCategory: string | null
  currentRate: string | null
  priceRange: [number,number] | null
  currentDate: string | null
  searchFilter: string[]
}>()
</script>