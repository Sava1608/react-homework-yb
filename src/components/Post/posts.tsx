import React, {useEffect, useState} from 'react';
import {IPost} from "../../interfaces/postInterface";
import {postService} from "../../services/post.service";

import PostsAndComments from "../Additional Comp/Posts And Comments/PostsAndComments";

const PostsUser = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post=> <PostsAndComments key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsUser;