import React from "react";
import ReactDOM from "react-dom";
import {
  BackdropProps,
  ModalOverlayProps,
  ModalProps,
} from "../interfaces/miscInterface";

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div
      className="h-screen w-screen bg-slate-400 bg-opacity-50 fixed z-10 top-0"
      onClick={onClick}
    ></div>
  );
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return <div className="h-screen w-3/12 fixed z-20 top-0">{props.children}</div>;
};

const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  const portaOverlay = document.getElementById("overlay");
  if (!portaOverlay) {
    console.error("Overlay element not found.");
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portaOverlay)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portaOverlay
      )}
    </>
  );
};

export default Modal;
