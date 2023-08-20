import React from "react";
import styles from "./Styles/navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLeft}>
                <Link to="" className={styles.linkIcon}>
                    FLIPKART FASHION
                </Link>
            </div>
            <div className={styles.navbarRight}>
                <div className={styles.links}>
                    <Link to="outfit-generator" className={styles.link}>
                        Get an outfit
                    </Link>
                    <Link to="fashion-trends" className={styles.link}>
                        Trends
                    </Link>
                    <Link to="favorites" className={styles.link}>
                        Favorites
                    </Link>
                    <Link to="about" className={styles.link}>
                        About
                    </Link>
                </div>
                <div>
                    <Link to="cart" className={styles.linkIcon}>
                        <ShoppingCartOutlinedIcon />
                    </Link>
                    <Link to="purchase-history" className={styles.linkIcon}>
                        <AssignmentOutlinedIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
