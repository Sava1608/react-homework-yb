import React, {FC,PropsWithChildren} from 'react';
import {IUser} from "../../interfaces/userInterface";

interface IProps extends PropsWithChildren {
    user:IUser;
}
const User:FC<IProps> = ({user}) => {
    const {id,name,username,email} = user;
    return (
        <div>
            <div>User ID: {id}</div>
            <div>User Name: {name}</div>
            <div>User Username: {username}</div>
            <div>User Email: {email}</div>
            <br/>
        </div>
    );
};

export default User;