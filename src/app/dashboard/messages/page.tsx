import AllMessages from '@/components/allmessages';
import Message from '@/components/message';
import RightSide from '@/components/Profile';
import React from 'react';

const MessagesPage = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <AllMessages />
      <Message />
      <RightSide />
    </div>
  );
};

export default MessagesPage;
