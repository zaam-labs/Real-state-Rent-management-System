import { FaUserCircle } from "react-icons/fa";
import notFound from '../../assets/images/NotFound.png'
import { useGetItemQuery, useGetTenantsQuery } from "../../store/api/ItemsSlice";

function TenantContent() {
  const { data: items = [] } = useGetItemQuery()

  const { data: tenants = [], isLoading } = useGetTenantsQuery()

  console.log("Approved requests: ", tenants)

  let TenantsItem = []

  TenantsItem = items.filter(item => {
    return tenants.find((tenant) => {
      return tenant.property_id === item.id
    })
  })

  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex">
        <h3 className="font-bold text-2xl">Tenants</h3>
      </div>
      {/* content */}
      <div className="mt-4 flex justify-center flex-wrap gap-5 p-4 pb-5">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
              <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span>
              loading...
            </div>
          </div>
        ) : (
          <>
            {tenants.length === 0 ? (
              <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
                <img src={notFound} alt="" className="w-[20rem] h-60 md:w-[28rem] md:h-80" />
                <h1 className="font-medium text-xl text-gray-400">Tenants is Empty</h1>
              </div>
            ) : (
              <>
                {tenants.map((tenant) => {
                  const myTenant = TenantsItem.filter((MyTenant) => MyTenant.id === tenant.property_id)

                  return (
                    <>
                      {myTenant.map((MyTenant) => (
                        <div key={tenant.id} className="flex flex-col md:gap-4  overflow-hidden md:w-[300px] h-auto w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
                          <img
                            src={MyTenant.image}
                            alt=""
                            className="w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center"
                          />
                          <div className="flex flex-col gap-4 md:gap-4 w-full">
                            <div className="flex flex-col gap-2">
                              <h3 className="font-bold text-2xl">
                                {tenant.property_title}
                              </h3>
                              <span className="text-sm text-[#acacac]">{tenant.property_address.slice(0, 20) + [tenant.property_address.length >= 20 ? '...' : '']}</span>
                            </div>
                            <div className="flex flex-col gap-2 pb-2">
                              <span className="text-sm text-[#acacac]">Tenant info</span>
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <FaUserCircle className="text-2xl text-[#00befe]" />
                                  <h3 className="text-1xl text-gray-600">{tenant.tenant_first_name} {tenant.tenant_last_name}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default TenantContent;
