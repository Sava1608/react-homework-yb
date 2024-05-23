import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/users'}>Users</NavLink>
            <br/>
            <NavLink to={'/posts'}>Posts</NavLink>
            <br/>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export default Header;