import * as yup from "yup"


export const ForgetPasswordSchema=yup.object().shape({
    f_email:yup.string().email("Please Enter a valid email").required("Email is required")
})

export const OTPSchema=yup.object().shape({
    otp:yup.string().required("OTP is required")
})


export const NewPasswordSchema=yup.object().shape({
    newpass:yup.object().required("New Password is required")
})