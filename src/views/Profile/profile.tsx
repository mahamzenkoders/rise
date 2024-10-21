import ProfileNavigation from '@/components/DashBoardProfile/ProfileSideBar';
import React from 'react';

const ProfileView = () => {
  return (
    <div className='lg:hidden block'>
      <ProfileNavigation role={'jobSeeker'} />
    </div>
  );
};

export default ProfileView;
