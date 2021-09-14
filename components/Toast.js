import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const Toast = () => {
  return (
    <div className="toast position-absolute show">
      <div className="toast-header">
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">notification</strong>
        <small>11 mins ago</small>
      </div>
      <div className="toast-body">hello</div>
    </div>
  );
};

export default Toast;
