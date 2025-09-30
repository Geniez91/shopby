import type { IListArticle } from "@/interfaces/list.interface";
import { CATEGORY_ARTICLES } from "./article.constant";
import SamgsungA24 from '@/assets/smartphone.jpg';

export const LIST_ARTICLES:IListArticle[]=[
    {
        id: 1,
        name: "Liste de Noël",
        description: "Il s’agit d’une liste d’envie pour mes cadeaux de Noël.",
        articles: [{
            id: 1,
            averageRating: 3,
            name: "Samsung A15",
            category: CATEGORY_ARTICLES[0],
            price: 510,
            date: new Date('2022-05-01T10:20:30Z'),
            tags: ["smartphone", "samsung"],
            img: SamgsungA24,
            quantity: 0,
            nbSales: 50
        },
        {
            id: 2,
            averageRating: 2,
            name: "Samsung A14",
            category: CATEGORY_ARTICLES[0],
            price: 420,
            date: new Date('2025-09-01'),
            tags: ["smartphone", "samsung"],
            img: SamgsungA24,
            quantity: 0,
            nbSales: 5
        }],
        img: SamgsungA24
    },{
        id: 2,
        name: "List d'anniversaire",
        description: "Il s’agit d’une liste d’envie pour mes cadeaux d'anniversaire.",
        articles: [],
        img: SamgsungA24
    },
    {
        id: 3,
        name: "List de Pâques",
        description: "Il s’agit d’une liste d’envie pour mes cadeaux de Pâques.",
        articles: [],
        img: SamgsungA24
    }

]
