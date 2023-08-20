import React from "react";
import styles from "../Styles/occassionSelector.module.css";

function OccassionSelector(props) {
    return (
        <div
            onClick={() => {
                props.setOccassionFunction(props.occassion);
            }}
            className={`${props.occassion === props.selectedOccassion ? styles.selected : ""} ${
                styles.button
            }`}
        >
            <div className={styles.icon}>{props.icon}</div>
            <div>{props.occassion}</div>
        </div>
    );
}

export default OccassionSelector;
