import CurrentVideoPoster from "../CurrentVideoPoster/CurrentVideoPoster";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import "./VideoPlayer.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiKeyPromise } from "../../pages/Home/HomePage";

export default function VideoPlayer({ videoId }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoDetails(videoId);
  }, [videoId]);

  if (!video) return;

  return (
    <>
      <CurrentVideoPoster video={video} />
      <CurrentVideoDetails video={video} />
    </>
  );

  async function getVideoDetails(id) {
    if (!id) return;

    try {
      const apiKey = await apiKeyPromise;
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey.api_key}`
      );
      setVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
