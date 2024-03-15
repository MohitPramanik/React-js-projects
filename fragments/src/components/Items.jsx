import React from "react";
import styles from "./Items.module.css";

function Items({ foodItem, bought, handleBuyButton }) {
    return (
        <>
            <li
                className={`${styles["list-item"]} list-group-item ${
                    bought && 'active'
                }`}
                key={foodItem}
            >
                {foodItem}
                <button className={styles.button} onClick={handleBuyButton}>
                    {bought ? 'Cancel' : 'Buy'}
                </button>
            </li>
        </>
    );
}

export default Items;
