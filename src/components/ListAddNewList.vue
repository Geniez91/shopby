<template>
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
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useListStore } from '@/store/list.store';
const listStore=useListStore();
const listName=ref('')
const listDescription=ref('')
const listImage=ref<File | null>(null)

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