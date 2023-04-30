import { createContext, useContext, useState } from "react";

export const ChangeContext = createContext();

export const useChange = () => {
    const initialState = {
        nameApi: "dogs"
    };




    const [change, changeState] = useState(initialState);

    const setChange = (data) => {
        changeState({ ...change, ...data });
    }

    return ({ change, setChange })
}

export const useChangeContext = () => {
    const context = useContext(ChangeContext);
    return context;
};