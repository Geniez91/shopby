export function mapErrorToMessage(error: any): string {
     const errorCode = error.response?.data?.errorCode;
     const detail = error.response?.data?.detail;

     switch (errorCode){
        case "USER_ALREADY_EXISTS":
            return "Vos identifiants existe deja avec cette email";
        default: return detail;
     }
     
}