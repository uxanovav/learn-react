import React from "react";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img src="http://pngimg.com/uploads/letter_o/letter_o_PNG43.png" alt="logo"/>
            <h1>TRAINING SOCIAL-NETWORK</h1>
            </header>
    )
}

export default Header;