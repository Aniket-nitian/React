import React, { useContext } from "react";
import UserContext from "../utils/userContext";

const CompoC = () => {
  const user = useContext(UserContext);
  return (
    <div className="border border-black">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>email: {user.email}</p>
    </div>
  );
};
export default CompoC;
