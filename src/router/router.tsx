import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostPage from "../pages/PostPage";
import MainLayout from "../layout/MainLayout";
import CommentsPage from "../pages/CommentsPage";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]
    }
]);
