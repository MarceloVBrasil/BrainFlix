import React from "react";
import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />

      <div className="header-container">
        <input
          type="text"
          placeholder="Search"
          className="header-container__input"
        />
        <img
          src={avatar}
          alt="avatar"
          className="header-container__avatar header-container__avatar--mobile"
        />
        <Button src={upload} alt="upload" text="upload" />

        <img src={avatar} alt="avatar" className="header-container__avatar" />
      </div>
    </header>
  );
}
