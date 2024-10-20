import React from "react";

export interface IGlobalProps {
    isLogin: boolean;
    logout: () => void;
    login: () => void;
    useAuth: () => boolean;
}

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type ClickEvent = React.MouseEvent<HTMLButtonElement>;
