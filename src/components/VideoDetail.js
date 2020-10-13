import React from "react";

import { Paper, Typography } from "@material-ui/core";

function VideoDetail({ video })  {
  if (!video) return <div>Loading...</div>
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="400"
          width="100%"
          title="Video Player"
          src={videoSrc}
          allowFullScreen
         
          
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </div>
  );
}
export default VideoDetail;