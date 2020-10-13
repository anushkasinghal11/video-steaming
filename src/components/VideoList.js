import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";
import "../App.js";
function VideoList ({ videos, onVideoSelect }) {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
      <div className="video-list">
    <Grid container spacing={0}>
      {listOfVideos}
    </Grid>
    </div>
  );
}
export default VideoList;