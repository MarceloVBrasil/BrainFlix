import CurrentVideoPoster from "../../components/CurrentVideoPoster/CurrentVideoPoster";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import BrainFlixAPI from "../../components/BrainFlixAPI/BrainFlixAPI";
import "./HomePage.scss";

export default function HomePage() {
  const { videos, videoDetails } = BrainFlixAPI();
  document.title = "BrainFlix | Home";

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
}
