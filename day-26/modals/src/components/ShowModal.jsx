import { useEffect } from "react";
import ReactDOM from "react-dom";

const ShowModal = ({ closeModal, children, handleCloseBtn }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return ReactDOM.createPortal(
    <>
      <div className="test"> 
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          {children}
          {handleCloseBtn}
        </div>
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default ShowModal;
