import React from "react";
import "./CurrentVideoLikesViews.scss";
import views from "../../assets/images/views.svg";
import likes from "../../assets/images/likes.svg";

export default function CurrentVideoLikesViews({ video }) {
  return (
    <>
      <div className="current-video-details">
        <div className="current-video-details-block">
          <p className="current-video-details-block__channel">{`By ${video.channel}`}</p>
          <p className="current-video-details-block__info">
            {getFormattedDate(new Date(video.timestamp))}
          </p>
        </div>
        <div className="current-video-details-block">
          <p className="current-video-details-block__info">
            <img
              src={views}
              alt="views"
              className="current-video-details-block__icon"
            />
            {video.views}
          </p>
          <p className="current-video-details-block__info">
            <img
              src={likes}
              alt="views"
              className="current-video-details-block__icon"
            />
            {video.likes}
          </p>
        </div>
      </div>
    </>
  );
}
export function getFormattedDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // 0 index based
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
