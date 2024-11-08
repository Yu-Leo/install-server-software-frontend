import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAppData {
    searchSoftwareTitle: string;

}

const initialState: IAppData = {
    searchSoftwareTitle: "",
};

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) => {
            state.searchSoftwareTitle = "";

        },
        saveSearchSoftwareTitle: (state, action: PayloadAction<string>) => {
            state.searchSoftwareTitle = action.payload;
        },
    },
});

export const {
    refreshApp,
    saveSearchSoftwareTitle
} = appSlice.actions;
