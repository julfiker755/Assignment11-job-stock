import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Errorpage from "./Errorpage";
import Blogs from "../components/Blogs";
import SingleDetails from "../Pages/SingleDetails";
import Private from "../Authentication/Private";
import Addjobs from "../Pages/Addjobs";
import Alljobs from "../Pages/Alljobs";
import Myjobs from "../Pages/Myjobs";
import Appliedjobs from "../Pages/Appliedjobs";
import Update from "../Pages/Update";


const routes =createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Layout></Layout>,
        children:[
            {
               index:true,
               element:<Home></Home>
            },{
                path:'/blog',
                element:<Blogs></Blogs>
            },{
                path:'/details/:jobid',
                element:<Private><SingleDetails></SingleDetails></Private>
            },{
                path:'/addjobs',
                element:<Private><Addjobs></Addjobs></Private>
            },{
                path:'/alljobs',
                element:<Alljobs></Alljobs>
            },{
                path:'/myjobs',
                element:<Private><Myjobs></Myjobs></Private>
            },{
                path:'/applied',
                element:<Private><Appliedjobs></Appliedjobs></Private>
            },{
                path:'/update/:uid',
                element:<Update></Update>,
            }
        ]
    },{
        path:'/login',
        element:<Login></Login>
    },{
        path:'/register',
        element:<Register></Register>
    }
])

export default routes;