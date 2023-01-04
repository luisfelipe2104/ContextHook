import React, { useContext } from "react";
import { LoginContext } from "../provider/LoginContext";

export default function Profile() {
  const { username, setShowProfile } = useContext(LoginContext); // acessa o context
  return (
    <>
      <h1>Profile</h1>
      <br />
      <h1>Username: {username}</h1>
      <br />
      <button onClick={() => setShowProfile(false)}>Logout</button>
    </>
  );
}
