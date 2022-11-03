import React from "react";
import "./NextVideo.scss";

export default function NextVideo({ video, setVideoId }) {
  return (
    <div className="next-video" onClick={() => setVideoId(video.id)}>
      <img src={video.image} className="next-video__image" />
      <div className="next-video-info">
        <p className="next-video-info__title">{video.title}</p>
        <p className="next-video-info__channel">{video.channel}</p>
      </div>
    </div>
  );
}
