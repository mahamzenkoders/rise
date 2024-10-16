import Header from '@/components/header';
import ProfileNavigation from '@/components/ProfileSideBar';

export default function ProfieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='lg:block hidden'>
        <Header />
        <div className='flex min-h-screen'>
          <ProfileNavigation />
          <div className='flex-grow'>{children}</div>
        </div>
      </div>
      <div className='lg:hidden block'>{children}</div>
    </div>
  );
}
