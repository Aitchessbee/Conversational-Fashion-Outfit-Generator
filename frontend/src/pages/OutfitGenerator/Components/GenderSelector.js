import React from "react";
import styles from "../Styles/genderSelector.module.css";

function GenderSelector(props) {
    return (
        <div
            onClick={() => {
                props.setGenderFunction(props.gender);
            }}
            className={`${props.gender === props.selectedGender ? styles.selected : ""} ${
                styles.button
            }`}
        >
            <div className={styles.icon}>{props.icon}</div>
            <div>{props.gender}</div>
        </div>
    );
}

export default GenderSelector;
