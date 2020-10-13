import React, {useState}from 'react'
import { Paper, TextField } from "@material-ui/core";
import "../App.css"
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
        <div className="search-bar">
          
      <TextField
        fullWidth
        onChange={handleChange}
        className="search-text"
      />
      <button className="search-button" onClick={handleSubmit}>Search</button>
    
    </div>
    )
}

export default SearchBar;
