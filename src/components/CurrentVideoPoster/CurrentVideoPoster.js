import React from "react";
import "./CurrentVideoPoster.scss";
import videos from "../../data/videos.json";

export default function CurrentVideoPoster({ videoId }) {
  const video = videos.find((video) => video.id === videoId);
  return (
    <div className="current-video-background">
      <video
        poster={video.image}
        controls
        className="current-video-background__poster"
      />
    </div>
  );
}
