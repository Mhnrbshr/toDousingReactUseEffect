import React, { ReactNode, useState, createContext } from "react";
import { ThemeProvider } from "react-bootstrap";
// import { createContext } from "vm";

export const Theme = createContext({
  style: "light",
  Changecolor: function Changecolor() {},
});

const ThemeContext = ({ children }: { children: ReactNode }) => {
  const [style, setStyle] = useState<any>("light");

  const Changecolor = () => {
    if (style == "dark") {
      setStyle("light");
    } else {
      setStyle("dark");
    }
    // return null;
  };

  return (
    <div>
      <Theme.Provider value={{ style, Changecolor }}>{children}</Theme.Provider>
    </div>
  );
};

export default ThemeContext;
