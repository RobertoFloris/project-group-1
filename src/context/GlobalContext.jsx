import { createContext, useState, useContext } from "react";
import viaggiArray from "../data/viaggiArray";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [viaggi, setViaggi] = useState(viaggiArray);

  return (
    <GlobalContext.Provider value={{ viaggi, setViaggi }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
