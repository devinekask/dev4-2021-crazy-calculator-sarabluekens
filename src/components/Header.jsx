import React from "react";
import PropTypes from "prop-types";


const Header = ({subtitle}) => {
    return (
        <header className = "header">
            <h1 className="header__title"> To The GRAAAAAVE</h1>
            <p className="header__title--Sub"> {subtitle}</p>
        </header>
    );
};
Header.propTypes = {
    subtitle : PropTypes.string
}
export default Header;
