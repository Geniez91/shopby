import api from "./axios.service";

const urlRegister = "/reset-password"
export async function forgetPassword(email: String) {
try{
const result=await api.post(urlRegister, { email })
console.log("Password reset email sent:", result.data);
return result.data;
}
catch(error){
    console.error("Error during password reset:", error);
    throw error;
}
}