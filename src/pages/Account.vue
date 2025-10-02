<template>
    <div class="ma-3">
        <h6 class="text-h6" style="text-decoration: underline;">Mon Compte</h6>
        <v-row class="mt-2">
            <v-col>
                <account-personal-information></account-personal-information>
            </v-col>
              <v-col>
                <account-adress></account-adress>
            </v-col>
        </v-row>
        <v-divider color="white" class="my-8"></v-divider>
        <v-row>
            <v-col>
                <account-link-to-order></account-link-to-order>
            </v-col>
              <v-col>
                <account-link-to-list></account-link-to-list>
            </v-col>
        </v-row>
                <v-divider color="white" class="my-6"></v-divider>
        <account-last-articles-check></account-last-articles-check>
    </div>
</template>