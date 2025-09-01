<template>
    <div>
        <v-card class="bg-white">
            <v-row>
                <v-col cols="9">
                    <v-breadcrumbs :items="['Informatique', 'Téléphones', 'Samsung A25']"></v-breadcrumbs>
                    <v-row>
                        <v-col>
                            <v-img :src="Smartphone" height="650px"></v-img>
                            <div class="d-flex my-3">
                                <v-img
                                    :aspect-ratio="1"
                                    class=""
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                                                                <v-img
                                    :aspect-ratio="1"
                                    class=""
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                                                                <v-img
                                    :aspect-ratio="1"
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                                                                <v-img
                                    :aspect-ratio="1"
                                    :src="Smartphone"
                                    width="50"
                                ></v-img>
                            </div>

                        </v-col>
                        <v-col>
                            <div>
                <p>Samsung A25</p>
                <v-rating
  readonly
  :length="5"
  :size="26"
  :model-value="3"
  active-color="primary"
 /> (12 avis)
            </div>
            <div>Marque : Samsung</div>
            <div class="my-4">Fiche technique : 
                <ul>
                    <li>Ecran : 6.5 pouces</li>
                    <li>Processeur : Octa-core</li>
                    <li>Mémoire vive : 4 Go</li>
                    <li>Stockage interne : 128 Go</li>
                    <li>Appareil photo : 50 MP + 5 MP + 2 MP</li>
                    <li>Batterie : 5000 mAh</li>
                </ul>
            </div>
                        </v-col>
                    </v-row>

            
                </v-col>
                <v-col>
                <v-card class="bg-grey pa-3">
                    <div class="my-3">Etat : Neuf</div>
                    <div class="my-3">559€</div>
                    <div class="my-3">Quantité : 3</div>
                    <div class="d-flex flex-column">
                    <v-btn class="my-2" color="yellow">Ajouter au panier</v-btn>
                    <v-btn class="my-2" color="orange">Acheter maintenant</v-btn>
                    <v-btn class="my-2" color="blue">Ajouter à votre liste</v-btn>
                    </div>

                </v-card>
         
                </v-col>
            </v-row>
        </v-card>
            <hr class="my-6"></hr>
            <v-card color="white" height="300" class="pa-4">
 <p>Produits Similaires</p>
 <v-row>
    <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
        <v-col>
        <v-img :src="Smartphone" height="200px"></v-img>
        <div>Samsung A25</div>
        <div>559€</div>
    </v-col>
 </v-row>
            </v-card>
           
            <div class="d-flex">
            

            </div>

        <hr class="my-6"></hr>
        <v-card color="white pa-3">
            <v-row>
                <v-col cols="2">
 <div>
            Commentaires clients
            <div class="d-flex flex-column">
 <div>
                Positif
            </div>
            <div>
                Négatif
            </div>
            </div>
        </div>
                </v-col>
                <v-divider vertical class="" ></v-divider>
                <v-col>
                    <div>
<div class="d-flex">
                        <div>
                            <v-img :src="FrenchFlag" width="40" class="mr-2"></v-img>
                        </div>
                       <div>Jérémy</div>
                    </div>
                    <v-rating
                    class="my-2"
  readonly
  :length="5"
  :size="26"
  :model-value="3"
  active-color="primary"
 />
 <div class="my-2">Avis laissée le 29 aout 2025</div>
 <div class="my-2">Super produit, je suis très satisfait de mon achat !</div>
 <v-btn class="mr-3">Utile</v-btn>
 <v-btn>Signaler</v-btn>
                    </div>
                    <v-divider class="my-4" ></v-divider>
                    <div>
                        <div class="d-flex">
                        <div>
                            <v-img :src="FrenchFlag" width="40" class="mr-2"></v-img>
                        </div>
                       <div>Florent</div>
                    </div>
                    <v-rating
                    class="my-2"
  readonly
  :length="5"
  :size="26"
  :model-value="3"
  active-color="primary"
 />
 <div class="my-2">Avis laissé le 29 aout 2025</div>
 <div class="my-2">Super produit, je suis très satisfait de mon achat !</div>
 <v-btn class="mr-3">Utile</v-btn>
 <v-btn>Signaler</v-btn>
                    </div>
                </v-col>
            </v-row>

        <div class="d-flex">
           
        </div>
        </v-card>
       
    </div>
    
</template>
<script lang="ts" setup>
    import Smartphone from '@/assets/smartphone.jpg';
    import FrenchFlag from '@/assets/FlagFrance.png';
</script>