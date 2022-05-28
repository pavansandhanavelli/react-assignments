import React from 'react';
import { useState ,useEffect} from 'react';
import Post from './Post/Post';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RadarIcon from '@mui/icons-material/Radar';
import {Link} from 'react-router-dom';


 const Postview=()=> {

const [posts,setPosts]=useState([]);
const setPostsAsync=async()=> {
  const response=await fetch("https://instaclonepavanb.herokuapp.com/api/v1/posts"),

  data=await response.json();
  setPosts(data);
};

useEffect(()=>{
  setPostsAsync();
},[]);
  return (
    <div>

    <div className='header-Container'>
        <div className='lefthandside' ><span><RadarIcon/></span>Instaclone</div>
        <Link to ="/Formpage">
        <div className='righthandside'><PhotoCameraIcon/></div>
        </Link>
      </div>
    <div className="Postview">    
    {posts.map((post,index)=>(
          <Post key={index} config={post}/>
      ))}                    
    </div>
    </div>
  );
}; 
 
export default Postview;