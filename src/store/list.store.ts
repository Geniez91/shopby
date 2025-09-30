import { LIST_ARTICLES } from "@/constants/list.constant";
import type { IListArticle } from "@/interfaces/list.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore=defineStore('list',()=>{
    const list=ref<IListArticle[]>(LIST_ARTICLES)
    const isLoaded=ref(false)
    const successMessage=ref('')
    

    function addListItem(item:IListArticle){
        list.value.push(item)
        successMessage.value='Item added to list'
    }

    return {
        list,
        isLoaded,
        successMessage,
        addListItem
    }
})