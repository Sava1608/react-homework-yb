import React, {FC} from 'react';
import {IPost} from "../../../interfaces/postInterface";

interface IProps{
    post:IPost;
}
const PostsComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <div>ID: {post.id}</div>
           <div>TITLE: {post.title}</div>
            <div>BODY: {post.body}</div>
            <br/>
        </div>
    );
};

export default PostsComponent;