import type { IRegisterInput } from "@/interfaces/register.interface";
import api from "./axios.service";

const urlRegister = "/register"
export async function registerUser(register: IRegisterInput) {
try{
const result=await api.post(urlRegister, register)
console.log("Registration successful:", result.data);
return result.data;
}
catch(error){
    console.error("Error during registration:", error);
    throw error;
}
}