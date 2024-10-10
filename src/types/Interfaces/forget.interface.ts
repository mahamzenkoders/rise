export interface ForgotPasswordInterface {
    f_email: string;
    otp: string;
    newpass: {
        password: string;
        confirmPassword: string;
    };
}