import CurrentVideoPoster from "../components/CurrentVideoPoster/CurrentVideoPoster";
import CurrentVideoDetails from "../components/CurrentVideoDetails/CurrentVideoDetails";
import NextVideos from "../components/NextVideos/NextVideos";
import allVideos from "../data/videos.json";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const { id } = useParams();
  const currentVideo =
    allVideos.find((video) => video.id === id) || allVideos[0];
  const nextVideos = allVideos.filter((video) => video.id !== currentVideo.id);
  document.title = "BrainFlix | Home";

  return (
    <>
      <CurrentVideoPoster videoId={currentVideo.id} />
      <div className="app-flexbox--desktop-row">
        <CurrentVideoDetails videoId={currentVideo.id} />
        <NextVideos nextVideos={nextVideos} />
      </div>
    </>
  );
}
