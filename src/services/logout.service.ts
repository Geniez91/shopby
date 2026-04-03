import type { ILoginInput } from "@/interfaces/login.interface";
import api from "./axios.service";

const urlLogOut = "/logOut"
export async function logoutUser() {
try{
const result=await api.post(urlLogOut)
console.log("Logout successful:", result.data);
return result.data;
}
catch(error){
    console.error("Error during logout:", error);
    throw error;
}
}