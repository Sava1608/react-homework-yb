import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CommentsPage from "../pages/CommentsPage";
import UsersOfPostsPage from "../pages/additional 7 HomeWork/UsersPostsPage/UsersOfPostsPage";
import PostsOfUserPage from "../pages/additional 7 HomeWork/UsersPostsPage/PostsOfUserPage";
import PostOfCommentsPage from "../pages/additional 7 HomeWork/PostsAndCommentsPage/PostOfCommentsPage";
import PostAndComPage from "../pages/additional 7 HomeWork/PostsAndCommentsPage/PostAndComPage";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {path:'users', element:<UsersOfPostsPage/>,
                children: [
                    {path:':id', element:<PostsOfUserPage/>}
                ]
            },
            {path:'posts', element:<PostOfCommentsPage/>,
                children: [
                    {path: ':id', element:<PostAndComPage/>}
                ]
            },
            {path:'comments', element:<CommentsPage/>}
        ]
    }
]);
