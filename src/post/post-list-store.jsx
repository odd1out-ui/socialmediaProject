import { createContext, useReducer,useEffect } from "react";
import CreatePost from "../component/CreatePost";

    

export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    addIntialPost:()=>{},
    deletePost:()=>{}
});
const PostListProvider=({children})=>{
    const[postList,dispatchPostList]=useReducer(postListReducer,[])
    const controller=new AbortController();
    const signal=controller.signal;
    
    const addPost=(userID,postTitle,postBody,reactions,hashtags)=>{
        dispatchPostList({
            type:'ADD_POST',
            payload:{
                id:Date.now(),
                title:postTitle,
                body:postBody,
                reaction:reactions,
                userid:userID,
                tags:hashtags,
                
                
            }
            
                
            
        })
    
    }
    const addIntialPost=(post)=>{
        dispatchPostList({
            type:'ADD_INITIAL_POST',
            payload:
            {
                post,
            }
                
                
            
        })
    
    }
   
    const deletePost=(postID)=>{
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postID,
            }
                }) ;   
    }
    /*useEffect(()=>{
        
        
        
        return()=>{
            console.log('useEffect aborted')
            controller.abort();

        }
        

    },[])*/
    return(
        <div>
        <PostList.Provider value={{postList,addPost,addIntialPost,deletePost}}>
            {children}
        </PostList.Provider>
        
        </div>
    )
    
    

}
const postListReducer=(currPostList,action)=>
    {
        let newPostList=currPostList;
        if(action.type==='DELETE_POST')
            {
                newPostList=currPostList.filter((post)=>post.userId!=action.payload.postID)
            }else if(action.type==='ADD_POST')
            {
                newPostList=[action.payload,...currPostList]
            } else if(action.type==='ADD_INITIAL_POST')
            {
                newPostList=action.payload.post
            }
        return newPostList;
    }
    
    
export default PostListProvider;