import React from "react";
import styles from "../Styles/sizeSelector.module.css";

function SizeSelector(props) {
    return (
        <div
            onClick={() => {
                props.setSizeFunction(props.size);
            }}
            className={`${props.size === props.selectedSize ? styles.selected : ""} ${
                styles.button
            }`}
        >
            {props.size}
        </div>
    );
}

export default SizeSelector;
