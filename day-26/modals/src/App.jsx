import React, { useState } from 'react';
import "./index.css";
import MyModal from './components/MyModal';
import Modal from './components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    alert("Confirmed!");
    closeModal();
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={openModal}
      >
        Open Modal
      </button>

      <MyModal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Are you sure?"
        content="Do you really want to perform this action?"
        onConfirm={handleConfirm}
      />
      <Modal/>
    </>
  );
};

export default App;
