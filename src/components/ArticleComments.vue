<template>
    <v-card color="white pa-3">
            <v-row>
                <v-col cols="2">
 <div>
            Commentaires clients
            <v-divider></v-divider>
            <div class="d-flex flex-column">
 <div>
    <v-tabs direction="vertical" class="mt-3" background-color="transparent" show-arrows v-model="currentTab">
        <v-tab value="all"><v-icon icon="mdi-comment" class="mr-2"></v-icon> Tous ({{ allcomments.length }})</v-tab>
        <v-tab value="positive"><v-icon icon="mdi-thumb-up" color="info" class="mr-2"></v-icon> Positif ({{ positiveComments.length }})</v-tab>
        <v-tab value="negative"><v-icon icon="mdi-thumb-down" color="red" class="mr-2"></v-icon> Négatif ({{ negativeComments.length }})</v-tab>
    </v-tabs>
            </div>
            </div>
        </div>
                </v-col>
                <v-divider vertical class="" ></v-divider>
                <v-col cols="6">
                    <div v-for="comment in selectionComments" :key="comment.id" class="mb-6 mt-2">
<div class="d-flex" >
                        <div>
                            <v-img :src="comment.countryImg" width="40" class="mr-2"></v-img>
                        </div>
                       <div>{{ comment.author }}</div>
                    </div>
                    <v-rating
                    class="my-2"
  readonly
  :length="5"
  :size="26"
  :model-value="comment.rating"
  :active-color="comment.rating<3 ? 'red':'primary'"
 />
 <div class="my-2">Avis laissé le {{ formatDateToDateWithoutTime(comment.date) }}</div>
 <div class="my-2">{{ comment.content }}</div>
 <div class="my-2"><v-icon icon="mdi-thumb-up" class="mr-2"></v-icon>{{ comment.likes }}</div>
 <v-btn class="mr-3">Utile</v-btn>
 <v-btn>Signaler</v-btn>
                    </div>
                    
                </v-col>
            </v-row>
        </v-card>
</template>
<script lang="ts" setup>
import { COMMENTS } from '@/constants/comment.constant'
import type { TComment } from '@/interfaces/comment.interface';
import { formatDateToDateWithoutTime } from '@/services/basic.service'
import { computed, ref } from 'vue'
const currentTab=ref<TComment>('all')
const allcomments=computed(()=>COMMENTS.filter((comment)=>comment.articleId===props.articleId));
const negativeComments=computed(()=>allcomments.value.filter((comment)=>comment.rating<3))
const positiveComments=computed(()=>allcomments.value.filter((comment)=>comment.rating>=3))

const props=defineProps({
    articleId:{
        type:Number,
        required:true
    }
})

const selectionComments=computed(()=>{
    if(currentTab.value==='all'){
        return allcomments.value
    }else if(currentTab.value==='positive'){
        return positiveComments.value
    }else{
        return negativeComments.value
    }
})
</script>