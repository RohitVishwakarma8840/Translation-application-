import React from 'react'
import MainSection from './MainSection';
import Sidebar from './Sidebar';
// @import "tailwindcss";

const DashboardContainer = () => {
  return (
    <div className="dashboard-container text-2xl bg-blue-100 p-4 w-full h-full flex justify-content align-baseline" >

        <div className='sidebar bg-blue-200 w-[17%] p-0 rounded shadow' >
        <Sidebar />
        </div>

        {/* <h1 className='bg-blue-500 text-white p-2 font-bold mb-4'>Dashboard</h1> */}
<div className='main-section bg-green-300 w-[83%] p-0' >
        <MainSection />
        </div>

      
    </div>
  )
}

export default DashboardContainer;
