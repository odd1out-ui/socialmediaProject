import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreatePost,{submitFormAction} from './component/CreatePost';
import  PostList, {postLoader}   from './component/PostList';





const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
    {path:'/', element:<App/>, children:[
        {path:'/',element:<PostList/> , loader:postLoader},
        {path:'/create-post',element:<CreatePost/>},


]},
    
])
root.render(
  
    <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
