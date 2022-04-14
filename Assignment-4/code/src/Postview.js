import React from 'react';
import { useState ,useEffect} from 'react';
import Post from './Post/Post';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RadarIcon from '@mui/icons-material/Radar';


const Postview=()=> {

const [posts,setPosts]=useState([]);
const setPostsAsync=async()=> {
  const response=await fetch("http://localhost:3004/user"),

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
        <div className='righthandside'><PhotoCameraIcon/></div>
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