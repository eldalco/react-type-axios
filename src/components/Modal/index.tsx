import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
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
      document.getElementById("modal")
    );
  } else {
    return null;
  }
}
