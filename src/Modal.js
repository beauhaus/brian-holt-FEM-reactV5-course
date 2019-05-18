import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  //useRef cleans up your own garbage
  const elRef = useRef(null);
  if (elRef.current) {
    const div = document.createElement("div");

    elRef.current = div;
  }
  // Why ",[]" at the bottom? --Because we only want useEffect() to run once
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div>{children}</div>);
};

export default Modal;

/*


*/
