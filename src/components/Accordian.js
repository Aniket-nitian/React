import React, { useState } from "react";
import ListItem from "./Listitem";

const Accordian = ({ title, open, click }) => {
  const showItemList = () => {
    click();
  };
  return (
    <div className="my-1 shadow-md border-gray-200 px-4 py-2 w-64">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button
          onClick={showItemList}
          className="bg-black text-white px-2 rounded-md"
        >
          Show
        </button>
      </div>
      {/* if open === true show Listitem */}
      {open && <ListItem />}
    </div>
  );
};

export default Accordian;
