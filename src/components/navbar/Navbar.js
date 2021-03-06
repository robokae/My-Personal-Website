import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "../themeToggler/ThemeToggler";
import SlideOutMenu from "../slideOutMenu/SlideOutMenu";
import "./Navbar.scss";

function Navbar(props) {
    const { toggleTheme } = props;

    const [displaySlideOutMenu, setDisplaySlideOutMenu] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar-container__content">
                <NavLink to="/" className="navbar-container__logo">
                    Alexander Hom
                </NavLink>
                <div className="navbar-container__links">
                    {/* <NavLink 
                        to="/#about"
                        className="navbar-container__link"
                    >
                        About
                    </NavLink> */}
                    {/* <NavLink 
                        to="/blog" 
                        className="navbar-container__link"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/portfolio" 
                        className="navbar-container__link"
                    >
                        Portfolio
                    </NavLink> */}
                    {/* <NavLink
                        to="/resume"
                        className="navbar-container__link"
                    >
                        Resume
                    </NavLink> */}
                    <NavLink
                        to="/#contact"
                        className="navbar-container__link"
                        // onClick={() => setDisplaySlideOutMenu(false)}
                    >
                        Contact
                    </NavLink>
                </div>
                <div className="navbar-container__theme-toggler-container">
                    <ThemeToggler className="navbar-container__theme-toggler" toggleTheme={toggleTheme} />
                </div> 
                <FontAwesomeIcon 
                    className="navbar-container__hamburger-menu-icon" 
                    icon={faBars} 
                    onClick={() => setDisplaySlideOutMenu(true)} 
                /> 
            </div>
            <SlideOutMenu display={displaySlideOutMenu} setDisplay={setDisplaySlideOutMenu} toggleTheme={toggleTheme} />
        </div>
    );
}   

export default Navbar;