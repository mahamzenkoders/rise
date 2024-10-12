'use client';

import React from 'react';
import { Label } from './ui/label';
import { useFormikContext } from 'formik';
import { formValues } from '@/types/Interfaces/form.values';

interface Category {
  label: string;
  interest: string[];
}

const categories: Category[] = [
  {
    label: 'Technology and Innovation',
    interest: [
      'Technology and Innovation',
      'Data Science and Analytics',
      'Engineering and Manufacturing',
    ],
  },
  {
    label: 'Business and Entrepreneurship',
    interest: [
      'Entrepreneurship and Business',
      'Finance and Economics',
      'Engineering and Manufacturing',
    ],
  },
  {
    label: 'Social Impact and Advocacy',
    interest: [
      'Social Impact and Community Development',
      'Advocacy and Activism',
      'Youth Empowerment and Leadership',
    ],
  },
  {
    label: 'Health and Wellness',
    interest: [
      'Health and Wellness',
      'Mental Health and Counseling',
      'Sports and Fitness',
    ],
  },
  {
    label: 'Creative and Media Arts',
    interest: [
      'Creative Arts and Design',
      'Media and Communication',
      'Music and Performing Arts',
    ],
  },
  {
    label: 'Science and Environment',
    interest: [
      'Environmental Sustainability',
      'Science and Research',
      'Sustainable Development Goals (SDGs)',
    ],
  },
];

const AreasOfInterest: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<formValues>();

  const handleSelect = (category: string, interest: string) => {
    const isSelected = values.areasOfinterest.some(
      item => item.category === category && item.interest === interest,
    );

    if (isSelected) {
      const updatedInterests = values.areasOfinterest.filter(
        item => !(item.category === category && item.interest === interest),
      );
      setFieldValue('areasOfinterest', updatedInterests);
    } else {
      setFieldValue('areasOfinterest', [
        ...values.areasOfinterest,
        { category, interest },
      ]);
    }
  };

  return (
    <div className='flex items-center flex-col'>
      <h1 className='font-archivo text-xl '>Area Of Interest</h1>
      <div className='flex flex-col gap-2 w-[90%] h-[340px] scrollbar-thin scrollbar-thumb-gray-400 overflow-y-auto'>
        {categories.map(category => (
          <div key={category.label}>
            <h3>{category.label}</h3>
            {category.interest.map(interest => {
              const isChecked = values.areasOfinterest.some(
                item =>
                  item.category === category.label &&
                  item.interest === interest,
              );

              return (
                <div
                  key={interest}
                  className={`flex items-center ${isChecked ? 'text-orange-400' : ''}`}
                >
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={() => handleSelect(category.label, interest)}
                    className={`mr-2 ${isChecked ? 'text-orange-400' : 'text-gray-600'}`}
                  />
                  <Label>{interest}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasOfInterest;
