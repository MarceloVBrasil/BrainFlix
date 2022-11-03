import React from "react";

import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

export default function NextVideos({ nextVideos, handleNextVideos }) {
  return (
    <div className="next-videos">
      <h1 className="next-videos__title">next videos</h1>
      {nextVideos.map((video) => {
        return (
          <NextVideo
            video={video}
            key={video.id}
            handleNextVideos={handleNextVideos}
          />
        );
      })}
    </div>
  );
}
