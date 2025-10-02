<template>
    <cart-full v-if="articles.length>0"></cart-full>
    <div class="d-flex flex-column align-center" v-else>
        <cart-empty></cart-empty>
    </div>
</template>
<script lang="ts" setup>
import { useArticleStore } from '@/store/article.store';
import { computed } from 'vue';
const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);
</script>

