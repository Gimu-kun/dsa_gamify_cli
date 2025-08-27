import { useState } from "react";
import { SignUp as SignUpAPI } from "../../services/AuthServices";

import type {SignUpForm} from "../../../Types/Types"
export const useSignUp = () =>{
    const [isLoading,setIsLoading] = useState(false);

    const [error,setError] = useState<string | null>(null);
    const SignUp = async(data:SignUpForm) =>{
         setError(null);
         setIsLoading(true);
         try{
            const result = await SignUpAPI(data);
            if(result.user){
                return result.user;
            }
           
         }catch(error: unknown){
            let message = "please sign up again"
            if ( error instanceof Error){
                message = error.message;
                throw new Error(message);
            }
         }
         finally{
            setIsLoading(false);
         }
        
    }
     const resetError = () =>{
            setError(null);
         }
    return{
        isLoading,
        SignUp,
        error,
        resetError,
    }
}