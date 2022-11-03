import Header from "./components/Header/Header";
import "./App.scss";
import { useState } from "react";
import NextVideos from "./components/NextVideos/NextVideos";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";

function App() {
  const [videoId, selectVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  return (
    <>
      <Header />
      <CurrentVideoDetails videoId={videoId} />
      <NextVideos videoId={videoId} selectVideoId={selectVideoId} />
    </>
  );
}

export default App;
