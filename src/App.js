import Header from "./components/Header/Header";
import "./App.scss";
import { useState } from "react";
import NextVideos from "./components/NextVideos/NextVideos";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import CurrentVideoPoster from "./components/CurrentVideoPoster/CurrentVideoPoster";
import allVideos from "./data/videos.json";

function App() {
  const [currentVideo, setCurrentVideo] = useState(allVideos[0]);
  const nextVideos = allVideos.filter((video) => video !== currentVideo);
  return (
    <>
      <Header />
      <CurrentVideoPoster videoId={currentVideo.id} />
      <div className="app-flexbox--desktop-row">
        <CurrentVideoDetails videoId={currentVideo.id} />
        <NextVideos
          nextVideos={nextVideos}
          handleNextVideos={handleNextVideos}
        />
      </div>
    </>
  );

  function handleNextVideos(videoId) {
    const newCurrentVideo = allVideos.find((v) => v.id === videoId);
    setCurrentVideo(newCurrentVideo);
  }
}

export default App;
