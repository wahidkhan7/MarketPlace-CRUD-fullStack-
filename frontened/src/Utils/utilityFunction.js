import {jwtDecode} from "jwt-decode"
export function getUserFromToken(){
    const token = localStorage.getItem("token")
    if(!token) return null
    
    try{
        let decoded = jwtDecode(token)
        return decoded.id

    }
    catch(error){
        console.log(error);
        return null
        

    }
}

export function formatDate(dateString){
    return dateString.split("T")[0]
}