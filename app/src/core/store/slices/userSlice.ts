import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    username: string;
    isAuth: boolean;
    ISRId?: number;
}

const initialState: IUser = {
    isAuth: false,
    username: "",
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        refreshUser: (state) => {
            state.isAuth = false;
            state.username = "";
            state.ISRId = undefined;
        },
        saveUser: (state, action: PayloadAction<IUser>) => {
            state.username = action.payload.username;
            state.isAuth = action.payload.isAuth;
        },
        saveISRId: (state, action: PayloadAction<number>) => {
            state.ISRId = action.payload;
        },
    },
});

export const {
    saveUser,
    refreshUser,
    saveISRId,
} = userSlice.actions;
