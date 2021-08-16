import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { firestore } from './Firebase';
import "./Likedmoviecss.css"
import Navbar from './Navbar'
import { Redirect } from "react-router-dom";
function Likedmovies(props){

  
  console.log(props.online)
    let [posts, setPosts] = useState([]);
    

  useEffect(() => {
    
    let f = async () => {
      await firestore.collection("likedmovie").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
            console.log(doc.data().uid);
            if(props.online.uid===doc.data().uid){
          tempArr.push({
            
            data: doc.data(),
          });
        }
        });

        setPosts(tempArr);
      });
    };

    f();
  }, []);
  console.log(posts);
        

    return(
        
        <div> {props.online?
        <div className="mainDivLiked"> 
         <Navbar online={props.online} checkOnline={props.checkOnline}/> 
         {posts.length!==0?posts.map((e)=>{
            if(e.data.path!==""&&e.data.name!=="")
            return(
                <>
                
                <div className="movieDiv">
           

             <img src={`https://image.tmdb.org/t/p/original${e.data.path}`} className="linkedmovie"></img>
             <h3 style={{color:'red',textAlign:"center"}}>{e.data.name}</h3>
           
            </div>
              <button className="unlikeBtn" onClick={
                  ()=>{
                    //   alert("sd")
                     //console.log(firestore.collection("likedmovie").doc(e.data.name))


                     firestore.collection("likedmovie").where("name", "==", e.data.name).get()
                     .then(querySnapshot => {
                         querySnapshot.docs[0].ref.delete();
                     });


                  }
              }>UnLiked</button>
</>
            )
            
        })
:""
     }
        </div>
        :<Redirect to="./Login"></Redirect>}
</div>
    );
}
export default Likedmovies;