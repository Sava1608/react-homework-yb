import React, {FC, PropsWithChildren} from 'react';
import {IComment} from "../../interfaces/commentInterface";

interface IProps extends PropsWithChildren {
    comment:IComment;
}
const Comment:FC<IProps> = ({comment}) => {
    const {postId,id,name,email,body} = comment
    return (
        <div>
            <div>Post ID: {postId}</div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export default Comment;