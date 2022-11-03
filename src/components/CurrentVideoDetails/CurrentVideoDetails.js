import React from "react";
import videos from "../../data/video-details.json";
import "./CurrentVideoDetails.scss";

import CurrentVideoLikesViews from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import CurrentVideoDescription from "../CurrentVideoDescription/CurrentVideoDescription";
import CurrentVideoForm from "../CurrentVideoForm/CurrentVideoForm";
import CurrentVideoComments from "../CurrentVideoComments/CurrentVideoComments";

export default function CurrentVideoDetails({ videoId }) {
  const video = videos.find((video) => video.id === videoId);
  return (
    <div className="current-video">
      <video poster={video.image} controls className="current-video__video" />
      <h1 className="current-video__title">{video.title}</h1>
      <CurrentVideoLikesViews video={video} />
      <CurrentVideoDescription video={video} />
      <CurrentVideoForm comments={video.comments} />
      {video.comments.map((comment) => (
        <CurrentVideoComments key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
