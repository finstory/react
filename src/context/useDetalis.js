import { createContext, useContext, useState } from "react";

export const DetalisContext = createContext();

export const useDetalis = () => {
    const initialState = {
        itemById: {},
        openDelete: false,
        openEdit: false,
        openAdd: false,
    };
    const [details, changeDetails] = useState(initialState);

    const setDetails = (data) => {
        changeDetails({ ...details, ...data });
    }

    return ({ details, setDetails })
}

export const useDetailsContext = () => {
    const context = useContext(DetalisContext);
    return context;
};