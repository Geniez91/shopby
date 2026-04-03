import type { ILoginInput } from "@/interfaces/login.interface";
import api from "./axios.service";

const urlLogin = "/login"
export async function loginUser(login:ILoginInput) {
try{
const result=await api.post(urlLogin,login)
console.log("Login successful:", result.data);
return result.data;
}
catch(error){
    console.error("Error during login:", error);
    throw error;
}
}