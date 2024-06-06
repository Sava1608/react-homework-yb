import {createBrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";
import MainLayout from "../layout/MainLayout";

export const routerConfig = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {index:true, element:<AuthPage/>},
            {path:'cars', element:<CarsPage/>}
        ]
    },
])