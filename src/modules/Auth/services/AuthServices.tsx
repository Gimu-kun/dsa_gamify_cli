import type{
    SignUpForm,
    SignInForm,
    SignupResponse,
    SignInResponse
} from '../../Types/Types';
import Client from '../../../configs/CNAPI/CNAPI';
import { AxiosError } from 'axios';


export const SignUp = async(
    userData:SignUpForm
):Promise<SignupResponse> =>{
    const url = `${Client.defaults.baseURL}/api/user`
    try {
        const response = await Client.post<SignupResponse>(url,userData);
        return response.data;
    }catch(error : unknown){
        //kiểm tra lỗi axios
        if(error instanceof AxiosError){
            const message = error.response?.data?.message|| "sign up failed";
            throw new Error(message)
        }
        // Nếu là lỗi thông thường
        if(error instanceof Error){
            throw new Error(error.message)
        }
        //lỗi không xác định
        throw new Error("An unknown error occurred during sign up")
    }
}

export const SignIn = async(
    UserData:SignInForm
):Promise<SignInResponse> =>{
    const url = `${Client.defaults.baseURL}/user`;
    try {
        const response = await Client.post<SignInResponse>(url,UserData);
        return response.data;
    }catch(error :unknown){
        if(error instanceof AxiosError){
            const message = error.response?.data?.message||"sign in failed";
            throw new Error(message);
        }
        if(error instanceof Error){
           throw new Error(error.message);
        }
        throw new Error("an unknown error occured during sign in")
    }
}