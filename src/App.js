import React,{useState} from 'react';
import {Grid} from '@material-ui/core'
import youtubeapi from './api/youtubeapi'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'

    function App() {
    const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
        return (
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar onSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                  <VideoDetail video={selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                 
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
        async function handleSubmit(searchVideo) {
            const {data:{items:videos}}= await youtubeapi.get("search", {
              params: {
                part: "snippet",
                maxResults: 10,
                 key:"api-key",
                q: searchVideo,
              }
            });
            setVideos(videos);
            setSelectedVideo(videos[0]); 
    }
}
export default App;