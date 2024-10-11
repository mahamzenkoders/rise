import * as Yup from 'yup'


export const SignUpSchema = Yup.object({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is Required'),
  });