import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const useGlobal = () => {
    const initialState = {
        inputValue: {
            name: "",
            prop2: "",
            orderBy: "",
        },
        actualPage: 1,
    };


    
    const [global, changeGlobal] = useState(initialState);

    const setGlobal = (data) => {
        changeGlobal({ ...global, ...data });
    }

    return ({ global, setGlobal })

}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    return context;
};

