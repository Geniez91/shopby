<template>
    <div>
        <h6 class="text-h6"  style="text-decoration: underline;">
            Mot de passe oublié
        </h6>

        <v-form>
            <div class="my-5">
                <p>Entrez votre adresse email pour recevoir un lien de réinitialisation de mot de passe.</p>
                <v-text-field v-model="email" required name="email" :rules="emailRule" type="email"></v-text-field>
            </div>
        </v-form>
        <div class="d-flex flex-column align-center">
                <v-btn :disabled="!email" @click="handleResetPassword()">Envoyer</v-btn>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { emailRule } from '@/services/rulesForm.service';
import { forgetPassword } from '@/services/resetPassword.service';
const email=ref('');

 function handleResetPassword(){
    console.log(`Email de réinitialisation envoyé à : ${email.value}`);
    console.log("test")
    forgetPassword(email.value);
    alert('Si un compte existe avec cet email, un lien de réinitialisation a été envoyé.')
}
</script>
