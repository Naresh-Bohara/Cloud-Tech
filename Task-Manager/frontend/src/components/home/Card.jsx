import React from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";

const Card = ({ home, setInputDiv }) => {
  const data = [
    {
      title: "Complete Documentation",
      desc: "Finish writing the technical documentation for the project. Include code explanations and setup instructions.",
      status: "pending",
    },
    {
      title: "Team Meeting",
      desc: "Attend the weekly team meeting to discuss project updates and roadblocks. Prepare any blockers or questions.",
      status: "pending",
    },
    {
      title: "Design User Interface",
      desc: "Create wireframes and mockups for the new user interface of the app. Ensure it's mobile-responsive and user-friendly.",
      status: "pending",
    },
    {
      title: "Fix Bugs in App",
      desc: "Identify and fix bugs in the app. Prioritize bugs based on severity and impact on the user experience.",
      status: "pending",
    },
    {
      title: "Write Unit Tests",
      desc: "Write unit tests to ensure the app is functioning correctly. Focus on testing core components and functionality.",
      status: "pending",
    },
    {
      title: "Review Code Pull Requests",
      desc: "Review and approve or suggest changes for the open pull requests. Ensure code quality and best practices are followed.",
      status: "completed",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((items, inx) => (
        <div
          key={inx}
          className="border border-gray-400 rounded-xl p-4 bg-[#cdccdf] flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-xl font-semibold">{items.title}</h3>
            <p className="text-gray-700 my-2">{items.desc}</p>
          </div>

          <div className="mt-4 w-full flex justify-between items-center">
            <button
              className={`${
                items.status === "completed" ? "bg-green-500" : "bg-red-500"
              } text-white px-6 py-3 rounded-lg font-semibold text-lg`}
            >
              {items.status}
            </button>

            <div className="flex gap-2 justify-around">
              <button className="text-yellow-100 text-xl p-1 hover:text-yellow-600">
                <FaStar />
              </button>
              <button className="text-blue-500 text-xl p-1 hover:text-blue-600">
                <FaEdit />
              </button>
              <button className="text-red-500 text-xl p-1 hover:text-red-600">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}

      {home == true && (
        <button className="border border-gray-400 rounded-xl p-4 bg-[#cdccdf] flex flex-col justify-center gap-3 items-center h-full hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={()=>setInputDiv("fixed")}>
          <h2 className="font-semibold text-xl text-gray-700">Add Tasks</h2>
          <span className="text-3xl text-gray-700">
            <MdOutlineAddCircle />
          </span>
        </button>
      )}
    </div>
  );
};

export default Card;
