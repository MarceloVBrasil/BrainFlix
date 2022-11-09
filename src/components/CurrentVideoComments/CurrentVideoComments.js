import React from "react";
import BrainFlixAPI from "../BrainFlixAPI/BrainFlixAPI";
import { getFormattedDate } from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import "./CurrentVideoComments.scss";

export default function CurrentVideoComments({
  comment,
  videoId,
  setComments,
}) {
  const { deleteComment } = BrainFlixAPI();
  return (
    <article className="current-video-comment">
      <div className="current-video-comment-header">
        <p
          className="current-video-comment-header__delete-button"
          onClick={() => handleDeleteComment(comment.id)}
        >
          &times;
        </p>
        <div className="current-video-comment-header__user-pic"></div>
        <p className="current-video-comment-header__name">{comment.name}</p>
        <p className="current-video-comment-header__date">
          {getFormattedDate(comment.timestamp)}
        </p>
      </div>
      <p className="current-video-comment__message">{comment.comment}</p>
    </article>
  );

  async function handleDeleteComment(commentId) {
    await deleteComment(videoId, commentId);
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  }
}
