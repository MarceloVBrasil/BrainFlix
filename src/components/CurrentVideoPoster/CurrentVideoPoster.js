import React from "react";
import "./CurrentVideoPoster.scss";

export default function CurrentVideoPoster({ video }) {
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
