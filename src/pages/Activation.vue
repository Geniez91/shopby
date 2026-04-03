<template>
    <div>
              <h6 class="text-h6"  style="text-decoration: underline;">
            Activation de votre compte
        </h6>

        <p>Un email de confirmation vous a été envoyé. Veuillez noter le code de confirmation pour activer votre compte.</p>

        <v-form v-model="isFormValid" ref="form">
        <div class="d-flex my-5">
        <v-text-field v-for="(digit,index) in codeArray" :rules="numberRule" :key="index" v-model="codeArray[index]" maxlength="1" type="text" class="mx-4" @input="handleInput(index)" @keydown.backspace="handleBackspace(index)" @paste="handlePaste"></v-text-field>
        </div>
        <div class="d-flex flex-column align-center">
                <v-btn :disabled="!isFormValid" @click="handleActivation">Valider</v-btn>
        </div>
        </v-form>
                


    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { numberRule } from '@/services/rulesForm.service';

const router=useRouter();
const codeArray=ref(['','','','','',''])
const isFormValid = ref(false)
const getCode = () => codeArray.value.join('')

function handleInput(index:number){
     if (codeArray.value[index].length > 1) {
    codeArray.value[index] = codeArray.value[index].slice(0, 1)
  }

  if (codeArray.value[index] && index < 7) {
    const next = document.querySelectorAll('.code-input input')[index + 1] as HTMLElement
    next?.focus()
  }
}

const handleBackspace = (index: number) => {
  if (!codeArray.value[index] && index > 0) {
    const prev = document.querySelectorAll('.code-input input')[index - 1] as HTMLElement
    prev?.focus()
  }
}

const handlePaste = (e: ClipboardEvent) => {
  e.preventDefault()
  const pasteData = e.clipboardData?.getData('text').slice(0, 6) || ''

  pasteData.split('').forEach((char, i) => {
    codeArray.value[i] = char
  })
}



import { activationUser } from '@/services/activation.service';
import { useRouter } from 'vue-router';
import type { IActivationInput } from '@/interfaces/activation.interface';

function handleActivation(){
   const code:IActivationInput={
    code: getCode()
   }
   
   activationUser(code)
   router.push('/login')
}


</script>