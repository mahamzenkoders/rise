import RiseBg from '../../../public/assets/images/BgImage.png';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-screen'>
      <div className='bg-blue-900 w-1/2 h-full relative sm:block hidden'>
        <Image
          src={RiseBg}
          fill
          style={{ objectFit: 'cover' }}
          alt='404'
        />
      </div>
      <div className='bg-white sm:w-1/2 w-full h-full flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
