import { Field } from 'formik';
import React, { useRef, useState } from 'react';

const OTP = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus(); 
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <h2 className='text-lg font-bold'>Please check your email</h2>
      <p className='text-sm text-gray-600 mb-4'>
        We've sent a code with an activation code to your email, paste this code
        here
      </p>

      <div className='flex space-x-2 mb-4'>
        {code.map((digit, index) => (
          <Field
            name='otp'
            key={index}
            ref={(el: HTMLInputElement | null) => {
              inputRefs.current[index] = el;
            }}
            type='text'
            maxLength={1}
            value={digit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, index)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(e, index)
            }
            className='w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400'
          />
        ))}
      </div>
    </div>
  );
};

export default OTP;
