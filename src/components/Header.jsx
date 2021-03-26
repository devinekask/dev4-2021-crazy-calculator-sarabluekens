import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";


const Header = ({subtitle}) => {
    return (
        <header className = {styles.header}>
            <h1 className = {styles.headerTitle}> To The GRAAAAAVE</h1>
            <p className = {styles.headerSubtitle}> {subtitle}</p>
        </header>
    );
};
Header.propTypes = {
    subtitle : PropTypes.string
}
export default Header;
