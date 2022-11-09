import React from "react";
import "./CurrentVideoForm.scss";
import addComment from "../../assets/images/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import BrainFlixAPI from "../BrainFlixAPI/BrainFlixAPI";

export default function CurrentVideoForm({ comments, videoId, setComments }) {
  const { postComment } = BrainFlixAPI();
  return (
    <div className="current-video-comments">
      <p className="current-video-comments__title">
        {comments.length > 1
          ? `${comments.length} comments`
          : `${comments.length} comment`}
      </p>

      <form
        className="current-video-comments-form"
        onSubmit={(e) => handlePostComment(videoId, e)}
      >
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
              name="comment"
              className="current-video-comments-form-inner-container__text-box"
              rows={6}
              placeholder="Add a new comment"
            />
          </div>
        </div>
        <Button src={addComment} alt="add comment" text="comment" />
      </form>
    </div>
  );

  async function handlePostComment(id, e) {
    e.preventDefault();
    const formData = {};
    formData.name = "Marcelo Brasil";
    formData.comment = e.target.comment.value;
    if (!formData.name || !formData.comment) return;
    const newComment = await postComment(id, formData);
    setComments((prev) => [newComment, ...prev]);
  }
}
