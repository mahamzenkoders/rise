import Image from 'next/image';
import Logo from '../../../public/assets/images/Black Logo.png';
import { FiMessageCircle } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='flex p-4 items-center justify-between'>
        <div>
          <Image
            src={Logo}
            alt='404 logo'
          ></Image>
        </div>
        <div className='items-center gap-1 sm:flex hidden'>
          <div className='flex gap-2 items-center'>
            <CiSearch className='text-orange-400 text-xl' />
            <h1 className=''>Opportunities</h1>
          </div>
          <div className='flex gap-2 items-center'>
            <FiMessageCircle className='text-orange-400 text-xl' />
            <h1 className=''>Messages</h1>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <FaRegBell className='text-xl text-orange-400' />
          <Avatar>
            <AvatarImage
              src='https://github.com/shadcn.png'
              alt='@shadcn'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {children}
    </div>
  );
}
