'use client';

import React, { useEffect, useState } from 'react';
import { SkeletonAllMessage } from '../skeleton/skeleton.message';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MessagePreview from './messagepreview';

const AllMessages: React.FC = () => {
  const {
    data: messages,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const res = await axios.get('https://randomuser.me/api/?results=30');
      return res.data.results;
    },
  });

  if (isError) {
   console.log('Error Occured', error.message);
  }
  const fetchedMessages = messages?.map((user: any) => ({
    user: {
      name: `${user.name.first} ${user.name.last}`,
      picture: user.picture.large,
    },
    message: 'You: Hello, how can I help you?',
    time: 'NOW',
  }));
  if (isLoading) {
    return (
      <div className='md:block hidden'>
        <SkeletonAllMessage />
        <SkeletonAllMessage />
        <SkeletonAllMessage />
        <SkeletonAllMessage />
        <SkeletonAllMessage />
        <SkeletonAllMessage />
      </div>
    );
  }
  return (
    <div className='w-1/4 bg-gray-100 m-3 border-r h-screen sm:block hidden overflow-y-auto scrollbar-thin'>
      {fetchedMessages?.map((msg: any, index: number) => (
        <MessagePreview
          key={index}
          {...msg}
        />
      ))}
    </div>
  );
};

export default AllMessages;
