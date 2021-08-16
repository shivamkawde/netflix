import React from "react";
import Row from "./Row";
import "./App.css"
import Navbar from "./Navbar";
import requests from "./requests";
import Banner from "./Banner";
import Login from "./Login";
import {useState} from "react";
import { useLocation } from "react-router-dom";
function App(props) {
  
  return (
    props.online?
    <div className="app">
    
     <Navbar online={props.online} checkOnline={props.checkOnline}/>    
      <Banner/>
     <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} largerow online={props.online}></Row>
     <Row title="Trending Now" fetchUrl={requests. fetchTrending} online={props.online}></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} online={props.online}></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} online={props.online}></Row>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} online={props.online}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} online={props.online}></Row>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} online={props.online}></Row>  
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}online={props.online}></Row> 
     :
    </div>
    :<div><Login checkOnline={props.checkOnline} online={props.online} /></div>
    
  );
}

export default App;
