import { ACCOUNT } from "@/constants/account.constant";
import type { IAccount } from "@/interfaces/account.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccountStore=defineStore('account',()=>{
    const account=ref<IAccount>(ACCOUNT)
    const isLoaded = ref(false)
    const successMessage = ref('')

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

    return {account,isLoaded,successMessage,updateAccount}

})