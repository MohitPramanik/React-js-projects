import { useState } from "react";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/context";

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <counterContext.Provider value={count}>
                <center>
                    <Navbar></Navbar>
                    <button className="btn" onClick={handleClick}>
                        {count}
                    </button>
                </center>
            </counterContext.Provider>
        </>
    );
}

export default App;
