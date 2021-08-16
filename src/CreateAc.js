import { useRef, useState } from "react";
import reactRouterDom, { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Createac.css"
import { auth, firestore } from "./Firebase";
//import{useHistory} from reactRouterDom
function CreateAc()
 {  // let[password,setPw]=useState("");
     let[username,setUsername]=useState()
        const emailRef=useRef(null);
        const passwordRef=useRef(null);
    const usehistory=useHistory()
    console.log(usehistory);
   // console.log(username)
   function singn()
   {
       console.log("aa")
       auth.createUserWithEmailAndPassword(emailRef.cu0rrent.value,passwordRef.current.value).then(user=>
        setUsername(user))
        usehistory.push({
            pathname:"./App",
            state:{
                user:username
            }

        })    
   }
    return(
        <div className="container">
                 <img
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
        className="nav-logo2" 
      ></img>
          <div className="mainDiv">
            <input type="email" ref={emailRef} className="input" placeholder="Create Username" ></input>
            <input type="text" ref={passwordRef} className="password" placeholder="Create Password"></input>
            <button className="create-btn" onClick={singn}>Create</button>
         </div>
        </div>
    )

}
export default CreateAc;