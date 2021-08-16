import Row from "./Row";
import requests from "./requests";
import  Navbar from "./Navbar";
import "./App.css"
import {useRef, useState} from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function Horror(props)
{ 
   let[searchMovie,setSearchMovie]=useState()
     let inputRef=useRef(null)
    
    // console.log(inputRef.current.value)
     console.log(searchMovie)
    return(
    <div>{props.online?
    <div className="HorrorDiv">
        <Navbar online={props.online} checkOnline={props.checkOnline}/>
        <input type="text" ref={inputRef} className="searchHorrorMovie" placeholder="Search movie"/>
        <button className="searchBtn" onClick={()=>{setSearchMovie(inputRef.current.value)}}>Search</button>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} searchMovie={searchMovie} online={props.online}></Row>
        </div>
        :<Redirect to="./Login"></Redirect>}
        </div>
    )

}
export default Horror;