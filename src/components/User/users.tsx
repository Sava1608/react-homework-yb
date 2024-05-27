import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/user.service";
import UserOfPosts from "../Additional Comp/UserOfPosts";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user => <UserOfPosts key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;