import Header from "./components/Header/Header";
import "./App.scss";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import { useState } from "react";

function App() {
  const [videoId, selectVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  return (
    <>
      <Header />
      <CurrentVideo videoId={videoId} />
    </>
  );
}

export default App;
