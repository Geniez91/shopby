import type { IArticle } from "@/interfaces/article.interface";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useArticleStore = defineStore('article', ()=>{
    const articles=ref<IArticle[]>([])
    const isLoaded = ref(false)
    const successMessage = ref('')

    function addArticleToCart(article:IArticle){
        articles.value.push(article)
        successMessage.value = 'Article added to cart'
    }

    function removeArticleFromCart(article:IArticle){
        articles.value=articles.value.filter(a=>a.id!==article.id)
        successMessage.value = 'Article removed from cart'
    }

    function clearCart(){
        articles.value=[]
        successMessage.value = 'Cart cleared'
    }


    return { articles, isLoaded, successMessage,addArticleToCart,removeArticleFromCart,clearCart}
})