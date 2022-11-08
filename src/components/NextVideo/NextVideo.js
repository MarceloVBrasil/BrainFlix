import React, { useEffect, useState } from "react";
import "./NextVideo.scss";

export default function NextVideo({ video }) {
  const tabletWidth = 768;
  const [mobileMode, setMobileMode] = useState(isInMobileMode());
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [mobileMode]);

  return (
    <div className="next-video">
      <img src={video.image} alt={video.title} className="next-video__image" />
      <div className="next-video-info">
        <p className="next-video-info__title">
          {mobileMode ? limitTextLength(video.title) : video.title}
        </p>
        <p className="next-video-info__channel">{video.channel}</p>
      </div>
    </div>
  );

  function limitTextLength(text) {
    const limitOfCharacters = 40;
    if (text.length <= limitOfCharacters) return text;
    let startIndex = 0;
    let lastSpaceIndex;
    while (startIndex !== -1) {
      lastSpaceIndex = startIndex;
      startIndex = text.indexOf(" ", startIndex + 1);
    }
    return text.slice(0, lastSpaceIndex) + "...";
  }

  function handleWindowResize() {
    if (window.innerWidth < tabletWidth) setMobileMode(true);
    else setMobileMode(false);
  }

  function isInMobileMode() {
    return window.innerWidth < tabletWidth;
  }
}
