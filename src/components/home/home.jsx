import './home.css'
import Latest from '../latest/latest';
import Trend from '../trend/trend';
import { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";
import InfiniteScroll from 'react-infinite-scroll-component';
import ClipLoader from "react-spinners/ClipLoader";
import checkcontext from '../../context/checkcontext';


function Home (){

    const a = useContext(checkcontext);


  const checkccokie = async () => {
   const check = await(await axios.get('/check')).data;
   if(check){
    if(check.message === 'declined'){
      a.openlog()
    }

    else{
      console.log(check);
      a.closelog();
    //   localStorage.setItem("userId", check.id)
    //   window.location.reload()
    }
   } 
  }

  useEffect(()=> {
    checkccokie()
  },[])

    
    const [data, setdata] = useState([]);
    const [moredata, fetchmore] = useState([]);
    const [tdata, givedata] = useState([]);
    const [loading, isloading] = useState(false);
    const [num, inc] = useState(1);
    const [set, isset] =  useState([]);
    const [full, isfull] =  useState(true);

    const start = async () => {
        const bdata = await (await axios.get(`/api/blogs?limit=4&page=${num}`)).data;
       
        if(bdata){
            if((data.length >0) && (set.length>0) && (data.length=== set.length)){
                isfull(false)
            }
            setdata(data.concat(bdata));
            inc((prev)=> prev+1);
            isloading(false);
            
            
        }

        
    }

    const initial = async () => {
        const bdata = await (await axios.get(`/api/blogs?limit=4&page=${1}`)).data;
       
        if(bdata){
           
            setdata(data.concat(bdata));
           
            isloading(false);
            
            
        }

        
    }

    const count = async () => {
        const pydata = await (await axios.get('/api/all')).data;
        isset(pydata);
    }

    const trend = async () => {
        const data = await (await axios.get('/api/trend')).data;
        if(data){
            givedata(data);
        }
    }

    const fetchmoredata = async () => {
        
        
        const info = await (await axios.get(`/api/blogs?limit=10&page=${num}`)).data;
           
            fetchmore(info);
            setdata(data.concat(info));
            inc((prev)=> prev+1);
          
    }
    useEffect(()=> {
      
        start()
        count()
        trend()
    },[])

    
    return (
        <div id='home'>
           <div id="latest">
            <h1 className='juu'>For You</h1>
 
            <MoonLoader color="#2b2b2b" loading={loading} />

          
           
         <InfiniteScroll dataLength={data.length} next={start} hasMore={full} loader={ <ClipLoader color="#36bdd6"></ClipLoader>}>
            {data.map((item) =>{
             return(
                <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
             )
            })}
         </InfiniteScroll>
           
           
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

export default Home;