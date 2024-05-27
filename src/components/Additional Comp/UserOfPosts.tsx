import React, {FC} from 'react';
import User from "../User/user";
import {IUser} from "../../interfaces/userInterface";
import {Link} from "react-router-dom";

interface IProps {
    user:IUser;
}


const UserOfPosts:FC<IProps> = ({user}) => {
    return (
        <div>
            <User user={user}/>
            <Link to={user.id.toString()}>{user.name}</Link>
        </div>
    );
};

export default UserOfPosts;