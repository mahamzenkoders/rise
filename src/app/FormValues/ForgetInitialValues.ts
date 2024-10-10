import {ForgotPasswordInterface } from "@/types/Interfaces/forget.interface";

export const ForgetPassword: ForgotPasswordInterface = {
    f_email: "",
    otp: "",
    newpass: {
        password: "",
        confirmPassword: ""
    }
};