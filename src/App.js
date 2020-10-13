import React,{useState} from 'react';
import {Grid} from '@material-ui/core'
import youtubeapi from './api/youtubeapi'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import "./App.css"
    function App() {
    const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
        return (
          <div className="app">
            <Grid style={{ placeContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar onSubmit={handleSubmit} />
                </Grid>
                <div className="app-video-detail">
                  <VideoDetail video={selectedVideo} />
                </div>
                <div className="app-video-list">
                <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                </div>
              </Grid>
            </Grid>
          </Grid>
          </div>
        );
        async function handleSubmit(searchVideo) {
            const {data:{items:videos}}= await youtubeapi.get("search", {
              params: {
                part: "snippet",
                maxResults: 10,
                 key:"xyz",
                q: searchVideo,
              }
            });
            setVideos(videos);
            setSelectedVideo(videos[0]); 
    }
}
export default App;