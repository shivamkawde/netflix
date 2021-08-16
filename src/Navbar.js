import React, { useState } from "react";
import { auth } from "./Firebase";
import "./Navbar.css";
import { NavLink, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Action from "./Action";

const Navbar = (props) => {
  
 // let [genre, setGenre] = useState();
  //console.log(genre);
  let history=useHistory()
  return (
    <div className="navbar">
      <img
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
        className="nav-logo"
      ></img>

   

      <NavLink
        exact
        activeClassName="activeLink"
        to="/"
      
        style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
      >
        Home
      </NavLink>

      <NavLink
        exact
        activeClassName="activeLink"
        to="/Action"
        
        style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
      >
        Action Movies
      </NavLink>

      <NavLink
        exact
        activeClassName="activeLink"
        to="/Comedy"
        
        style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
      >
        Comedy Movies
      </NavLink>

      <NavLink
        exact
        activeClassName="activeLink"
        to="/Horror"
        style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
      >
        Horror Movies
      </NavLink>

      <NavLink
        exact
        activeClassName="activeLink"
        to="/Romance"
        style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
      >
        Romance Movies
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        to="/Likedmovies"
        style={{ textDecoration: "none", fontSize: "large", fontWeight: "bold", padding:"10px",marginRight:"3px"}}
      >
        Liked Movies
      </NavLink>

      {props.online !== null && (
        <h3 className="userName" style={{ color: "red" }}>
          {props.online.displayName}
        </h3>
      )}
      <button
        className="logout"
        onClick={() => {
          auth.signOut();
          props.checkOnline(null);
          history.push("./login")

        }}
      >
        logout
      </button>
    </div>
  );
};

export default Navbar;
