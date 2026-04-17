import { ACCOUNT } from "@/constants/account.constant";
import type { IAccount } from "@/interfaces/account.interface";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAccountStore=defineStore('account',()=>{
    const account=ref<IAccount>(ACCOUNT)
    const isLoaded = ref(false)
    const successMessage = ref('')
    const token = ref<string | null>(localStorage.getItem("token"))
    const isAuthenticated = computed(() => !!token.value)

    function updateAccount(updateAccount:IAccount){
        account.value={
            ...account.value,
            country:updateAccount.country,
            email:updateAccount.email,
            firstName:updateAccount.firstName,
            lastName:updateAccount.lastName,
            deliveryAdress:updateAccount.deliveryAdress,
            phone:updateAccount.phone,
            id: updateAccount.id,
            password:updateAccount.password
        }
    }

 function setToken(newToken: string) {
  token.value = newToken
  console.log("New token set:", newToken);
  localStorage.setItem("token", newToken)
 }

 function logOut(){
    token.value=null;
    localStorage.removeItem("token");
 }

    return {account,isLoaded,isAuthenticated,successMessage,updateAccount,setToken,logOut}

})