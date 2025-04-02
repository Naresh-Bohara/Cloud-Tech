import React, { useState } from 'react'
import Card from '../components/home/Card'
import { MdOutlineAddCircle } from "react-icons/md";
import InputData from '../components/mini-component/InputData';
const AllTasksPage = () => {
  const [inputDiv, setInputDiv] = useState("hidden")
  return (
    <>
    <div>
      <div className='w-full flex justify-end px-6 py-2 transition-all duration-300'>
      <button onClick={()=>setInputDiv("fixed")} className='text-3xl text-gray-800 hover:text-gray-950'><MdOutlineAddCircle /></button>
      </div>
      <Card home={true} setInputDiv={setInputDiv}/>
    </div>

    <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>
    </>
  )
}

export default AllTasksPage