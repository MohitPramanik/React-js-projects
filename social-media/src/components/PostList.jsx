import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

function PostList() {
    const { postList } = useContext(PostListData);
    return (
        <>
            <div className="d-flex flex-wrap justify-content-around">
                {postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default PostList;
