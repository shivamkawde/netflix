import React from 'react';
import { useState,useEffect } from 'react';
import './Banner.css'
import './App.css'
import axios from './axios';
import requests from './requests';
import YouTube from 'react-youtube';
//import movietrailer from "movie-trailer"
import movieTrailer from 'movie-trailer';
const Banner = () => {
  let[movie,setMovie]=useState([])
  const[trailerUrl,setTrailerUrl]=useState("")
  
 useEffect(()=>{

    async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOrignals);
        console.log(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
         setMovie(
            request.data.results[Math.floor(Math.random()*request.data.results.length-1)]

         )
        return request;
    }
    fetchData()

 },[]) 

 const opts = {
    height: '390',
    width: '640',
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };



 function handelClick(movie)
 {
     if(trailerUrl)
     {
         setTrailerUrl("")
     }
     else{
         movieTrailer(movie.original_name|| "").then((url)=>{

          const urlParams=new URLSearchParams( new URL(url).search)
          console.log(urlParams.get("v"))
            setTrailerUrl( urlParams.get("v"));
          } ).catch((err)=> console.log("yeee"))
     }

    console.log(movie)

 }



 
console.log(movie);
    return (
        <div>
       <header className="banner" onClick={()=>handelClick(movie)}
       style={{backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
    }}
       >
           <div className="banner_contents">
               <h1 className="banner_title">
               {movie?.title||movie?.name||movie?.original_name}
               </h1>
           </div>

           <div className="banner_buttons">
               <button className="banner__button" onClick={()=>handelClick(movie)}>Play</button>
               {/* <button className="banner__button">My List</button> */}

               <h1 className="banner_description">{movie?.overview} </h1>
                
           </div>
                      
       </header>
       {trailerUrl&& <YouTube videoId={trailerUrl} opts={opts} ></YouTube>}
       </div>         
    );
}

export default Banner;
