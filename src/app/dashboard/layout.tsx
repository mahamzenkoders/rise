import Header from '@/components/header';
import RightSide from '@/components/Profile';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='lg:block hidden'>
        <Header />
        <div className='flex min-h-screen'>
          <div className='flex-grow'>{children}</div>
          <RightSide />
        </div>
      </div>
      <div className='lg:hidden block'>{children}</div>
    </div>
  );
}
