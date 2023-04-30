import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filters: [],
    active: true,

}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        set_filters: (state, { payload }) => {
            state.filters = payload.filters;
        },
    }
})

// Action creators are generated for each case reducer function
export const { set_filters } = globalSlice.actions
