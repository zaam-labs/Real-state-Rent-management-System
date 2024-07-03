import React, { useEffect } from 'react'
import Sidebar from '../../components/RenterDashboardContent/Sidebar'
import Nav from '../../components/RenterDashboardContent/Nav'
import ProfileContent from '../../components/RenterDashboardContent/ProfileContent'

function Profile() {
  useEffect(() => {
    document.title = "Dashboard > Profile | TenantCare"
  }, [])

  return (
    <div className='flex bg-[#f6f6f6]'>
    <Sidebar/>
    <Nav/>
    <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl text-[#00befe]'>Profile</h3>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
        <ProfileContent/>
    </div>
</div>
  )
}

export default Profile