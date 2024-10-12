import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface User {
  name: string;
}

interface MessageViewProps {
  user: User;
  message: string;
  time: string;
  isActive: boolean;
}

const MessagePreview: React.FC<MessageViewProps> = ({
  user,
  message,
  time,
  isActive,
}) => {
  return (
    <div
      className={`flex items-center p-3 bg-white mb-3 ${isActive ? 'bg-orange-300 text-white font-normal' : 'hover:bg-gray-100'} rounded-lg cursor-pointer`}
    >
      <Avatar className='mx-3'>
        <AvatarImage
          src='https://github.com/shadcn.png'
          alt='@shadcn'
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className={`flex-1 ${isActive ? `text-white` : `text-black`}`}>
        <h4 className='font-bold text-sm'>{user.name}</h4>
        <p className='text-xs truncate'>{message}</p>
      </div>
      <span className='text-xs'>{time}</span>
    </div>
  );
};

const AllMessages: React.FC = () => {
  const messages = [
    {
      user: { name: 'Dmitriy Dolorenko' },
      message: 'You: Hello what time zone do you...',
      time: 'NOW 27',
      isActive: true,
    },
    {
      user: { name: 'Robert Fox' },
      message: 'You: Sure, I’d be happy to tell you',
      time: 'NOW 21',
      isActive: false,
    },
    {
      user: { name: 'Maham' },
      message: 'You: I am ok ',
      time: 'Oct 21',
      isActive: false,
    },
  ];

  return (
    <div className='w-1/5 bg-gray-100 m-3 border-r h-screen sm:block hidden'>
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
