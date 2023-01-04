import React, { useContext } from "react";
import { LoginContext } from "../provider/LoginContext";

export default function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext); // acessa o context
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input type="password" placeholder="password" />
      <br />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
}
