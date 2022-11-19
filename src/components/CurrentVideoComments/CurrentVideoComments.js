import React, { useState } from "react";
import { getFormattedDate } from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import "./CurrentVideoComments.scss";
import { apiKeyPromise, axiosInstance } from "../../pages/Home/HomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export default function CurrentVideoComments({
  comment,
  videoId,
  setComments,
}) {
  const [likes, setLikes] = useState(comment.likes);
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
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={
          likes > comment.likes
            ? "current-video-comment__like-button current-video-comment__like-button--liked"
            : "current-video-comment__like-button"
        }
        onClick={() => likeComment(videoId, comment.id)}
      />
      <p className="current-video-comment__likes">{likes}</p>
    </article>
  );

  async function handleDeleteComment(commentId) {
    await deleteComment(videoId, commentId);
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  }

  async function deleteComment(videoId, commentId) {
    try {
      const apiKey = await apiKeyPromise;
      await axiosInstance.delete(
        `/videos/${videoId}/comments/${commentId}?api_key=${apiKey.api_key}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function likeComment(videoId, commentId) {
    try {
      const apiKey = await apiKeyPromise;
      const res = await axiosInstance.put(
        `/videos/${videoId}/comments/${commentId}?api_key=${apiKey.api_key}`,
        { initialNumberOfLikes: comment.likes }
      );
      setLikes(res.data.likes);
    } catch (error) {
      console.log(error);
    }
  }
}
