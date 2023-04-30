import { createContext, useContext, useState } from "react";
import { ChangeContext, useChange } from "./useChange";
import { DetalisContext, useDetalis } from "./useDetalis";
import { GlobalContext, useGlobal } from "./useGlobal";
import { HomeContext, useHome } from "./useHome";

export const ContextProvider = ({ children }) => {
  const { global, setGlobal } = useGlobal();
  const { home, setHome,changeHome } = useHome();
  const { details, setDetails } = useDetalis();
  const { change, setChange } = useChange();
  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      <HomeContext.Provider value={{ home, setHome ,changeHome}}>
        <DetalisContext.Provider value={{ details, setDetails }}>
          <ChangeContext.Provider value={{ change, setChange }}>
            {children}
          </ChangeContext.Provider>
        </DetalisContext.Provider>
      </HomeContext.Provider>
    </GlobalContext.Provider>
  );
};
