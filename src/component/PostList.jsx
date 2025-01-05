import { useContext, useEffect, useState } from 'react';
import { PostList as PostListData  } from '../post/post-list-store';
import WelcomeMsg from './WelcomeMsg';
import Post from './Post'
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';

const PostList=()=>{
    const postList=useLoaderData();
    
    
    
    
    
    
    return(
        <>
        
        { postList.length===0 &&(<WelcomeMsg />)}
        {postList.map((post)=>(<Post  post={post}/>))}
        
        

</>
    );
};
export default PostList;
export  const postLoader=()=>{
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data)=>{return(data.posts)})
        
        
        
}
