import React, {FC} from 'react';
import {IPost} from "../../interfaces/postInterface";

interface IProps{
    post:IPost;
}
const PostsComponent:FC<IProps> = ({post}) => {
    return (
        <div>
           <div>{post.title}</div>
            <br/>
            <div>{post.body}</div>
        </div>
    );
};

export default PostsComponent;