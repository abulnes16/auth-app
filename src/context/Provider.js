/* Provider component
  Provides the context for the whole app
*/

// React
import React, { useState } from "react";

// Context
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
