import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    modal: {
        title: "Publicidad de Pedrige",
        open: false,
    }

}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        get_list: (state, { payload }) => {
            state.list = payload;
        },

        set_modal: (state, { payload }) => {
            state.modal = {
                title: payload.title,
                open: payload.open
            };
        },
    }
})

// Action creators are generated for each case reducer function
export const { get_list, set_modal } = homeSlice.actions
