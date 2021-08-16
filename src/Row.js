import React from 'react';
import axios from './axios';
import { firestore } from './Firebase';
import "./Row.css"
import { useState ,useEffect} from 'react';
import YouTube from 'react-youtube';
//import movietrailer from "movie-trailer"
import movieTrailer from 'movie-trailer';
const Row = ({title,fetchUrl,largerow,searchMovie,online}) => {

console.log(online.uid)

    const [movies,setMovies]=useState([])
    const[trailerUrl,setTrailerUrl]=useState("")
   useEffect(()=>{
       async function fetchData(){
           const request=await axios.get(fetchUrl)
     //    console.log(request);
         setMovies(request.data.results)
         return request
        }
       fetchData();

   },[fetchUrl])
   console.log(movies)


   const opts = {
    height: '390',
    width: '640',
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };




function CamelCaseString(str)
{ 
    let ans=str.charAt(0).toUpperCase()+"";
for(let i=1;i<str.length;i++)
{
  if(str.charAt(i)==" "){
    if(ans.charAt(ans.length-1)!=" ")
   ans=ans+str.charAt(i)
  continue;
  }
  else if(str.charAt(i-1)==" ")
   ans=ans+str.charAt(i).toUpperCase();
   else{
     ans=ans+str.charAt(i)
   }
}

return ans
}







  
   function handelClick(movie,largerow)
   { let youtubeUrlMovieName
    console.log(largerow)
       if(trailerUrl)
       {
           setTrailerUrl("")
       }
       else{
           if(largerow)
           {
            youtubeUrlMovieName=movie.original_name
            console.log(youtubeUrlMovieName)
           }
           else{
            youtubeUrlMovieName=movie.original_title
            console.log(youtubeUrlMovieName)
           }
           console.log(youtubeUrlMovieName)

           movieTrailer(youtubeUrlMovieName|| "").then((url)=>{

            const urlParams=new URLSearchParams( new URL(url).search)
            console.log(urlParams.get("v"))
              setTrailerUrl( urlParams.get("v"));
            } ).catch((err)=> console.log("yeee"))
       }

      console.log(movie)

   }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie=>(
                        searchMovie?
                        
                       CamelCaseString(searchMovie).localeCompare(movie.original_title)===0?
                        
                        <>
                        <img key={movie.id} onClick={()=>handelClick(movie,largerow)} className={`row_poster ${largerow&& "row_posterLarge" }`} src={`https://image.tmdb.org/t/p/original${largerow?movie.poster_path:movie.backdrop_path }`}alt={movie.name}></img>
                        
                        <button className={` ${largerow==true? "likedMovie":"likedmovieSmall" }` } onClick={()=>{
                            
                            if(largerow){
                            console.log(movie)
                            firestore.collection("likedmovie").add({ name: movie.original_name , path: movie.backdrop_path,uid:online.uid});   
                            }
                              else
                         firestore.collection("likedmovie").add({ name: movie.original_title , path: movie.backdrop_path ,uid:online.uid});
                         //firestore.collection("likedmovie").add({ path: movie.backdrop_path });
                             

                        }}
                        >Like</button>
                         <h5>{ movie.original_title}</h5>
                     </>
                     :""
                    :

                    <>
                    <img key={movie.id} onClick={()=>handelClick(movie,largerow)} className={`row_poster ${largerow&& "row_posterLarge" }`} src={`https://image.tmdb.org/t/p/original${largerow?movie.poster_path:movie.backdrop_path }`}alt={movie.name}></img>
                    
                    <button className={` ${largerow==true? "likedMovie":"likedmovieSmall" }` } onClick={()=>{
                        
                        if(largerow){
                        console.log(movie)
                        firestore.collection("likedmovie").add({ name: movie.original_name , path: movie.backdrop_path,uid:online.uid});   
                        }
                          else
                     firestore.collection("likedmovie").add({ name: movie.original_title , path: movie.backdrop_path,uid:online.uid});
                     //firestore.collection("likedmovie").add({ path: movie.backdrop_path });
                         

                    }}
                    >Like</button>
                     <h5>{ movie.original_title}</h5>
                 </>



                        ))
                    
                }
                
            </div>
           {trailerUrl&& <YouTube videoId={trailerUrl} opts={opts} ></YouTube>}
        </div>
    );
}

export default Row;
