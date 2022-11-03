import React from "react";
import allVideos from "../../data/videos.json";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

export default function NextVideos({ videoId, setVideoId }) {
  const videos = allVideos.filter((video) => video.id !== videoId);
  return (
    <div className="next-videos">
      <h1 className="next-videos__title">next videos</h1>
      {videos.map((video) => {
        return (
          <NextVideo video={video} key={video.id} setVideoId={setVideoId} />
        );
      })}
    </div>
  );
}
