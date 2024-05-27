import React from 'react';
import PostPage from "../../PostPage";
import {Outlet} from "react-router-dom";

const PostOfCommentsPage = () => {
    return (
        <div>
            <PostPage/>
            <br/>
            <Outlet/>
        </div>
    );
};

export default PostOfCommentsPage;