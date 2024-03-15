import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const sharesElement = useRef();
    const commentsElement = useRef();
    const tagsElement = useRef();
    const imgSrcElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const shares = sharesElement.current.value;
        const comments = commentsElement.current.value;
        const tags = tagsElement.current.value.split(" ");
        const imgSrc = imgSrcElement.current.value;

        addPost(
            userId,
            postTitle,
            postBody,
            reactions,
            shares,
            comments,
            tags,
            imgSrc
        );
        userIdElement.current.value = ""
        postTitleElement.current.value = ""
        postBodyElement.current.value = ""
        reactionsElement.current.value = ""
        sharesElement.current.value = ""
        commentsElement.current.value = ""
        tagsElement.current.value = ""
        imgSrcElement.current.value = ""
    };

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">
                        Enter your User Id here
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                        ref={userIdElement}
                        placeholder="Your User Id"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Post title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        ref={postTitleElement}
                        placeholder="How are you feeling today ?"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                        Post Content
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="body"
                        ref={postBodyElement}
                        placeholder="Tell us about yourself"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="imgSrc" className="form-label">
                        Image Source
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="body"
                        ref={imgSrcElement}
                        placeholder="Give image source here"
                    />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <div>
                        <label htmlFor="reactions" className="form-label">
                            Reactions
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="reactions"
                            ref={reactionsElement}
                            placeholder="No. of reactions"
                        />
                    </div>
                    <div>
                        <label htmlFor="comments" className="form-label">
                            Comments
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="comments"
                            ref={commentsElement}
                            placeholder="No. of comments"
                        />
                    </div>
                    <div>
                        <label htmlFor="shares" className="form-label">
                            Shares
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="shares"
                            ref={sharesElement}
                            placeholder="No. of Shares"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">
                        Tags
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tags"
                        ref={tagsElement}
                        placeholder="Please enter your tags using space in between"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Post
                </button>
            </form>
        </>
    );
}

export default CreatePost;
