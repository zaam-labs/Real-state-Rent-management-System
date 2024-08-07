import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ViewpropertyContent from '../../components/RenterDashboardContent/ViewpropertyContent'
import Sidebar from '../../components/RenterDashboardContent/Sidebar'
import Navs from '../../components/RenterDashboardContent/Nav'

function ViewProperty() {
  useEffect(() => {
    document.title = "Dashboard > View Property | TenantCare"
  }, [])

  return (
    <div className='flex bg-[#f6f6f6]'>
    <Sidebar/>
    <Navs/>
    <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
        <div className='flex flex-col'>
            <Link to="/Renter/Properties" className='font-bold text-xl text-[#00befe]'> › Back to Properties</Link>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
        <ViewpropertyContent/>
    </div>
  </div>
  )
}

export default ViewProperty