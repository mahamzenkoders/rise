'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface MessageBubbleProps {
  text: string;
  time: string;
  isSender: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  time,
  isSender,
}) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`${isSender ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'} p-3 rounded-lg max-w-xs`}
      >
        <p>{text}</p>
        <span
          className={`text-xs ${isSender ? 'text-gray-700' : 'text-gray-600'}`}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

const Message: React.FC = () => {
  const [messages, setMessages] = useState<MessageBubbleProps[]>([
    { text: 'Hello Taras how are you?', time: '04:12 PM', isSender: false },
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

  return (
    <div className='flex-1 bg-gray-50 px-6 h-screen'>
      <div className='p-3 mb-8 flex items-center gap-2 text-black text-2xl bg-gray-100 rounded font-semibold'>
        <Avatar>
          <AvatarImage
            src='https://github.com/shadcn.png'
            alt='@shadcn'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        Dmitriy Dolorenko
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
          ↑
        </button>
      </div>
    </div>
  );
};

export default Message;
