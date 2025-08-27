// các trường dữ liệu danh cho đăng kí
export interface SignUpForm {
    fullname: string;
    username: string;
    passwords:string;
}
    

//các kiểu dữ liệu dành cho đăng nhập
export interface SignInForm  {
    username: string;
    passwords: string;
}

// respone trả về từ BE

//1. đăng kí
export interface SignupResponse {
    message: string;
    user: SignUpForm;
}
//2 . đăng nhập
export interface SignInResponse{
    message:string;
    token?:string;
    user?:{
        fullname:string;
        username:string;
        password:string;
    };
}
