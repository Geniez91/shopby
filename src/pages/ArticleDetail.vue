<template>
    <div>
        <article-sheet v-if="article" :article="article"></article-sheet>
        <hr class="my-6"></hr>
        <articles-similarities></articles-similarities>
        <hr class="my-6"></hr>
        <article-comments v-if="article" :article="article" />
    </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import {getArticleById, getArticleByIdApi } from '@/services/article.service'
import { useRoute } from 'vue-router';
import { ARTICLES } from "@/constants/article.constant";
import type { IArticle } from '@/interfaces/article.interface';
const route = useRoute();
const articleId = ref<string>((route.params as { id?: string }).id ?? '');
const article = ref<IArticle>();

onMounted(async()=>{
    article.value=await getArticleByIdApi(Number(articleId.value))
})
</script>