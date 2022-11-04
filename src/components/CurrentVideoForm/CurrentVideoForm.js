import React from "react";
import "./CurrentVideoForm.scss";
import addComment from "../../assets/images/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";

export default function CurrentVideoForm({ comments }) {
  return (
    <div className="current-video-comments">
      <p className="current-video-comments__title">
        {comments.length > 1
          ? `${comments.length} comments`
          : `${comments.length} comment`}
      </p>

      <form className="current-video-comments-form">
        <div className="current-video-comments-form-inner-container">
          <label
            htmlFor="comment-box"
            className="current-video-comments-form-inner-container__label"
          >
            join conversation
          </label>
          <div className="current-video-comments-form-inner-container current-video-comments-inner-container--row">
            <img
              src={avatar}
              alt="avatar"
              className="current-video-comments-form-inner-container__avatar"
            />
            <textarea
              name="comment-box"
              className="current-video-comments-form-inner-container__text-box--mobile"
              rows={6}
              placeholder="Add a new comment"
            />
            <input
              type="text"
              placeholder="Add a new comment"
              className="current-video-comments-form-inner-container__text-box"
            />
          </div>
        </div>
        <Button src={addComment} alt="add comment" text="comment" />
      </form>
    </div>
  );
}
