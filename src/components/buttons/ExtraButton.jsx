import React from "react";
import { Button } from "react-bootstrap";
const ExtraButton = (props) => {
  return (
    <div>
      <Button variant="outline-success">{props.button}</Button>
    </div>
  );
};

export default ExtraButton;
