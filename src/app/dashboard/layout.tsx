import Header from '@/components/header';
import MobileNavigation from '@/components/MobileNavigation';
import RightSide from '@/components/Profile';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='md:block hidden'>
        <Header />
        <div className='flex min-h-screen'>
          <div className='flex-grow'>{children}</div>
          <RightSide />
        </div>
      </div>
      <div className='md:hidden block'>
        {children}
        <MobileNavigation />
      </div>
    </div>
  );
}
