import React from "react";
import { getFormattedDate } from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import "./CurrentVideoComments.scss";
import { apiKeyPromise } from "../../pages/Home/HomePage";
import axios from "axios";

export default function CurrentVideoComments({
  comment,
  videoId,
  setComments,
}) {
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

  async function deleteComment(videoId, commentId) {
    try {
      const apiKey = await apiKeyPromise;
      await axios.delete(
        `https://project-2-api.herokuapp.com/videos/${videoId}/comments/${commentId}?api_key=${apiKey.api_key}`
      );
    } catch (error) {
      console.log(error);
    }
  }
}
