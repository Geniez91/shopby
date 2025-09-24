<template>
    <div>
        <p>Vos listes d'envies</p>
        <v-row class="my-3">
            <v-col cols="3" v-for="(value, index) in listStore.list" :key="value.id">
                <v-card class="pa-3" :hover="true" :color="currentlist.id===value.id?'blue':'white'" @click="currentlist=value">
                    <v-img :src="value.img" height="80px"></v-img>
                    <h6 class="text-h6 text-center my-2" style="text-decoration: underline;">{{ value.name }}</h6>
                </v-card>
            </v-col>
            <v-col>
          <v-card class="pa-3 fill-height" hover color="success">
            <v-dialog>
              <template v-slot:activator="{ props: activatorProps }">
              <div class="d-flex flex-column align-center justify-center fill-height" v-bind="activatorProps">
                  <v-icon size="48">mdi-plus</v-icon>
                  <p>Créer une nouvelle liste</p>
              </div>
              </template>
               <template v-slot:default="{ isActive }">
    <v-card title="Création d'une nouvelle liste">
      <v-card-text>
        <v-text-field label="Nom de la liste" v-model="listName"></v-text-field>
        <v-text-field label="Description de la liste" v-model="listDescription"></v-text-field>
        <v-file-input
          accept="image/*"
          label="File input"
          v-model="listImage"
        ></v-file-input>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
                  <v-btn
            color="primary"
            text="Valider"
            @click="addListHandler(); isActive.value = false"
          ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
                </v-dialog>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="my-3">
           <p>{{ currentlist.name }}</p>
           <p class="my-4">{{ currentlist.description }}</p>
           <p class="my-4">Liste de {{ currentlist.articles.length }} objets crée le 5 janvier 2024 et modifié le 23 octobre 2025</p>
           <v-autocomplete
  :items="autocompleteItems"
  item-title="label"
  item-value="label"
  v-model="valueSearch"
  hide-details
  dense
  prepend-inner-icon="mdi-magnify"
  class="bg-white"
  clearable
  @update:model-value="onChangeSearchValue"
>
<template #item="{ props,item }">

   <v-list-item
                  v-bind="props"
                  :subtitle="`${item.raw.price}€`"
                  :title="item.raw.label"
                  :prepend-avatar="item.raw.img"
                ></v-list-item>
</template>
</v-autocomplete>
        </div>
        <v-divider></v-divider>
       <v-row class="my-3">
        <v-col v-for="(value,index) in currentlist.articles" :key="index" cols="2">
          <v-card color="white" class="pa-3">
              <v-img :src="value.img" height="200px"></v-img>
            <p class="text-center my-3">{{ value.name }}</p>
          </v-card>
        </v-col>
       </v-row>
    </div>
</template>
<script lang="ts" setup>
import { ARTICLES } from '@/constants/article.constant';
import type { IListArticle } from '@/interfaces/list.interface';
import { computed, ref } from 'vue';
import { useListStore } from '@/store/list.store';

const listName=ref('')
const listDescription=ref('')
const listImage=ref<File | null>(null)
const listStore=useListStore();

const currentlist=ref<IListArticle>(listStore.list[0])
const valueSearch=ref('')
const autocompleteItems = computed(() => [
  ...ARTICLES.map(article => ({
    ...article,
    type: 'Article',
    label: article.name,
  }))
])


function onChangeSearchValue(selectedValue:string){
  const value=autocompleteItems.value.find(item=>item.label===selectedValue)
  currentlist.value.articles.push(ARTICLES.find(article=>article.id===value?.id)!)
}

function fileToDataUrl(file:File):Promise<string>{
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(reader.result as string)
    reader.onerror=reject
    reader.readAsDataURL(file)
  })
}

async function addListHandler(){
  let imgString = ''
  const items=listStore.list;
  const nextId=items.length ? Math.max(...items.map(i=>i.id))+1:1

  if(listImage.value){
    imgString=await fileToDataUrl(listImage.value)
  }

listStore.addListItem({
  id:nextId,
  name:listName.value,
  description:listDescription.value,
  articles:[],
  img:imgString
})

  listName.value = ''
  listDescription.value = ''
  listImage.value = null
  
}

</script>