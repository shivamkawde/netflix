import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css"
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Action from './Action';
import Comedy from './Comedy'
import Horror from "./Horror"
import Romance from "./Romance"
import Likedmovies from './Likemovies';
import CreateAc from './CreateAc';
import {useState} from "react"

function App1(){
    let [online,setOnline]=useState(null);
  
console.log(online)
  let checkOnline=(user)=>{setOnline(user)}
return(
<Router>  
    <Switch>
        <Route path="/Action">
          <Action online={online} checkOnline={checkOnline}/>
          </Route>

          <Route path="/Comedy">
          <Comedy online={online} checkOnline={checkOnline}/>
          </Route>


          <Route path="/Horror">
          <Horror online={online} checkOnline={checkOnline}/>
          </Route>
          <Route path="/Romance">
          <Romance online={online} checkOnline={checkOnline}/>
          </Route>
          <Route path="/likedmovies">
            <Likedmovies online={online} checkOnline={checkOnline}/>

          </Route>
          <Route path="/CreateAc">
            <CreateAc online={online} checkOnline={checkOnline}/>
            </Route>
     
      <Route path="/">
        <App online={online} checkOnline={checkOnline}></App>
      </Route>
      
      </Switch>
  </Router>
)
  
  
}
export default App1