import React, { useState } from "react";
import Items from "./Items";

function FoodItems({ foodItems }) {
    let [activeItems, setActiveItems] = useState([]);

    const handleOnBuyButton = (item, event) => {
      if(!activeItems.includes(item)) {
        let newActiveItems = [...activeItems, item];
        setActiveItems(newActiveItems);
      }
      console.log(activeItems)
    };

    return (
        <>
            <ul className="list-group ">
                {foodItems.map((item, event) => (
                    <Items
                        key={item}
                        foodItem={item}
                        bought={activeItems.includes(item)}
                        handleBuyButton={(event) =>
                            handleOnBuyButton(item, event)
                        }
                    ></Items>
                ))}
            </ul>
        </>
    );
}

export default FoodItems;
