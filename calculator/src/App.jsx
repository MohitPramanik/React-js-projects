import { useState } from "react";
import ButtonArea from "./components/ButtonArea";
import Screen from "./components/Screen";

function App() {
    const btnValue = [
        ["C", "❌", "%", "/"],
        [7, 8, 9, "*"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        ["00", 0, ".", "="],
    ];

    let symbols = ["%", "/", "*", "+", "-"];

    const [screenText, setScreenText] = useState("");

    function handleClick(event) {
        let clickedElement = event.target.value;
        if (clickedElement === "C") {
            setScreenText("");
        } else if (clickedElement === "❌") {
            let element = screenText.slice(0, -1);
            setScreenText(element);
        } else if (clickedElement === "=") {
            let result = eval(screenText);
            setScreenText(result);
        }else {
            let element = screenText + event.target.value;
            setScreenText(element);
            console.log(screenText);
        }
    }

    return (
        <>
            <div
                id="calculator"
                className="w-75 m-auto border border-black p-3 rounded"
            >
                <Screen screenText={screenText}></Screen>
                <ButtonArea btnValue={btnValue} handleClick={handleClick} />
            </div>
        </>
    );
}

export default App;
