import React from 'react'
import { MdChecklist } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data = [
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
    ]
  return (
    <>
        <div className=''>
            <p className='font-bold text-gray-800'>Welcome! To TaskManager</p>
            <h2 className='font-semibold font-serif text-gray-500'>Naresh Bohara</h2>
            <h4 className='mb-1 text-gray-400'>naresh@gmail.com</h4>
            <hr className="border-[1px] border-gray-500" />

        </div>

        <div>
            {
                data.map((items, inx)=>(
                    <>
                    <Link to={items.link} key={inx} className='my-2 flex gap-2 items-center hover:bg-gray-300 p-2 rounded transition-all duration-200 '>
                        <span className='text-xl'>{items.icon}</span>
                        <span className='font-semibold'> {items.title} </span>
                    </Link>
                    </>
                ))
            }
        </div>

        <div>
            <button className='bg-gray-200 w-full p-2 rounded'>
                Log Out
            </button>
        </div>
        </>
  )
}

export default Sidebar