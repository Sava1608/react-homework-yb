import React, {FC, PropsWithChildren} from 'react';
import {IPost} from "../../interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post:IPost;
}
const Post:FC<IProps> = ({post}) => {
    const {userId,id,title,body} = post
    return (
        <div>
            <div>User Id: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export default Post;