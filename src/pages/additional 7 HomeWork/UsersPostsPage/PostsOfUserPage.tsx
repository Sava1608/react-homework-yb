import React, {useEffect, useState} from 'react';
import PostsOfUserComp from "../../../components/Additional Comp/Users And Posts/PostsOfUserComp";
import {useParams} from "react-router-dom";
import {IPost} from "../../../interfaces/postInterface";
import {userService} from "../../../services/user.service";

const PostsOfUserPage = () => {

    const {id} = useParams()

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if(id){
            userService.getPostsOfUsers(id)
                .then(value => setPosts(value.data))
        }
    }, [id]);
    return (
        <div>
            <PostsOfUserComp posts={posts}/>
        </div>
    );
};

export default PostsOfUserPage;