import React from "react";
import CompoC from "./compoC";

const CompoB = ({ user }) => {
  return (
    <div>
      <h1>CompoB</h1>
      <CompoC />
    </div>
  );
};

export default CompoB;
