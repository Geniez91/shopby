import type { IActivationInput } from "@/interfaces/activation.interface";
import api from "./axios.service";

const urlRegister = "/activation"
export async function activationUser(activation: IActivationInput) {
try{
const result=await api.post(urlRegister, activation)
console.log("Activation successful:", result.data);
return result.data;
}
catch(error){
    console.error("Error during activation:", error);
    throw error;
}
}