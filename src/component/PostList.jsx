import { useContext, useEffect, useState } from 'react';
import { PostList as PostListData  } from '../post/post-list-store';
import WelcomeMsg from './WelcomeMsg';
import Post from './Post'
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';
import CreatePost from './CreatePost';

const PostList=()=>{

    //const postList=useLoaderData();
    const {postList}=useContext(PostListData);
    const postListLoader=useLoaderData();


    
    
    
    
    
    
    return(
        <>
        
        
        {postList.map((post)=>(<Post  post={post}/>))}
        {postListLoader.map((post)=>(<Post  post={post}/>))}


    
    
        
        

</>
    );
};
export default PostList;
export  const postLoader=()=>{
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data)=>{return(data.posts)})
        
        
        
}
