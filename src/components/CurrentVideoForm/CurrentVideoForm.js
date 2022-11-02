import React from "react";
import "./CurrentVideoForm.scss";
import addComment from "../../assets/images/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

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
              className="current-video-comments-form-inner-container__text-box current-video-comments-form-inner-container__text-box"
            />
          </div>
        </div>
        <button className="current-video-comments-form__button">
          <img
            src={addComment}
            alt="comment"
            className="current-video-comments-form__icon"
          />
          comment
        </button>
      </form>
    </div>
  );
}
