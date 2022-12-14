import React, { useState, useEffect } from "react";
import "./CurrentVideoDetails.scss";

import CurrentVideoLikesViews from "../CurrentVideoLikesViews/CurrentVideoLikesViews";
import CurrentVideoDescription from "../CurrentVideoDescription/CurrentVideoDescription";
import CurrentVideoForm from "../CurrentVideoForm/CurrentVideoForm";
import CurrentVideoComments from "../CurrentVideoComments/CurrentVideoComments";

export default function CurrentVideoDetails({ video }) {
  const [comments, setComments] = useState(video.comments);
  useEffect(() => {
    setComments(video.comments);
  }, [video.id]);

  return (
    <div className="current-video">
      <div className="current-video-inner-container">
        <h1 className="current-video-inner-container__title">{video.title}</h1>
      </div>
      <CurrentVideoLikesViews video={video} />
      <CurrentVideoDescription video={video} />
      <CurrentVideoForm
        comments={video.comments}
        videoId={video.id}
        setComments={setComments}
      />
      {comments.map((comment) => (
        <CurrentVideoComments
          key={comment.id}
          comment={comment}
          videoId={video.id}
          setComments={setComments}
        />
      ))}
    </div>
  );
}
