import React, {useState}from 'react'
import { Paper, TextField } from "@material-ui/core";
function SearchBar({onSubmit}) {
    const[searchVideo,setSearchVideo]=useState('')
  const  handleChange=
        (event)=>{
            setSearchVideo(event.target.value);
        }
        const  handleSubmit=
        (event)=>{
            onSubmit(searchVideo);
        }
    //on keypress is not working
    return (
        <div>
          <Paper elevation={6} style={{ padding: "25px"}}>
      <TextField
        fullWidth
        label="Search..."
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </Paper>
    </div>
    )
}

export default SearchBar;
