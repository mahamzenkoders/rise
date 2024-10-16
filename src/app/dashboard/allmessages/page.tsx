'use client';

import React, { useEffect, useState } from 'react';
import { MessageViewProps } from '@/types/Interfaces/messagepreview';
import MessagePreview from '@/components/messagepreview';

const AllMessages: React.FC = () => {
  const [messages, setMessages] = useState<MessageViewProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=30');
      const data = await response.json();

      const fetchedMessages = data.results.map((user: any) => ({
        user: {
          name: `${user.name.first} ${user.name.last}`,
          profilePicture: user.picture.large,
        },
        message: 'You: Hello, how can I help you?',
        time: 'NOW',
      }));

      setMessages(fetchedMessages);
    };

    fetchData();
  }, []);

  return (
    <div className='w-full bg-gray-100 p-3 border-r h-screen lg:hidden block overflow-y-auto scrollbar-thin'>
      <h1 className='text-3xl py-4 px-3 font-semibold'>Messages</h1>
      {messages.map((msg, index) => (
        <MessagePreview
          key={index}
          {...msg}
        />
      ))}
    </div>
  );
};

export default AllMessages;
