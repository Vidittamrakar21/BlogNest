import './search.css';
import Latest from '../latest/latest';
import '../latest/latest.css'
import { useState, useContext,useEffect } from 'react';
import checkcontext from '../../context/checkcontext';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';


function Search () {
    const a = useContext(checkcontext);
    const [data, savedata] = useState([]);
   
    const filldata = () => {
        savedata(a.bdata);
    }

    


  const checkccokie = async () => {
   const check = await(await axios.get('/check')).data;
   if(check){
    if(check.message === 'declined'){
      a.openlog()
    }

    else{
      console.log(check);
      a.closelog();
    }
   } 
  }

  useEffect(()=> {
    checkccokie()
  },[])

    

    useEffect(()=>{
        filldata();
    })

    return (
        <div id='super'>
            <h2>Your Search results will appear here.</h2>
            <div id="jugnu">
            <ClipLoader color="#36bdd6" loading={a.loading} cssOverride={{ position: 'absolute', top: '380px'}}/>   
            {data.length >0? data.map((item)=>{
                return(
                    <>
                    <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
                    
                    </>
                )
            }): <></>}

        {data === 1 && <><h1>No result found!</h1></>}
           
            </div>

        </div>
    )
}

export default Search;