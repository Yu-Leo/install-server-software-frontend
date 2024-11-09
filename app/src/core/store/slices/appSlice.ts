import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

export interface INotification {
    id: string;
    message: string;
    isError: boolean;
}

export interface IAppData {
    searchSoftwareTitle: string;
    filterISRStatus?: string;
    filterISRStartDate?: string;
    filterISREndDate?: string;
    notifications: INotification[];
}

const initialState: IAppData = {
    searchSoftwareTitle: "",
    filterISRStatus: undefined,
    filterISRStartDate: undefined,
    filterISREndDate: undefined,
    notifications: [],
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
        addNotification: (
            state,
            action: PayloadAction<{ message: string; isError?: boolean }>
        ) => {
            state.notifications.push({
                message: action.payload.message,
                id: uuidv4(),
                isError: action.payload.isError || false,
            });
        },
        deleteNotification: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const queue = state.notifications;
            state.notifications = queue.filter((item) => item.id !== id);
        },
    },
});

export const {
    refreshApp,
    saveSearchSoftwareTitle,
    saveFilterISRStatus,
    saveFilterISRStartDate,
    saveFilterISREndDate,
    addNotification,
    deleteNotification,
} = appSlice.actions;
