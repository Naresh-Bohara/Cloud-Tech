import React, { useState } from "react";
import ShowModal from "./ShowModal";
import { toast } from "react-toastify";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseBtn = (
    <button
      className="bg-green-500 p-2 m-3 rounded-[12%] hover:bg-[#72d178]"
      onClick={closeModal}
    >
      Ok done
    </button>
  );

  const mainModal = (
    <ShowModal closeModal={closeModal} handleCloseBtn={handleCloseBtn}>
      <h1 className="text-2xl text-center font-bold ">hey there</h1>
      <p className="text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima,
        hic, animi similique deleniti iusto atus maxime nihil esse accusantium
        sed?
      </p>
    </ShowModal>
  );
  const notifySuccess = () => toast.success("Success! Operation completed.");
  const notifyError = () => toast.error("Error! Something went wrong.");
  const notifyInfo = () => toast.info("Info! Please check this message.");

  return (
    <>
      <button
        className="font-bold p-4 rounded m-20 hover:bg-[#2f362fd8]
     bg-black text-white"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal && mainModal}

      <button onClick={notifySuccess} className="bg-[#4ec448] me-2 p-2 rounded">
        toast success
      </button>
      <button onClick={notifyError} className="bg-[#e43434] me-2 p-2 rounded">
        toast error
      </button>
      <button onClick={notifyInfo} className="bg-[#33abdf] me-2 p-2 rounded">
        toast info
      </button>

      <div className="h-30% m-44">
        <h1>Hey there</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          nisi quas modi! Enim fugiat, eos eaque non ipsum corporis minima.
        </p>
      </div>

      <div className="h-30% m-44">
        <h1>Hey there</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          nisi quas modi! Enim fugiat, eos eaque non ipsum corporis minima.
        </p>
      </div>
    </>
  );
};

export default Modal;
