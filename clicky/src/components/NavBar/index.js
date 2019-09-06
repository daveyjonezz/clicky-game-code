import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar sticky-top navbar-expand">
            <ul className="navbar-nav">
                <li className="nav-item">

                    <h1>Clicky Game</h1><span className="sr-only nav-link clicky-title">(current)</span>

                </li>
                <li className="nav-item">
                    <h4 className={`nav-link ${props.colorStyle}`} >{props.mid}</h4>
                </li>
                <li className="nav-item">
                    <h4 className="nav-link">Score: {props.score} | Top Score: {props.highscore}</h4>
                </li>
            </ul>
            {props.children}
        </nav>
    )
}
export default NavBar;