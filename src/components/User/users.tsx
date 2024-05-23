import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/user.service";
import User from "./user";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;