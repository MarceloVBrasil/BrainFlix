import React from "react";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/publish.svg";
import Button from "../../components/Button/Button";
import "./UploadPage.scss";
import { Link } from "react-router-dom";

export default function UploadForm() {
  return (
    <div className="upload">
      <h1 className="upload-form__title">Upload Video</h1>
      <div className="upload-form">
        <div className="upload-form-inner-container upload-form-image-container">
          <label htmlFor="video thumbnail" className="upload-form__label">
            video thumbnail
          </label>
          <img
            src={thumbnail}
            alt="video thumbnail"
            className="upload-form__image"
          />
        </div>
        <div className="upload-form-inputs">
          <div className="upload-form-inner-container">
            <label htmlFor="title" className="upload-form__label">
              title your video
            </label>
            <input
              type="text"
              placeholder="Add title to your video"
              className="upload-form__input"
            />
          </div>
          <div className="upload-form-inner-container">
            <label htmlFor="description" className="upload-form__label">
              add a video description
            </label>
            <textarea
              type="text"
              placeholder="Add a description to your video"
              className="upload-form__textarea"
            />
          </div>
        </div>
      </div>
      <div className="upload-form-buttons">
        <Link to="/" className="upload-form-buttons__publish-link">
          <Button src={publish} alt="publish button" text="publish" />
        </Link>
        <p className="upload-form-buttons__cancel">cancel</p>
      </div>
    </div>
  );
}
