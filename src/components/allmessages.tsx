'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface User {
  name: string;
  profilePicture: string;
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
}) => {
  const [isActive, setisActive] = useState<boolean>(false);

  const handleActive = () => {
    setisActive(!isActive);
  };
  return (
    <div
      onClick={handleActive}
      className={`flex items-center p-3 bg-white mb-3 ${isActive ? 'bg-orange-300 text-white font-normal' : 'hover:bg-gray-100'} rounded-lg cursor-pointer`}
    >
      <Avatar className='mx-3'>
        <AvatarImage
          src={user.profilePicture}
          alt={user.name}
        />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
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
  const [messages, setMessages] = useState<MessageViewProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();

      const fetchedMessages = data.results.map((user: any) => ({
        user: {
          name: `${user.name.first} ${user.name.last}`,
          profilePicture: user.picture.large,
        },
        message: 'You: Hello, how can I help you?',
        time: 'NOW',
      }));
      // if (fetchedMessages.length > 0) {
      //   fetchedMessages[0].isActive = true;
      // }

      setMessages(fetchedMessages);
    };

    fetchData();
  }, []);

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
