import JobApplied from '@/components/JobApplied'
import SideNav from '@/components/SideNav'
import React from 'react'

const JobAppliedView = () => {
  return (
    <div className='flex'>
      <div className='lg:block hidden'>
        <SideNav />
      </div>
      <JobApplied />
    </div>
  )
}

export default JobAppliedView