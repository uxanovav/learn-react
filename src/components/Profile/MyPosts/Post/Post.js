import React from "react";
import style from "./Post.module.css";

const Post = ({ message, likecount, addLike, id, deletePost, isLiked }) => {
  return (
    <div className={style.post}>
      <img src="http://losst.ru/wp-content/uploads/2016/08/LogoLosst.png" />
      <span className={style.text}>{message}</span>
      <div className={style.like}>
        <img
          src="https://img.icons8.com/pastel-glyph/2x/facebook-like.png"
          onClick={() => addLike(id)}
        />
        <span className={isLiked ? style.liked : style.unliked}>
          {likecount}
        </span>
        <div className={style.del}>
          <span onClick={() => deletePost(id)}>delete</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
