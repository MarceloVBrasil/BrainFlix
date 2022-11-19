import React from "react";
import "./Button.scss";

export default function Button({ src, alt, text, disable }) {
  return (
    <button className="button" disabled={disable}>
      <img src={src} alt={alt} className="button__image" />
      {text}
    </button>
  );
}
