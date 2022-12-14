import NextVideos from "../../components/NextVideos/NextVideos";
import "./HomePage.scss";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export let apiKeyPromise;
export let axiosInstance = axios.create({
  baseURL: "https://marcelobrasil-brainflix.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});

export default function HomePage() {
  document.title = "BrainFlix | Home";
  const [videoId, setVideoId] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiKeyPromise = register();
    if (!id) getDefaultVideoId();
  }, []);

  useEffect(() => {
    setVideoId(id);
  }, [id]);

  if (!apiKeyPromise) return;
  if (!videoId) getDefaultVideoId();

  return (
    <>
      <div className="flexbox--desktop-row">
        <VideoPlayer videoId={videoId} />
        <NextVideos missingVideoId={videoId} />
      </div>
    </>
  );

  async function register() {
    const response = await axiosInstance.get("/register");
    return response.data;
  }

  async function getDefaultVideoId() {
    try {
      const apiKey = await apiKeyPromise;
      const response = await axiosInstance.get(
        `/videos?api_key=${apiKey.api_key}`
      );
      setVideoId(response.data[0].id);
    } catch (error) {
      console.log(error);
    }
  }
}
