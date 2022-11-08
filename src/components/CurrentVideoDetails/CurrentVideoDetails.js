import React from "react";
import "./CurrentVideoDetails.scss";

import CurrentVideoLikesViews from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import CurrentVideoDescription from "../CurrentVideoDescription/CurrentVideoDescription";
import CurrentVideoForm from "../CurrentVideoForm/CurrentVideoForm";
import CurrentVideoComments from "../CurrentVideoComments/CurrentVideoComments";

export default function CurrentVideoDetails({ video }) {
  return (
    <div className="current-video">
      <div className="current-video-inner-container">
        <h1 className="current-video-inner-container__title">{video.title}</h1>
      </div>
      <CurrentVideoLikesViews video={video} />
      <CurrentVideoDescription video={video} />
      <CurrentVideoForm comments={video.comments} />
      {video.comments.map((comment) => (
        <CurrentVideoComments key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
