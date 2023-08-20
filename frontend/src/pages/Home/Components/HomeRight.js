import React from "react";
import img from "../images/landingImage.png";
import styles from "../Styles/homeRight.module.css";

function HomeRight() {
    return (
        <div className={styles.imageContainer}>
            <img src={img} alt="Outfits" />
        </div>
    );
}

export default HomeRight;
