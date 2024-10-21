import Header from '@/components/Dashboard/header';
import ProfileNavigation from '@/components/DashBoardProfile/ProfileSideBar';

export default function EmployerProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='lg:block hidden'>
        <Header role='employer' />
        <div className='flex min-h-screen'>
          <ProfileNavigation role='employer' />
          <div className='flex-grow'>{children}</div>
        </div>
      </div>
      <div className='lg:hidden block'>{children}</div>
    </div>
  );
}
