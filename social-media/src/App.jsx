import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    function changeTab(tabName) {
        setSelectedTab(tabName);
    }

    return (
        <PostListProvider>
            <div className="d-flex w-full h-100">
                <Sidebar
                    selectedTab={selectedTab}
                    changeTab={changeTab}
                ></Sidebar>
                <div className="d-flex flex-column scrolling-part">
                    <Header></Header>
                    {selectedTab === "Home" ? (
                        <PostList></PostList>
                    ) : (
                        <CreatePost></CreatePost>
                    )}

                    <Footer></Footer>
                </div>
            </div>
        </PostListProvider>
    );
}

export default App;
