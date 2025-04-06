import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const InputData = ({ inputDiv, setInputDiv, updatedData, setUpdatedData }) => {
  const [data, setData] = useState({ title: "", description: "" });
  const [csrfToken, setCsrfToken] = useState("");

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "CSRF-Token": csrfToken,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(()=>{
    setData({title:updatedData.title, description: updatedData.description})
  }, [updatedData])

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9005/api/v1/csrf-token",
          { withCredentials: true }
        );
        setCsrfToken(response.data.csrfToken);
      } catch (err) {
        console.error("CSRF token fetch failed", err);
      }
    };
    fetchCsrfToken();
  }, []);

  const submitData = async () => {
    if (data.title.trim() === "" || data.description.trim() === "") {
      return alert("All fields are required");
    }

    try {
      const response = await axios.post(
        "http://localhost:9005/api/v1/tasks",
        data,
        {
          headers,
          withCredentials: true,
        }
      );
      alert("Task added successfully!");
      setInputDiv("hidden"); // Close modal
      setData({ title: "", description: "" }); // Clear input
      window.location.reload(); // Refresh page after submission
    } catch (error) {
      console.error("Error submitting task:", error);
      alert("Something went wrong while adding the task.");
    }
  };

  const updateTask = async()=>{
    if (data.title.trim() === "" || data.description.trim() === "") {
      return alert("All fields are required");
    }

    try {
      const response = await axios.put(
        `http://localhost:9005/api/v1/tasks/${updatedData.id}`,
        data,
        {
          headers,
          withCredentials: true,
        }
      );
      alert("Task updated successfully!");
      setUpdatedData({
        id: "", 
        title:"",
        description:"",
      })
      setData({ title: "", description: "" }); 
      setInputDiv("hidden")
      window.location.reload();
    } catch (error) {
      console.error("Error submitting task:", error);
      alert("Something went wrong while adding the task.");
    }
  }

  return (
    <>
      <div
        className={`${inputDiv} top-0 left-0 bg-gray-100 opacity-80 h-screen w-full`}
      ></div>

      <div
        className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-3/6 p-4 rounded bg-gray-200">
          <div className="flex justify-end text-4xl py-3 px-4">
          <button
            onClick={() => {
              setInputDiv("hidden");
              setData({
                title: "",
                description: "",
              })
              setUpdatedData({
                id: "",
                title: "",
                description: "",
              });
            }}
          >
            <MdCancel className="text-red-700 hover:text-red-800 cursor-pointer" />
          </button>

          </div>

          <input
            type="text"
            name="title"
            placeholder="Title"
            className="rounded bg-gray-200 mb-2 px-3 py-2 border-2 border-gray-700 w-full"
            value={data.title}
            onChange={handleChange}
          />

          <textarea
            rows="10"
            name="description"
            placeholder="Description"
            className="rounded bg-gray-200 px-3 py-2 border-2 border-gray-700 w-full resize-none mb-3"
            value={data.description}
            onChange={handleChange}
          ></textarea>

          {
            updatedData.id==="" ? 
            <button
            className="px-3 py-2 font-semibold bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            onClick={submitData}
          >
            Submit
          </button> : 
          <button
          className="px-3 py-2 font-semibold bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          onClick={updateTask}
        >
          Updadte
        </button>
          }

        </div>
      </div>
    </>
  );
};

export default InputData;
