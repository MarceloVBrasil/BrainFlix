import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BrainFlixAPI() {
  const [videos, setVideos] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getAllVideos();
  }, []);

  useEffect(() => {
    getVideoDetails(id);
  }, [id]);

  async function register() {
    const response = await axios.get(
      "https://project-2-api.herokuapp.com/register"
    );
    return response.data;
  }

  async function getAllVideos() {
    try {
      const apiKey = await register();
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
      const apiKey = await register();
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey.api_key}`
      );
      setVideoDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function postComment(id, data) {
    try {
      const apiKey = await register();
      const response = await axios.post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=${apiKey.api_key}`,
        data,
        { "Content-Type": "application/json" }
      );
      // const newVideoDetails = {
      //   ...videoDetails,
      //   comments: [...videoDetails.comments, response.data],
      // };
      // console.log(newVideoDetails);
      // setVideoDetails(newVideoDetails);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComment(videoId, commentId) {
    try {
      const apiKey = await register();
      await axios.delete(
        `https://project-2-api.herokuapp.com/videos/${videoId}/comments/${commentId}?api_key=${apiKey.api_key}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return { videos, videoDetails, postComment, deleteComment };
}
