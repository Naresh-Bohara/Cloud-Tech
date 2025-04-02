import React from 'react'
import Sidebar from '../components/home/Sidebar'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex h-[98vh] gap-4'>
      <div className='w-1/6 border-[3px] border-gray-300 border- rounded-xl p-4 flex flex-col justify-between bg-purple-200'>
      <Sidebar/>
      </div>
      <div className='w-5/6 border-[3px] border-gray-300 border- rounded-xl p-4'>
      <Outlet/>
      </div>
    </div>
  )
}

export default HomePage