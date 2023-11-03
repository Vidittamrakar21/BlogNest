
import './side.css';
import { useContext,useEffect,useState } from 'react';
import checkcontext from '../../context/checkcontext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Side(props){

  const a = useContext(checkcontext);
  const closebar = () => {
   a.closeside();
  }

  const [user , setdata] = useState("");

  const getuser = async () => {
   const _id = localStorage.getItem("userId");
   const udata = await(await axios.post('/api/getuser', {id: _id}) ).data;
   if(udata){
       setdata(udata);
       
     
   }

   else{
       console.log("unable to fetch data ")
   }
 }

 useEffect(()=>{
   getuser()
 },[])
 
    return(
        <div  className={`fade ${ !a.side? "khisak" : ""}`}>
         <div className={` ${ !a.side? "barside" : "sidebar"}`}>

<div id="cat" >
   <h4>Categories</h4>
</div>            

<Link className = "lona" to={"/life"} >
<div id="setting" className='dib'>
   <h4>Lifestyle</h4>
</div>
</Link>

<Link className = "lona" to={"/tech"} >
<div className='dib' >           
        <h4>Tech</h4>
</div>
</Link>



 <Link className = "lona" to={"/food"}>
 <div className='dib'>
   
   <h4>Food</h4>
</div>
 </Link>  

  <Link className = "lona" to={"/entre"}>
  <div  className='dib'>
   
   <h4>Entrepreneurship</h4>
</div>
 </Link>  

  <Link className = "lona" to={"/profile"}>
  <div id="cut"  className='dib'>
  <div id="pot">
  <img src={user.image? `/images/${user.image}`: "/images/user.png"} alt="" />
  </div>
   <h4>Go To Profile</h4>
</div>
 </Link>  

 <div id='cll' onClick={closebar}>
 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
 </div>

 <div id='blogu' className='dib'>
   <h2>BlogNest</h2>
 </div>

</div>
       </div>
    );
   
}

export default Side;