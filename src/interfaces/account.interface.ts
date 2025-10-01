export interface IAccount{
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    deliveryAdress?: string;
    facturationAdress?: string;
    country: string;
    phone:string;
}