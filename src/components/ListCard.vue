<template>
                <v-col cols="3" v-for="(value, index) in listStore.list" :key="value.id">
                <v-card class="pa-3" :hover="true" :color="props.currentlist.id===value.id?'blue':'white'" @click="$emit('update:currentlist', value)">
                    <v-img :src="value.img" height="80px"></v-img>
                    <h6 class="text-h6 text-center my-2" style="text-decoration: underline;">{{ value.name }}</h6>
                </v-card>
            </v-col>
</template>

<script lang="ts" setup>
import type { IListArticle } from '@/interfaces/list.interface';
import type { PropType } from 'vue';
import { useListStore } from '@/store/list.store';
const listStore=useListStore();

const props = defineProps({
    currentlist: {
        type: Object as PropType<IListArticle>,
        required: true
    }
})

const emit = defineEmits(['update:currentlist']);

</script>