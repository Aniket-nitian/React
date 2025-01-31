import React from "react";
import CompoB from "./compoB";

const CompoA = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1>CompoA</h1>
      <CompoB />
    </div>
  );
};

export default CompoA;
