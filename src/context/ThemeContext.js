import { createContext } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    backgroundColor: "#1E2A47",
    color: "#FFFFFF",
  },
  light: {
    backgroundColor: "FEFEFE",
    color: "4B6A9B",
  },
};

export const Provider = ({ children }) => {
  return (
    <ThemeContext.Provider value={themes}>{children} </ThemeContext.Provider>
  );
};
