import { useState } from "react";
import styles from "./FoodInput.module.css";

function FoodInput({handleOnKeyDown}) {

    return (
        <>
            <div className="w-full d-flex justify-content-center">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter food item name"
                    className={styles.foodInput}
                    onKeyDown={handleOnKeyDown}
                />
            </div>
        </>
    );
}

export default FoodInput;
