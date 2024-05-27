import React from 'react';
import Users from "../../../components/User/users";
import {Outlet} from "react-router-dom";

const UsersOfPostsPage = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersOfPostsPage;