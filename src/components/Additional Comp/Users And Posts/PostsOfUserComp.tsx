import React, {FC} from 'react';
import {IPost} from "../../../interfaces/postInterface";
import PostsComponent from "./PostsComponent";

interface IProps{
    posts:IPost[];
}
const PostsOfUserComp:FC<IProps> = ({posts}) => {

    return (
        <div>
            {
                posts.map(post => <PostsComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsOfUserComp;