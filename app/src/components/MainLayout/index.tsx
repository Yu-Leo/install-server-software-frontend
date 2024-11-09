import React from "react";
import "./MainLayout.css";
import {Outlet} from "react-router-dom";
import {Navbar} from "../Navbar";

export const MainLayout: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};
