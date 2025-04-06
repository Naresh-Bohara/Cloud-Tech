import React, { useEffect, useState } from 'react'
import { MdChecklist, MdOutlineTrendingUp } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlinePieChart } from "react-icons/ai";


import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';
import axios from 'axios';

const Sidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const tasks = [
        {
            title: "All tasks",
            icon: <MdChecklist />,
            link: "/"
        },
        {
            title: "Important Tasks",
            icon: <FaExclamationCircle />,
            link: "important-tasks"
        },
        {
            title: "Completed Tasks",
            icon: <FaCheckCircle />,
            link: "completed-tasks"
        },
        {
            title: "Pending Tasks",
            icon: <IoMdCloseCircleOutline />,
            link: "pending-tasks"
        },

        {
            title: "Tasks Progress",
            icon: <AiOutlinePieChart />,
            link: "tasks-progress"
        },
    ]

    const [data, setData] = useState();

    const logout=()=>{
        dispatch(authActions.logout())
        localStorage.clear("id")
        localStorage.clear("token")
        navigate("/");
    }

    const headers ={id: localStorage.getItem("id"),
         authorization: `Bearer ${localStorage.getItem("token")}`}

    useEffect(()=>{
        const fetch = async()=>{
           const response = await axios.get("http://localhost:9005/api/v1/tasks", {
                headers
            })
         
            setData(response.data)
        }
        fetch();
    }, [])

  return (
    <>
       {
        data &&  <div className=''>
        <p className='font-bold text-gray-800'>Welcome! To TaskManager</p>
        <h2 className='font-semibold font-serif text-gray-500'>{data.username}</h2>
        <h4 className='mb-1 text-gray-400'>{data.email}</h4>
        <hr className="border-[1px] border-gray-500" />
    </div>
       }

        <div>
            {
                tasks.map((items, inx) => (
                    <Link 
                        to={items.link} 
                        key={inx} 
                        className='my-2 flex gap-2 items-center hover:bg-gray-300 p-2 rounded transition-all duration-200 '
                    >
                        <span className='text-xl font-bold'>{items.icon}</span>
                        <span className='font-semibold'> {items.title} </span>
                    </Link>
                ))
            }
        </div>

        <div>
            <button className='bg-gray-200 w-full p-2 rounded' onClick={logout}>
                Log Out
            </button>
        </div>
    </>
  )
}

export default Sidebar;
