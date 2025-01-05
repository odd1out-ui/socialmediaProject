import { useContext, useRef } from "react";
import { PostList } from "../post/post-list-store";
import { useNavigate,redirect } from "react-router-dom";
import {Form} from 'react-router-dom'


const CreatePost=()=>{
  
  //const {addPost}=useContext(PostList);
  
    return(
        
        <Form method="post" >
        <div class="mb-3 ">
      <label htmlFor="userID" class="htmlhtmlForm-label">UserID</label><br/>
    <input type="number" class="htmlhtmlForm-control" id="userID" 
    placeholder="Enter your UserID" style={{width:"80%"}} name="userId"/>
    </div>
 
  <div class="mb-3 ">
    <label htmlFor="title" class="htmlhtmlForm-label">Post Title</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="title"
     placeholder="How are you feeling today!" style={{width:"80%"}} name="title"/>
    </div>
  <div class="mb-3">
    <label htmlFor="post" class="htmlhtmlForm-label">Post</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="post" 
    placeholder="Tell us more about it...." style={{width:"80%"}} name="body"/>
  </div>
  <div class="mb-3">
    <label htmlFor="reaction" class="htmlhtmlForm-label">Number of Reaction</label><br/>
    <input type="number" class="htmlhtmlForm-control" id="reaction"
     placeholder="Reaction people gave...." style={{width:"80%"}} name="reactions"/>
    
  </div>
  <div class="mb-3">
    <label htmlFor="hashtag" class="htmlhtmlForm-label">Hashtags</label><br/>
    <input type="text" class="htmlhtmlForm-control" id="hashtag" 
    placeholder="Please enter hashtag with space...." style={{width:"80%"}} name="tags"/>
    
  </div>
  
  
  
  <button type="submit" class="btn btn-primary">Post</button>
</Form>
        
    )
};
export async function submitFormAction(data){
  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(' ');
  console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  
  .then((post)=>console.log(post))
  return redirect('/');


}
export default CreatePost;