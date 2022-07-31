import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
interface Props {
  show: boolean;
  onClose: ()=> void;
  children: React.ReactNode;
}

export default function Modal({ show, onClose, children }:Props):JSX.Element {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="c-modal">
      <div className="modal__content">
        <button className="modal__content-close" onClick={handleCloseClick}>
          X
        </button>
        <div className="StyledModalBody">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal") as HTMLElement
    );
  } else {
    return <></>;
  }
}
