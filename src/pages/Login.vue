<template>
    <div>
        <h6 class="text-h6"  style="text-decoration: underline;">
            Connexion
        </h6>

         <v-form v-model="isFormValid" ref="form" >
        <v-card class="my-3" outlined>
            <v-card-text>
                            <div>
                 <div class="my-2">
                      <p>Email :</p>
                      <v-text-field v-model="email" required name="email" :rules="emailRule" type="email"></v-text-field>
                 </div>
                 <div class="my-2">
                      <p>Mot de passe :</p>
                      <v-text-field v-model="password" required name="password" type="password" :rules="requiredRule"></v-text-field>
                      </div>
                    <a class="my-1" href="/forgot-password">Mot de passe oublié ?</a>
                </div>
            </v-card-text>
        </v-card>
        </v-form>
                    <div class="d-flex flex-column">
            <v-btn class="my-1" :color="isFormValid ? 'primary' : ''" :disabled="!isFormValid" @click="handleLoginUser">Connexion</v-btn>
            <a class="my-1" href="/register">Vous n'avez pas de compte ? Inscrivez-vous</a>
            </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { loginUser } from '@/services/login.service';
import type { ILoginInput } from '@/interfaces/login.interface';
import { useRouter } from 'vue-router';
import {useAccountStore} from '@/store/account.store'
import { emailRule, requiredRule } from '@/services/rulesForm.service';

const {setToken}=useAccountStore();
const router=useRouter();
const email = ref('')
const password = ref('')
const isFormValid = ref(false)

async function handleLoginUser(){
    const loginInput:ILoginInput={
        email: email.value,
        password: password.value
    }
    const token= await loginUser(loginInput);
    setToken(token);
    alert('Connexion réussie !')
    router.push('/Home')
}
</script>



