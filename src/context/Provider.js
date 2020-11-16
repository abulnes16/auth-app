import React, { useState } from "react";

import Context from "./index";

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Context.Provider
      value={{
        theme: theme,
        toggleTheme: themeToggler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
