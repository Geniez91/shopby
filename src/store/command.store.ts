import type { ICommand } from "@/interfaces/command.interface"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useCommandStore=defineStore('command',()=>{
    const commands=ref<ICommand[]>([])
    const isLoaded=ref(false)
    const successMessage=ref('')

    function addCommand(command:ICommand){
        commands.value.push(command)
        successMessage.value='Command added'
    }
    
    return {
        commands,
        isLoaded,
        successMessage,
        addCommand
    }
})