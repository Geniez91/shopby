import type { IComment } from "@/interfaces/comment.interface";
import FrenchFlag from '@/assets/FlagFrance.png'

export const COMMENTS:IComment[]=[{
    articleId:1,
    author:'Jérémy',
    countryImg:FrenchFlag,
    id:1,
    content:'Super produit, je suis très satisfait de mon achat !',
    date:new Date('2025-08-29'),
    rating:3,
    likes:0,
    report:0
},{
    articleId:1,
    author:'Florent',
    countryImg:FrenchFlag,
    id:2,
    content:'Super produit, je suis très satisfait de mon achat !',
    date:new Date('2025-08-29'),
    rating:3,
    likes:0,
    report:0
},{
       articleId:1,
    author:'Eric',
    countryImg:FrenchFlag,
    id:3,
    content:'Jamais vu un article aussi nul, je le déconseille fortement !',
    date:new Date('2025-08-29'),
    rating:1,
    likes:0,
    report:0
    
}]