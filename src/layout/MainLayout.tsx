import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <br/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;