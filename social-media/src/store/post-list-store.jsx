import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currePostList, action) => {
    let newPostList = currePostList;
    if(action.type === "DELETE_POST") {
        newPostList = currePostList.filter(post => post.id !== action.payload.postId)
    }
    else if(action.type === "ADD_POST") {
        newPostList = [action.payload, ...currePostList]
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, shares, comments, tags, imgSrc) => {
        dispatchPostList({
            type: "ADD_POST",
            payload:  {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                comments: comments,
                shares: shares,
                userId: userId,
                imgSrc: imgSrc,
                tags: tags
            },
        })
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            },
        })
    };

    return (
        <PostList.Provider
            value={ {postList, addPost, deletePost} }>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going to Mumbai",
        body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
        reactions: 2,
        comments: 5,
        shares: 9,
        userId: "user-9",
        imgSrc: "https://lh5.googleusercontent.com/_gj4UK5lufj3p12kGmwSdhjcmt8LzpP6ljY2JKLanmn9ijgXmTjNi2Rwk2h9ijM1j8b8_yMtd5yHCKkwc3As1XCUzv-v-NsQc9EE5Wzm9SJpMfVjmXbtBFObG9JDDw5qxAjQjfQm",
        tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
        id: "2",
        title: "Paas ho bhai",
        body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe",
        reactions: 15,
        comments: 2,
        shares: 5,
        userId: "user-12",
        imgSrc: "https://ocdn.eu/images/pulscms/ZWU7MDA_/d630d024eb2db86e771e1f202d94a587.jpeg",
        tags: ["graduating", "unbelievable"],
    },
    {
        id: "3",
        title: "Holi Party",
        body: "Rango ka tyohaar rang bikherta hai aur sabhi rangeen dikhte hain",
        reactions: 15,
        comments: 2,
        shares: 0,
        userId: "user-16",
        imgSrc: "https://c.files.bbci.co.uk/2E51/production/_128875811_holiepa.jpg",
        tags: ["holi", "colors", "party"],
    },
    {
        id: "4",
        title: "Paas ho bhai",
        body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe",
        reactions: 15,
        comments: 15,
        shares: 19,
        userId: "user-12",
        imgSrc: "https://ocdn.eu/images/pulscms/ZWU7MDA_/d630d024eb2db86e771e1f202d94a587.jpeg",
        tags: ["graduating", "unbelievable"],
    },
    {
        id: "5",
        title: "Holi Party",
        body: "Rango ka tyohaar rang bikherta hai aur sabhi rangeen dikhte hain",
        reactions: 15,
        comments: 8,
        shares: 4,
        userId: "user-16",
        imgSrc: "https://c.files.bbci.co.uk/2E51/production/_128875811_holiepa.jpg",
        tags: ["holi", "colors", "party"],
    },
];

export default PostListProvider;
