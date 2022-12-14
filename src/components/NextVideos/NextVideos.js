import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiKeyPromise, axiosInstance } from "../../pages/Home/HomePage";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

export default function NextVideos({ missingVideoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos(missingVideoId);
  }, [missingVideoId]);

  return (
    <nav className="next-videos">
      <h2 className="next-videos__title">next videos</h2>
      {videos
        .filter((video) => video.id !== missingVideoId)
        .map((video) => {
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
    </nav>
  );

  async function getAllVideos() {
    try {
      const apiKey = await apiKeyPromise;
      const response = await axiosInstance.get(
        `/videos?api_key=${apiKey.api_key}`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
