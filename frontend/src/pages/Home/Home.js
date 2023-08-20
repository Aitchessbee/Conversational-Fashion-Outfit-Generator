import React from "react";
import styles from "./Styles/home.module.css";
import Navbar from "../Navbar/Navbar";
import { Divider } from "@mui/material";
import HomeLeft from "./Components/HomeLeft";
import HomeRight from "./Components/HomeRight";

function Home() {
    return (
        <div className={styles.homeContainer}>
            {/* <Navbar /> */}
            <Divider color="#000" />
            <div className={styles.home}>
                <div className={styles.homeLeft}>
                    <HomeLeft />
                </div>
                <div className={styles.homeRight}>
                    <HomeRight />
                </div>
            </div>
        </div>
    );
}

export default Home;
