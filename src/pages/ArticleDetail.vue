<template>
    <div>
        <article-sheet :article-id="article.id"></article-sheet>
        <hr class="my-6"></hr>
        <articles-similarities></articles-similarities>
        <hr class="my-6"></hr>
        <article-comments :articleId="article.id" />
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import {getArticleById } from '@/services/article.service'
import { useRoute } from 'vue-router';
import { ARTICLES } from "@/constants/article.constant";
const route = useRoute();
const articleId = ref<string>((route.params as { id?: string }).id ?? '');
const article = computed(() => getArticleById(Number(articleId.value), ARTICLES));
</script>