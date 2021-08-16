import Row from "./Row";
import requests from "./requests";
import  Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import {useState,useRef} from "react";
function Comedy(props)
{ 
    let[searchMovie,setSearchMovie]=useState()
     let inputRef=useRef(null)
    

    return(
      <div>{props.online?
       <div className="ComedyDiv">
        <Navbar online={props.online} checkOnline={props.checkOnline}/>

        <input type="text" ref={inputRef} className="searchHorrorMovie" placeholder="Search movie"/>
        <button className="searchBtn" onClick={()=>{setSearchMovie(inputRef.current.value)}}>Search</button>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} searchMovie={searchMovie}online={props.online}></Row>
        </div>
        :<Redirect to="./Login"></Redirect>}
        </div>
    )

}
export default Comedy;