import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core";
import "../App.js";
function VideoItem({ video, onVideoSelect }) {
    return (
        <div className="video-item">
                <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "stretch", cursor: "pointer", width:"auto" }} onClick={() => onVideoSelect(video)} >
        <img className="thumbnail" style={{ margin:"auto" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <div className="video-item-text">
          <b>{video.snippet.title}</b>
        </div>
      </Paper>
    </Grid>
        </div>
    )
}

export default VideoItem
