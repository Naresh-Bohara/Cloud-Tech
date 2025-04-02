import React from 'react'
import Card from '../components/home/Card'
import { MdOutlineAddCircle } from "react-icons/md";
import InputData from '../components/mini-component/InputData';
const AllTasksPage = () => {
  return (
    <>
    <div>
      <div className='w-full flex justify-end px-6 py-2 transition-all duration-300'>
      <button className='text-3xl text-gray-800 hover:text-gray-950'><MdOutlineAddCircle /></button>
      </div>
      <Card home={true}/>
    </div>

    <InputData/>
    </>
  )
}

export default AllTasksPage