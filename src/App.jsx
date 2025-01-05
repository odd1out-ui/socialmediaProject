
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './component/Header';
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import CreatePost from './component/CreatePost'
import PostList from './component/PostList'
import { useState } from 'react';
import PostListProvider from './post/post-list-store';
import { Outlet } from 'react-router-dom';

function App() {
  const [selectedTab,setSelectedTab]=useState("")
  return (
    <PostListProvider>
    <div className='app-container'>
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    <div className='container'>
    <Header></Header>
    <Outlet/>      
    <Footer></Footer>
    </div>
    
    

   
    </div>
    </PostListProvider>

   );
}

export default App;
