import Header from "./components/Header/Header";
import "./App.scss";
import { useState } from "react";
import NextVideos from "./components/NextVideos/NextVideos";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import CurrentVideoPoster from "./components/CurrentVideoPoster/CurrentVideoPoster";

function App() {
  const [videoId, selectVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  return (
    <>
      <Header />
      <CurrentVideoPoster videoId={videoId} />
      <div className="app-flexbox--desktop-row">
        <CurrentVideoDetails videoId={videoId} />
        <NextVideos videoId={videoId} selectVideoId={selectVideoId} />
      </div>
    </>
  );
}

export default App;
