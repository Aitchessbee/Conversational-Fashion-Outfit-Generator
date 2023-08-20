import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../Styles/homeLeft.module.css";

function HomeLeft() {
    return (
        <div>
            <div className={styles.typewriterContainer}>
                <Typewriter
                    options={{
                        cursor: "",
                        strings: [
                            "Get a <br /> personalized <br /> outfit.",
                            "With our  <br /> advanced AI <br /> algorithm.",
                        ],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: styles.typewriter,
                    }}
                />
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.customizeButton}>Customize Outfit</button>
                <div className={styles.buttonText}>
                    Our advanced AI algorithm will get you complete personalized outfits suited to
                    your needs, keeping in mind your likes and dislikes.
                </div>
            </div>
        </div>
    );
}

export default HomeLeft;
