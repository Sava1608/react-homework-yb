import React, {FC} from 'react';
import Post from "../../Post/post";
import {IPost} from "../../../interfaces/postInterface";
import {Link} from "react-router-dom";

interface IProps{
    post:IPost;
}

const PostsAndComments:FC<IProps> = ({post}) => {
    return (
        <div>
            <Post post={post}/>
            <Link to={post.id.toString()}>{post.title}</Link>
        </div>
    );
};

export default PostsAndComments;