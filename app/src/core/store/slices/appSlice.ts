import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAppData {
    searchSoftwareTitle: string;
    filterISRStatus?: string;
    filterISRStartDate?: string;
    filterISREndDate?: string;

}

const initialState: IAppData = {
    searchSoftwareTitle: "",
    filterISRStatus: undefined,
    filterISRStartDate: undefined,
    filterISREndDate: undefined,
};

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) => {
            state.searchSoftwareTitle = "";
            state.filterISRStatus = undefined;
            state.filterISRStartDate = undefined;
            state.filterISREndDate = undefined;
        },
        saveSearchSoftwareTitle: (state, action: PayloadAction<string>) => {
            state.searchSoftwareTitle = action.payload;
        },
        saveFilterISRStatus: (state, action: PayloadAction<string>) => {
            state.filterISRStatus = action.payload;
        },
        saveFilterISRStartDate: (state, action: PayloadAction<string>) => {
            state.filterISRStartDate = action.payload;
        },
        saveFilterISREndDate: (state, action: PayloadAction<string>) => {
            state.filterISREndDate = action.payload;
        },
    },
});

export const {
    refreshApp,
    saveSearchSoftwareTitle,
    saveFilterISRStatus,
    saveFilterISRStartDate,
    saveFilterISREndDate
} = appSlice.actions;
