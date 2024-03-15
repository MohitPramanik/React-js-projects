import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import EmptyMessage from "./components/EmptyMessage";
import FoodInput from "./components/FoodInput";
import './App.css'

function App() {
    let [foodItems, setFoodItems] = useState([]);
    // let foodItems = [];



    const handleOnchange = () => {
        console.log(event);
        // setTextState(event.target.value);
    };

    const handleOnKeyDown = () => {

        if (event.key == "Enter" && event.target.value != '') {
            let newFoodItem = event.target.value;
            newFoodItem = newFoodItem[0].toUpperCase() + newFoodItem.slice(1).toLowerCase();
            if(!foodItems.includes(newFoodItem)) {
                let newItems = [...foodItems];
                newItems.push(newFoodItem)
                setFoodItems(newItems)
            }
            event.target.value = "";
            console.log(foodItems);
        }
    };

    return (
        <>
            <h1 className="text-center p-4 bg-danger text-white m-0">
                Healthy Food
            </h1>
            <FoodInput handleOnKeyDown={handleOnKeyDown} />
            <EmptyMessage foodItems={foodItems}></EmptyMessage>
            <FoodItems foodItems={foodItems}></FoodItems>
        </>
    );
}

export default App;
