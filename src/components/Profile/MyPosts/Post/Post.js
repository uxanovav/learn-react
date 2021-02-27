import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png"/>
            <span className={style.text}>{props.message}</span>
            <div className={style.like}>
                <img src="https://img.icons8.com/pastel-glyph/2x/facebook-like.png"/><span>{props.likecount}</span>
            </div>
        </div>
    )
}

export default Post;