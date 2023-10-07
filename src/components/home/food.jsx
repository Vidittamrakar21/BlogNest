import './home.css'
import Latest from '../latest/latest';
import Trend from '../trend/trend';
import { useState,useEffect } from 'react';
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";



function Food (){

    
    const [data, setdata] = useState([]);
    const [tdata, givedata] = useState([]);
    const [loading, isloading] = useState(true);

    const start = async () => {
        const data = await (await axios.get('http://localhost:8080/api/blogs/food')).data;
        if(data){
            setdata(data);
            isloading(false);
        }

    }

    const trend = async () => {
        const data = await (await axios.get('http://localhost:8080/api/trend')).data;
        if(data){
            givedata(data);
        }
    }

    useEffect(()=> {
        start()
        trend()
    },[])

    
    return (
        <div id='home'>
           <div id="latest">
            <h1 className='juu'>Food</h1>
 
            <MoonLoader color="#2b2b2b" loading={loading} />
           
          {data.map((item) =>{
             return(
                <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
             )
          })}
           
           
           </div>
           <div id="trending">
            <h1 className='juu'>Trending</h1>
            <div id='flow'>

            {tdata.map((item) =>{
             return(
                <Trend title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Trend>
             )
          })}
            </div>
            </div> 
        </div>
    )
}

export default Food;