import React, { Fragment } from "react";
import classes from "./Modal.module.css";
///react dom libary 
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
// i will change everything inshaallah as soon as possible
// trying to practice for the exam and there is no option
//html er root jekahne amara doreci and output dekahar jonnu root id theke dekte 
//parteci akhn amara overlays same akta kaj kore also amara backdrop and modaloverlay use korbu

const portalElement =document.getElementById('overlays')


const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
