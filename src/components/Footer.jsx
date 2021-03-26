import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className ={styles.footer}>
            <h1 className ={styles.footerTitle}> Footer</h1>
            <p className ={styles.footerText}> Devine 2020-2021</p>
            <p className ={styles.footerText}> Development 4 - Crazy Calculator</p>
            <p className ={styles.footerText}> Sara Bluekens</p>
        </footer>
    );
};

export default Footer;
