import React from "react";
import "./CurrentVideoPoster.scss";
import videos from "../../data/video-details.json";

export default function CurrentVideoPoster({ videoId }) {
  const video = videos.find((video) => video.id === videoId);
  return (
    <video poster={video.image} controls className="current-video__poster" />
  );
}
