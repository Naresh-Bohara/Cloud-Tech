import React, { useEffect, useState } from 'react'
import Card from '../components/home/Card'
import { MdOutlineAddCircle } from "react-icons/md";
import InputData from '../components/mini-component/InputData';
import axios from 'axios';
const AllTasksPage = () => {
   const [inputDiv, setInputDiv] = useState("hidden")
   const [data, setData] = useState();
   const [updatedData, setUpdatedData] = useState({
    id: "", 
    title:"",
    description:"",
  })

   const headers ={id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`}

     useEffect(()=>{
          const fetch = async()=>{
             const response = await axios.get("http://localhost:9005/api/v1/tasks", {
                  headers
              })
           
              setData(response.data.tasks)
          }
          fetch();
      }, [])
console.log(data)
  return (
    <>
    <div>
      <div className='w-full flex justify-end px-6 py-2 transition-all duration-300'>
      <button onClick={()=>setInputDiv("fixed")} className='text-3xl text-gray-800 hover:text-gray-950'><MdOutlineAddCircle /></button>
      </div>
      {data && <Card home={true} setInputDiv={setInputDiv} data={data} 
      setUpdatedData={setUpdatedData}/>}
    </div>

    <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} updatedData={updatedData} 
    setUpdatedData={setUpdatedData}/>
    </>
  )
}

export default AllTasksPage