import { createContext, useState } from "react";

export const ContextApi = createContext();

const ContextProvider = (props) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = ()=>{
    setTheme(!theme)
  }
  const value = {
    theme,
    setTheme,
    toggleTheme,
  };
  return (
    <ContextApi.Provider value={value}>{props.children}</ContextApi.Provider>
  );
};
export default ContextProvider;
