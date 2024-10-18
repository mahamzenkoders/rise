import Header from '@/components/header';
import RightSide from '@/components/Profile';

export default function EmployerDashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='lg:block hidden'>
        <Header role='employer' />
        <div className='flex min-h-screen'>
          <div className='flex-grow'>{children}</div>
          <RightSide role='employer' />
        </div>
      </div>
      <div className='lg:hidden block'>{children}</div>
    </div>
  );
}
