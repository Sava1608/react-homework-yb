import {createBrowserRouter} from "react-router-dom";
import PostPage from "../pages/PostPage";
import MainLayout from "../layout/MainLayout";
import CommentsPage from "../pages/CommentsPage";
import UsersOfPostsPage from "../pages/additional 7 HomeWork/UsersOfPostsPage";
import PostsOfUserPage from "../pages/additional 7 HomeWork/PostsOfUserPage";

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
            {path:'posts', element:<PostPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]
    }
]);
