'use client';

import React, { useState } from 'react';
import Forgot from '@/components/Profile/forgotPassword';
import OTP from '@/components/Profile/otp';
import { Form, Formik, FormikValues } from 'formik';
import { Button } from '@/components/ui/button';
import { ForgetPassword } from '@/app/FormValues/ForgetInitialValues';
import {
  ForgetPasswordSchema,
  OTPSchema,
  NewPasswordSchema,
} from '@/schema/forgotSchema';
import ResetPassword from '@/components/Profile/newpassword';
import { useRouter } from 'next/navigation';

const ForgotPasswordView = () => {
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<FormikValues>(ForgetPassword);

  const router = useRouter();

  const handleNextStep = async (formik: any) => {
    const errors = await formik.validateForm();
    const isFormValid = formik.isValid && formik.dirty;
    console.log(errors);

    if (isFormValid) {
      if (step === 3) {
        handleSubmit(formik.values, formik);
      } else {
        console.log(formik.values);
        setStep(prevStep => prevStep + 1);
      }
    }
  };

  const handleSubmit = async (values: FormikValues, formik: any) => {
    console.log('Final Values:', values);
    const errors = await formik.validateForm();
    const isFormValid = formik.isValid && formik.dirty;
    console.log(errors);
    router.push('/auth/passwordchanged');

    if (isFormValid) {
      setFormValues(values);
      if (step < 3) {
        setStep(prevStep => prevStep + 1);
      }
    }
  };

  const getForgotValidationSchema = () => {
    switch (step) {
      case 1:
        return ForgetPasswordSchema;
      case 2:
        return OTPSchema;
      case 3:
        return NewPasswordSchema;
      default:
        return ForgetPasswordSchema;
    }
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={getForgotValidationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          {step === 1 && <Forgot />}
          {step === 2 && <OTP />}
          {step === 3 && <ResetPassword />}
          <div className='flex justify-center'>
            <Button
              className='rounded-full bg-orange-400 w-full text-white mt-3'
              variant={'outline'}
              type='button'
              onClick={() => handleNextStep(formik)}
            >
              {step === 3 ? 'Reset' : 'Next'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordView;
