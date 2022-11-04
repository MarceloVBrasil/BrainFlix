import React from "react";
import { getFormattedDate } from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import "./CurrentVideoComments.scss";

export default function CurrentVideoComments({ comment }) {
  return (
    <article className="current-video-comment">
      <div className="current-video-comment-header">
        <div className="current-video-comment-header__user-pic"></div>
        <p className="current-video-comment-header__name">{comment.name}</p>
        <p className="current-video-comment-header__date">
          {getFormattedDate(comment.timestamp)}
        </p>
      </div>
      <p className="current-video-comment__message">{comment.comment}</p>
    </article>
  );
}
