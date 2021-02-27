import React from "react";
import style from "./Post.module.css";

const Post = () => {
    return (
        <div className={style.post}>
            <img src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"/>
            <span className={style.text}>Post text</span>
            <div>
                <span>LIKE</span>
            </div>
        </div>
    )
}

export default Post;