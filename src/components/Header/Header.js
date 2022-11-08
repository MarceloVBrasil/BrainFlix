import React from "react";
import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

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
        <Link to="/upload" className="header__link">
          <Button src={upload} alt="upload" text="upload" />
        </Link>

        <img src={avatar} alt="avatar" className="header-container__avatar" />
      </div>
    </header>
  );
}
