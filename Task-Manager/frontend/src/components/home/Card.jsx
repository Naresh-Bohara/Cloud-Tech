import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFlag, FaRegFlag, FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";

const Card = ({ home, setInputDiv, data, setUpdatedData }) => {
  const [csrfToken, setCsrfToken] = useState("");
  const [tasks, setTasks] = useState(data); 

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "CSRF-Token": csrfToken,
  };

  // Sync with props if updated externally
  useEffect(() => {
    setTasks(data);
  }, [data]);

  // Fetch CSRF token on mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("http://localhost:9005/api/v1/csrf-token", {
          withCredentials: true,
        });
        setCsrfToken(response.data.csrfToken);
      } catch (err) {
        console.error("CSRF token fetch failed", err);
      }
    };
    fetchCsrfToken();
  }, []);

  // Fetch tasks again after a task is deleted
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:9005/api/v1/tasks", {
        headers,
        withCredentials: true,
      });
      setTasks(response.data.tasks); 
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:9005/api/v1/tasks/completed/${id}`,
        {},
        {
          headers,
          withCredentials: true,
        } 
      );

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, complete: !task.complete } : task
        )
      );
      alert(response.data.message);
    } catch (err) {
      console.log(err);
      alert("Failed to update task status");
    }
  };

  const handleImportantTask = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:9005/api/v1/tasks/important/${id}`,
        {},
        {
          headers,
          withCredentials: true,
        }
      );

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, important: !task.important } : task
        )
      );
      alert(response.data.message);
    } catch (err) {
      console.log(err);
      alert("Failed to update task important status");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:9005/api/v1/tasks/${id}`,
        {
          headers: {
            id: localStorage.getItem("id"),
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "CSRF-Token": csrfToken,
          },
          withCredentials: true, 
        }
      );
   
      fetchTasks();
      alert("Task deleted successfully");
    } catch (err) {
      console.log(err);
      alert("Failed to delete task");
    }
  };

  const handleUpdate = (id, title, description)=>{
    setInputDiv("fixed")
    setUpdatedData({id:id, title:title, description:description})
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {tasks.map((items, inx) => (
        <div
          key={inx}
          className="border border-gray-400 rounded-xl p-4 bg-[#cdccdf] flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-xl font-semibold">{items.title}</h3>
            <p className="text-gray-700 my-2">{items.description}</p>
          </div>

          <div className="mt-4 w-full flex justify-between items-center">
            <button
              className={`${
                items.complete === true ? "bg-green-500" : "bg-red-500"
              } text-white px-6 py-2 rounded-lg font-semibold text-lg`}
              onClick={() => handleCompleteTask(items._id)}
            >
              {items.complete === true ? "Completed" : "Pending"}
            </button>

            <div className="flex gap-2 justify-around">
              <button
                title={items.important ? "Unflag" : "Flag as Important"}
                onClick={() => handleImportantTask(items._id)}
                className={`text-xl p-1 hover:text-red-600 ${
                  items.important ? "text-red-600" : "text-gray-400"
                }`}
              >
                {items.important ? <FaFlag /> : <FaRegFlag />}
              </button>

              <button className="text-blue-500 text-2xl p-1 hover:text-blue-600"
              onClick={()=>handleUpdate(items._id, items.title, items.description)}>
                <FaEdit />
              </button>
              <button
                className="text-red-500 text-2xl p-1 hover:text-red-600"
                onClick={() => deleteTask(items._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}

      {home === true && (
        <button
          className="border border-gray-400 rounded-xl p-4 bg-[#cdccdf] flex flex-col justify-center gap-3 items-center h-full hover:scale-105 hover:cursor-pointer transition-all duration-300"
          onClick={() => setInputDiv("fixed")}
        >
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
