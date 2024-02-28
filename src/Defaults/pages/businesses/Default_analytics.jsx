import React from 'react'


export const SidebarMenu = [
    {
      id: 1,
      name: "Dashboard",
      link: "/dashboard/admins",
    },
    {
      id: 2,
      name: "Users",
      link: "/manage/users",
    },
    {
      id: 3,
      name: "Businesses",
      link: "/manage/businesses",
    },
    {
      id: 4,
      name: "Products",
      link: "/manage/products",
    },
    {
      id: 5,
      name: "Sales",
      link: "/manage/sales",
    },
    {
      id: 6,
      name: "Payments",
      link: "/manage/payments",
    },
    {
      id: 7,
      name: "Signout",
      link: "/",
    },
  ];
const Default_analytics = () => {
  return (
    <div className="pt-[6.5rem] pb-24 grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col lg:w-[15%] w-full fixed z-10">
      <ul className="lg:bg-gray-900 bg-white pl-5 lg:h-[100vh] flex lg:flex-col flex-row overflow-x-scroll">
        
          {SidebarMenu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 py-4 hover:text-primary lg:text-sm md:text-2xl font-semibold duration-200 lg:text-white text-gray-900"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Default_analytics