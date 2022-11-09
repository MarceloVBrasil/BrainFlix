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
            {getFormattedDate(video.timestamp)}
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
  const oneSecondInMilliSeconds = 1000;
  const secondsPassed = Math.floor(
    Math.abs((Date.now() - date) / oneSecondInMilliSeconds)
  );
  const oneMinuteInSeconds = 60;
  const minutesPassed = Math.floor(secondsPassed / oneMinuteInSeconds);
  const oneHourInMinutes = 60;
  const hoursPassed = Math.floor(minutesPassed / oneHourInMinutes);
  const oneDayInHours = 24;
  const daysPassed = Math.floor(hoursPassed / oneDayInHours);
  const oneMonthInDays = 30;
  const monthsPassed = Math.floor(daysPassed / oneMonthInDays);
  const oneYearInMonths = 12;
  const yearsPassed = Math.floor(monthsPassed / oneYearInMonths);

  if (secondsPassed === 0) return "just posted";
  if (secondsPassed < oneMinuteInSeconds)
    return secondsPassed === 1
      ? `1 second ago`
      : `${secondsPassed} seconds ago`;
  if (minutesPassed < oneHourInMinutes)
    return minutesPassed === 1
      ? `1 minutes ago`
      : `${minutesPassed} minutes ago`;
  if (hoursPassed < oneDayInHours)
    return minutesPassed === 1 ? `1 hour ago` : `${hoursPassed} hours ago`;
  if (daysPassed < oneMonthInDays)
    return daysPassed === 1 ? `1 day ago` : `${daysPassed} days ago`;
  if (monthsPassed < oneYearInMonths)
    return daysPassed === 1 ? `1 month ago` : `${monthsPassed} months ago`;
  return yearsPassed === 1 ? "1 year ago" : `${yearsPassed} years ago`;
}
