import { useContext, useRef } from "react";
import { PostList } from "../post/post-list-store";
import{useNavigate} from 'react-router-dom'


const CreatePost=()=>{
  const {addPost}=useContext(PostList);
  const navigator=useNavigate();
  const userIDElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const hashtagsElement=useRef();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userID=userIDElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const hashtags=hashtagsElement.current.value.split(' ')
    addPost(userID,postTitle,postBody,reactions,hashtags)
    navigator('/')
    userIDElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    hashtagsElement.current.value="";



  }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div class="mb-3 ">
      <label htmlFor="userID" class="htmlhtmlForm-label">UserID</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="title" 
    placeholder="Enter your UserID" style={{width:"80%"}} ref={userIDElement}/>
    </div>
 
  <div class="mb-3 ">
    <label htmlFor="title" class="htmlhtmlForm-label">Post Title</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="title"
     placeholder="How are you feeling today!" style={{width:"80%"}} ref={postTitleElement}/>
    </div>
  <div class="mb-3">
    <label htmlFor="post" class="htmlhtmlForm-label">Post</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="post" 
    placeholder="Tell us more about it...." style={{width:"80%"}} ref={postBodyElement}/>
  </div>
  <div class="mb-3">
    <label htmlFor="reaction" class="htmlhtmlForm-label">Number of Reaction</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="reaction"
     placeholder="Reaction people gave...." style={{width:"80%"}} ref={reactionsElement}/>
    
  </div>
  <div class="mb-3">
    <label htmlFor="hashtag" class="htmlhtmlForm-label">Hashtags</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="hashtag" 
    placeholder="Please enter hashtag with space...." style={{width:"80%"}} ref={hashtagsElement}/>
    
  </div>
  
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </>
    )
}
export default CreatePost;