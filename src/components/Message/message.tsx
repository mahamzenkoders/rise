'use client';

import React, { useState } from 'react';
import ProfileImage from '../../../public/assets/images/usericon.png';
import Image from 'next/image';
import { IoSend } from 'react-icons/io5';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { MessageBubbleProps } from '@/types/Interfaces/messagebubble';
import { useRouter } from 'next/navigation';
import MessageBubble from './messagebubble';
import { Input } from '../ui/input';

const Message: React.FC = () => {
  const [messages, setMessages] = useState<MessageBubbleProps[]>([
    { text: 'Hello Gerardo how are you?', time: '04:12 PM', isSender: false },
    {
      text: 'Sure, I’d be happy to tell you more about my work!',
      time: '12:36 PM',
      isSender: true,
    },
    {
      text: 'Maybe we can make a call on Monday?',
      time: '12:38 PM',
      isSender: false,
    },
    { text: 'Diploma_new_for_clients.pdf', time: '12:34 PM', isSender: true },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const router = useRouter();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      const newMessageBubble = {
        text: newMessage,
        time: time,
        isSender: true,
      };
      setMessages(prevMessages => [...prevMessages, newMessageBubble]);
      setNewMessage('');
    }
  };

  const handleClick = () => {
    router.push('/dashboard/allmessages');
  };

  return (
    <div className='flex-1 bg-gray-50 px-6 h-screen'>
      <div className='p-3 mb-8 flex items-center gap-2 text-black text-2xl bg-gray-100 rounded font-semibold'>
        <IoMdArrowRoundBack
          onClick={handleClick}
          className='md:hidden block'
        />
        <Image
          src={ProfileImage}
          alt='Applicant'
          height={40}
          width={40}
          className='rounded-full mb-4'
        />
        <h1>Gerardo Menard</h1>
      </div>
      <div className='overflow-y-auto h-[70%]'>
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            {...msg}
          />
        ))}
      </div>
      <div className='mt-2 flex items-center border-t pt-4'>
        <Input
          type='text'
          placeholder='Type a message...'
          className='flex-1 border p-2 rounded-full mr-3'
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button
          className='bg-orange-500 text-white p-2 rounded-full'
          onClick={handleSendMessage}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default Message;
