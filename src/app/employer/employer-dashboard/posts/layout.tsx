import ActivePostsSideBar from '@/components/Posts/ActivePostsSideBar';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      <ActivePostsSideBar />
      {children}
    </div>
  );
}
