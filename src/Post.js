import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareIcon from "@material-ui/icons/Share";
import firebase from "firebase";

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__comment">
        <div className="post__comment__buttons">
          <h3>
            <ThumbUpAltOutlinedIcon /> Like
          </h3>
        </div>
        <div className="post__comment__buttons">
          <h3>
            <ChatBubbleOutlineOutlinedIcon /> Comment
          </h3>
        </div>
        <div className="post__comment__buttons">
          <h3>
            <ShareIcon /> Share
          </h3>
        </div>
      </div>
      <div className="post__comment__input">
        <Avatar src={profilePic} />
        <input type="text" placeholder="Add a comment" />
      </div>
    </div>
  );
};

export default Post;
