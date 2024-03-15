import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { FaRegComment, FaPaperPlane } from "react-icons/fa";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

function Post({ post }) {

    const {deletePost} = useContext(PostList)
    return (
        <>
            <div className="card">
                <img src={post.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pointer"
                        onClick={() => deletePost(post.id)}  >
                            <MdDelete />
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag) => (
                        <span key={tag} className="badge text-bg-primary m-1">
                            {tag}
                        </span>
                    ))}
                    <div className="alert alert-success reactions d-flex justify-content-around" role="alert">
                        <span className="pointer">{post.reactions} <FcLike /></span>
                        <span className="pointer">{post.comments} <FaRegComment /></span>
                        <span className="pointer">{post.shares} <FaPaperPlane /></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;
