import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

// children sao os componentes q serao renderizados
export function LoginProvider({ children }) {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    //Pegando itens salvos na memória
    let showProfile = JSON.parse(localStorage.getItem("showProfile"));
    let username = JSON.parse(localStorage.getItem("username"));
    console.log(`Username: ${username}`);
    setShowProfile(showProfile);
    setUsername(username);
  }, []);

  useEffect(() => {
    // salva itens na memória
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("showProfile", JSON.stringify(showProfile));
  }, [username, showProfile]);

  return (
    <LoginContext.Provider
      value={{
        username,
        showProfile,
        setShowProfile,
        setUsername,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
