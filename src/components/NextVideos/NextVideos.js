import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiKeyPromise } from "../../pages/Home/HomePage";
import NextVideo from "../NextVideo/NextVideo";
import "./NextVideos.scss";

export default function NextVideos({ missingVideoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos(missingVideoId);
  }, [missingVideoId]);

  return (
    <div className="next-videos">
      <h2 className="next-videos__title">next videos</h2>
      {videos.map((video) => {
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

  async function getAllVideos() {
    try {
      const apiKey = await apiKeyPromise;
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos?api_key=${apiKey.api_key}`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
