import React, { useEffect, useState } from 'react'
import Card from '../components/home/Card'
import { MdOutlineAddCircle } from "react-icons/md";
import InputData from '../components/mini-component/InputData';
const AllTasksPage = () => {
   const [inputDiv, setInputDiv] = useState("hidden")
   const [data, setData] = useState();

     useEffect(()=>{
          const fetch = async()=>{
             const response = await axios.get("http://localhost:9005/api/v1/tasks", {
                  headers
              })
           
              setData(response.data)
              console.log(response.data)
          }
          fetch();
      })

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