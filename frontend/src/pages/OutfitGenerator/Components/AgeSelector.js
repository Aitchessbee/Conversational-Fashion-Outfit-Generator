import React from "react";
import styles from "../Styles/ageSelector.module.css";

function AgeSelector(props) {
    return (
        <div
            onClick={() => {
                props.setAgeFunction(props.ageGroup);
            }}
            className={`${props.ageGroup === props.selectedAge ? styles.selected : ""} ${
                styles.button
            }`}
        >
            {props.ageGroup}
        </div>
    );
}

export default AgeSelector;
