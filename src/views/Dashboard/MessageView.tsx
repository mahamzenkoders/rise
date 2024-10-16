import AllMessages from '@/components/allmessages';
import Message from '@/components/message';
import React from 'react';

const MessageView = () => {
  return (
    <div className='flex h-screen bg-gray-100 scrollbar-thin overflow-y-auto'>
      <AllMessages />
      <Message />
    </div>
  );
};

export default MessageView;
