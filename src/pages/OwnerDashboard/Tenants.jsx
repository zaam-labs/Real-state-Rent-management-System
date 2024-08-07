import Sidebar from '../../components/OwnerDashboardContents/Sidebar'
import Navs from '../../components/OwnerDashboardContents/Navs'
import TenantContent from '../../components/OwnerDashboardContents/TenantContent'
import { useEffect } from 'react'

function Tenants() {
  useEffect(() => {
    document.title = "Dashboard > Tenants | TenantCare"
  }, [])

  return (
    <div className='flex bg-[#f6f6f6]'>
        <Sidebar/>
        <Navs/>
        <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
            <div className='flex flex-col'>
                <h3 className='font-bold text-xl text-[#00befe]'>Tenants</h3>
                <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
            </div>
            {/* content */}
            <TenantContent/>
        </div>
    </div>
  )
}

export default Tenants