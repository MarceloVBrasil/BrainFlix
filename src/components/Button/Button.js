import React from "react";
import "./Button.scss";

export default function Button({ src, alt, text }) {
  return (
    <button className="button">
      <img src={src} alt={alt} className="button__image" />
      {text}
    </button>
  );
}
