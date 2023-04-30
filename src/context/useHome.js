import { createContext, useContext, useState } from "react";

export const HomeContext = createContext();

export const useHome = () => {
    const initialState = {
        list: [],
        next: false,
        back: false,
        openAdd: false,

    };
    const [home, changeHome] = useState(initialState);

    const setHome = (data) => {
        changeHome({ ...home, ...data });
    }

    return ({ home, setHome })
}

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    return context;
};