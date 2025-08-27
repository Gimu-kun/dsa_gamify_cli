import { useState } from "react";

import { SignIn as SignInAPI } from "../../services/AuthServices";
import type { SignInForm } from "../../../Types/Types";

export const useSignIn = () =>{
    // isLoading: Trạng thái đang gửi request (hiển thị loading)
   const [isLoading, setIsLoading] = useState(false);

    // Trạng thái: lưu thông báo lỗi (nếu đăng nhập thất bại)
    // Dùng `null` để biểu diễn "không có lỗi"
    const [error, setError] = useState<string | null>(null);
    const SignIn = async ( data : SignInForm)=>{
    //reset lỗi cũ trước thi bắt đầu
    setError(null);
    // bật trạng thái load
    setIsLoading(true);
    try{
        // Gọi API đăng nhập thông qua service
        const result = await SignInAPI(data);
        // trường hợp đúng sẽ lấy token đăng nhập vào local
        
        if(result.token){
            localStorage.setItem("authToken",result.token);
        }
        if(result.user){
            localStorage.setItem("user",JSON.stringify(result.user));
        }

        // (dispatch) một sự kiện tên là 'storage' lên cửa sổ trình duyệt.

        //  Mục đích: Thông báo cho các tab khác (cùng origin) rằng dữ liệu localStorage đã thay đổi.
        window.dispatchEvent(new Event("localstorage"));
        return result;
    }
    catch(error : unknown){
        let message = "please sign in again"
        if(error instanceof Error){
            message = error.message;
        }
        // Cập nhật lỗi để hiển thị trên giao diện
        
        setError(message);
        //  Ném lại lỗi để component có thể xử lý thêm (ví dụ: redirect)
        throw new Error(message);
    }
    finally{
         //  Luôn tắt loading dù thành công hay thất bại
     setIsLoading(false);
    }
    }
    const resetError = () =>{
        setError(null);
    }
    return{
        isLoading,
        SignIn,
        error,
        resetError
    }



}