import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const Navigation = (props, context) => (
    <div className="navigation">
        <div className="inner">
            <div className="column">
                <Link to="/">
                    <img
                        // src={require("images/logo.png")}
                        className={"logo"}
                        alt={context.t("Logo")}
                    />
                </Link>
            </div>
            <div className="column">
                <input
                    type="text"
                    placeholder={context.t("Search")}
                    className={"searchInput"}
                />
            </div>
            <div className="column">
                <div className="nav-icon">
                    <Link to="/blink">
                        <Ionicon icon="ios-clipboard-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className="nav-icon">
                    <Link to="/records">
                        <Ionicon icon="ios-mic-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className="nav-icon">
                    <Link to="/explore">
                        <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className="nav-icon">
                    <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                </div>
                <div className="nav-icon">
                    <Link to="/profile">
                        <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
