import { useContext } from 'react';
import '../App.css'
import { MdDelete } from "react-icons/md";
import { PostList} from '../post/post-list-store';



const Post=({post})=>{
    const {deletePost}=useContext(PostList);
    console.log(post);

    
    return(
        <>
        
        <div className="card post-card"  style={{width: "30rem"}}>
        
        <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={()=>{deletePost(post.userId)}}>
            <MdDelete/>
           </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag)=><span class="badge text-bg-primary hashtag">{tag}</span>)}<hr/>
        
        <div class="alert alert-info reaction" role="alert">
            Post liked by {post.views} people
        </div>

        

        </div>
        </div>
        </>
        
    )
}
export default Post;