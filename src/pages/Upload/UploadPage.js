import React, { useState } from "react";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/publish.svg";
import Button from "../../components/Button/Button";
import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../Home/HomePage";

export default function UploadPage() {
  const [errorForm, setErrorForm] = useState(false);
  const [errorFileFormat, setErrorFileFormat] = useState(false);
  const [userThumbnail, setUserThumbnail] = useState();
  const navigate = useNavigate();

  return (
    <form className="upload" onSubmit={(e) => handleFormSubmit(e)}>
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
          <input
            type="file"
            className="upload-form__image-upload"
            name="thumbnail"
            onChange={(e) => handleFile(e.target.files[0])}
          />
          {errorFileFormat && (
            <p className="upload-form__error-message-file-format">
              only jpg, jpeg and png
            </p>
          )}
        </div>
        <div className="upload-form-inputs">
          <div className="upload-form-inner-container">
            <label htmlFor="title" className="upload-form__label">
              title your video
            </label>
            <input
              type="text"
              placeholder="Add title to your video"
              className={
                errorForm
                  ? "upload-form__input upload-form__input--error"
                  : "upload-form__input"
              }
              name="title"
            />
          </div>
          <div className="upload-form-inner-container">
            <label htmlFor="description" className="upload-form__label">
              add a video description
            </label>
            <textarea
              type="text"
              placeholder="Add a description to your video"
              className={
                errorForm
                  ? "upload-form__textarea upload-form__textarea--error"
                  : "upload-form__textarea"
              }
              name="description"
            />
          </div>
        </div>
      </div>
      <div className="upload-form-buttons">
        <Button
          src={publish}
          alt="publish button"
          text="publish"
          disable={errorFileFormat}
        />
        <p className="upload-form-buttons__cancel">cancel</p>
      </div>
    </form>
  );

  async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = {};
    formData.title = e.target.title.value;
    formData.description = e.target.description.value;
    if (userThumbnail) formData.thumbnail = userThumbnail;

    if (!formData.title || !formData.description) {
      setErrorForm(true);
      setTimeout(() => setErrorForm(false), 300);
      return;
    }
    try {
      const res = await axiosInstance.post(
        `/videos`,
        { ...formData },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  function handleFile(file) {
    setUserThumbnail(file);
    setErrorFileFormat(!isFileFormatValid(file.name));
  }

  function getFileExtension(filename) {
    if (!filename) return "";
    return filename.substring(filename.lastIndexOf(".") + 1);
  }

  function isFileFormatValid(file) {
    const acceptedFileFormat = ["jpg", "jpeg", "png"];
    return acceptedFileFormat.includes(getFileExtension(file));
  }
}
