import React from "react";
import "./Popup.css";
function Popup(props) {
  const handleToggle = () => {
    props.handleToggle();
  };
  return (
    <div className="popup">
      <div className="modal-content">
        <i className="material-icons close" onClick={handleToggle}>
          close
        </i>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <img src={props.image} alt="instructions" className="instructions" />
      </div>
    </div>
  );
}

export default Popup;
