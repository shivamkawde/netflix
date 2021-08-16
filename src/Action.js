import Row from "./Row";
import requests from "./requests";
import  Navbar from "./Navbar";
import Login from "./Login";
import {useState,useRef} from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function Action(props)
{ 
    let[searchMovie,setSearchMovie]=useState()
     let inputRef=useRef(null)
    

    return(
    
    <div>
        {props.online?
         <div className="ActionDiv">
        <Navbar online={props.online} checkOnline={props.checkOnline}/>
        <input type="text" ref={inputRef} className="searchHorrorMovie" placeholder="Search movie"/>
        <button className="searchBtn" onClick={()=>{setSearchMovie(inputRef.current.value)}}>Search</button>
        
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} searchMovie={searchMovie} online={props.online}></Row>
        </div>
           :<Redirect to="./Login"></Redirect>} 
        </div>
    )

}
export default Action;