'use client';

import React, { useState } from 'react';
import ProfileInfo from '@/components/Profile/personalinfo';
import { Formik, Form, FormikValues } from 'formik';
import {
  PersonalInfoSchema,
  ProfessionalInfoSchema,
  BioSchema,
  AreaOfInterestSchema,
} from '@/schema/FormSchema';
import { InitialValues } from '@/app/FormValues/InitialValues';
import { Button } from '@/components/ui/button';
import AreasOfInterest from '@/components/areaOfInterest';
import { IoMdArrowRoundBack } from 'react-icons/io';
import ProfessionalInfo from '@/components/Profile/ProfessionalInfo';
import Bio from '@/components/Bio';
import { useRouter } from 'next/navigation';

const InfoView = () => {
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<FormikValues>(InitialValues);

  const router = useRouter();

  const handleNextStep = async (formik: any) => {
    const errors = await formik.validateForm();
    const isFormValid = formik.isValid && formik.dirty;
    console.log(errors);

    if (isFormValid) {
      if (step === 4) {
        handleSubmit(formik.values, formik);
        router.push('/dashboard');
      } else {
        console.log(formik.values);
        setStep(prevStep => prevStep + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = async (values: FormikValues, formik: any) => {
    console.log('Final Values:', values);
    const errors = await formik.validateForm();
    const isFormValid = formik.isValid && formik.dirty;
    console.log(errors);

    if (isFormValid) {
      setFormValues(values);
      if (step < 4) {
        setStep(prevStep => prevStep + 1);
      }
    }
  };

  const getValidationSchema = () => {
    switch (step) {
      case 1:
        return PersonalInfoSchema;
      case 2:
        return AreaOfInterestSchema;
      case 3:
        return ProfessionalInfoSchema;
      case 4:
        return BioSchema;
      default:
        return PersonalInfoSchema;
    }
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={getValidationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <div className='flex gap-2 mb-5'>
            <div
              className={`w-[25%] h-1 rounded-full transition-all duration-300 ease-in-out ${step >= 1 ? 'bg-orange-400' : 'bg-gray-200'}`}
            ></div>
            <div
              className={`w-[25%] h-1 rounded-full transition-all duration-300 ease-in-out ${step >= 2 ? 'bg-orange-400' : 'bg-gray-200'}`}
            ></div>
            <div
              className={`w-[25%] h-1 rounded-full transition-all duration-300 ease-in-out ${step >= 3 ? 'bg-orange-400' : 'bg-gray-200'}`}
            ></div>
            <div
              className={`w-[25%] h-1 rounded-full transition-all duration-300 ease-in-out ${step >= 4 ? 'bg-orange-400' : 'bg-gray-200'}`}
            ></div>
          </div>

          {step > 1 && <IoMdArrowRoundBack onClick={handlePreviousStep} />}

          {step === 1 && <ProfileInfo />}
          {step === 2 && <AreasOfInterest />}
          {step === 3 && <ProfessionalInfo />}
          {step === 4 && <Bio />}
          <div className='flex justify-center'>
            <Button
              className='rounded-full bg-orange-400 w-[80%] text-white mt-3'
              variant={'outline'}
              type='button'
              onClick={() => handleNextStep(formik)}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InfoView;
