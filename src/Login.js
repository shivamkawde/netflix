import "./login.css"
import { useEffect, useRef } from "react"
import{auth, signInWithGoogle} from "./Firebase"
import {Link} from "react-router-dom"
function Login(props){
  const uname=useRef(null)
  const pw=useRef(null)
  console.log(uname)
     useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
         console.log(user)
         if(user){
             console.log(user);
         let{displayName,email,uid}=user;
        props.checkOnline({displayName,email,uid})
        
         }
         else{
            props.checkOnline(user)

         }
        })

     },[])
     function usernamePwLogin()
     { 

        let u=document.querySelector(".username").value;
        let p=document.querySelector(".password").value
        console.log(u)
         auth.signInWithEmailAndPassword(u,p);

     }

    
    return( 
        <div>
         
        <div className="login-container">
             <img
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
        className="nav-logo2" 
      ></img>
            <div className="login-form">
                <input type="text" ref={uname} className="username" placeholder="username"/>
                 <input type="password" ref={pw}  className="password" placeholder="password" />
                 <button className="login-btn" onClick={usernamePwLogin}>login</button>
                 <button className="google-btn" onClick={signInWithGoogle}>login With Google</button>
                  <Link to="/CreateAc" style={{color:"white"}}>Create Account</Link>
            </div>
                <h3 style={{color:"white"}}>For Testing Username- test123@test.com</h3>
             <h3 style={{color:"white"}}>Password-123456</h3>
        </div>
        
        </div>
    )
}
export default Login;
