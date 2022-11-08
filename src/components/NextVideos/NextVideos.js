import React from "react";
import { Link } from "react-router-dom";

import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

export default function NextVideos({ nextVideos }) {
  return (
    <div className="next-videos">
      <h1 className="next-videos__title">next videos</h1>
      {nextVideos.map((video) => {
        return (
          <Link
            to={`/${video.id}`}
            className="next-videos__link"
            key={video.id}
          >
            <NextVideo video={video} />
          </Link>
        );
      })}
    </div>
  );
}
