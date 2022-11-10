import CurrentVideoPoster from "../../components/CurrentVideoPoster/CurrentVideoPoster";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./HomePage.scss";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export let apiKeyPromise;

export default function HomePage() {
  document.title = "BrainFlix | Home";

  const [videos, setVideos] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    apiKeyPromise = register();
    getAllVideos();
  }, []);

  useEffect(() => {
    getVideoDetails(id);
  }, [id]);

  if (!videoDetails) return;
  const nextVideos = videos.filter((video) => video.id !== videoDetails.id);

  return (
    <>
      <CurrentVideoPoster video={videoDetails} />
      <div className="flexbox--desktop-row">
        <CurrentVideoDetails video={videoDetails} />
        <NextVideos nextVideos={nextVideos} />
      </div>
    </>
  );

  async function register() {
    const response = await axios.get(
      "https://project-2-api.herokuapp.com/register"
    );
    return response.data;
  }

  async function getAllVideos() {
    try {
      const apiKey = await apiKeyPromise;
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos?api_key=${apiKey.api_key}`
      );
      setVideos(response.data);
      if (!id) getVideoDetails(response.data[0].id);
    } catch (error) {
      console.log(error);
    }
  }

  async function getVideoDetails(id) {
    if (!id) return;

    try {
      const apiKey = await apiKeyPromise;
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey.api_key}`
      );
      setVideoDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }
}
