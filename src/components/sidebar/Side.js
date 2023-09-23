
import './side.css';
import { useContext } from 'react';
import checkcontext from '../../context/checkcontext';
import { Link } from 'react-router-dom';


function Side(props){

  const a = useContext(checkcontext);

    return(
        <div className={`sidebar ${ !a.side? "fuu" : ""}`}>

        <div id="cat" >
           <h4>Categories</h4>
        </div>            

       <Link className = "lona" to={"/"} >
        <div id="setting" className='dib'>
           <h4>Lifestyle</h4>
        </div>
       </Link>

       <Link className = "lona" to={"/"} >
       <div className='dib' >           
                <h4>Tech</h4>
        </div>
       </Link>

       

         <Link className = "lona" to={"/"}>
         <div className='dib'>
           
           <h4>Food</h4>
        </div>
         </Link>  

          <Link className = "lona" to={"/"}>
          <div  className='dib'>
           
           <h4>Entrepreneurship</h4>
        </div>
         </Link>  

          <Link className = "lona" to={"/profile"}>
          <div id="cut"  className='dib'>
           
           <h4>Go To Profile</h4>
        </div>
         </Link>  

    </div>
    );
   
}

export default Side;