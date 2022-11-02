import React from "react";
import "./CurrentVideoDescription.scss";

export default function CurrentVideoDescription({ video }) {
  return <p className="current-video__description">{video.description}</p>;
}
