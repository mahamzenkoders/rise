import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageViewProps } from '@/types/Interfaces/messagepreview';

const MessagePreview: React.FC<MessageViewProps> = ({
  user,
  message,
  time,
}) => {
  const [isActive, setisActive] = useState<boolean>(false);
  const router = useRouter();

  const handleActive = () => {
    router.push('/dashboard/messages');
  };
  return (
    <div
      onClick={handleActive}
      className={`flex items-center p-3 justify-center bg-white mb-3 ${isActive ? 'bg-orange-300 text-white font-normal' : 'hover:bg-gray-100'} rounded-lg cursor-pointer`}
    >
      <Avatar className='mx-3'>
        <AvatarImage
          src={user.profilePicture}
          alt={user.name}
        />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className={`flex-1 ${isActive ? `text-white` : `text-black`}`}>
        <h4 className='font-bold text-md'>{user.name}</h4>
        <p className='text-sm truncate'>{message}</p>
      </div>
      <span className='text-sm'>{time}</span>
    </div>
  );
};

export default MessagePreview;
