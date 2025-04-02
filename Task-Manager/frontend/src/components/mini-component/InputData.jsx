import React from "react";
import { MdCancel } from "react-icons/md";
const InputData = ({inputDiv, setInputDiv}) => {
  return (
    <>
      <div className={`${inputDiv} top-0 left-0 bg-gray-100 opacity-80 h-screen w-full`}></div>
    
      <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-3/6 p-4 rounded bg-gray-200">
        <div className="flex justify-end text-4xl py-3 px-4">
            <button onClick={()=>setInputDiv("hidden")}>
            <MdCancel className="text-red-700 hover:text-red-800 cursor-pointer"/>
            </button>
            </div>
            <input type="text" placeholder="Title" className="rounded bg-gray-200 mb-2 px-3 py-2 border-2 border-gray-700 w-full" />
            <textarea rows={"10"} cols={"10"} name="description" id="description"
                placeholder="Description" 
                className="rounded bg-gray-200 px-3 py-2 border-2 border-gray-700 w-full resize-none">
            </textarea>
            <button className="px-3 py-2 font-semibold bg-blue-400 rounded-xl">Submit</button>
        </div>
      </div>
    </>
  );
};

export default InputData;
