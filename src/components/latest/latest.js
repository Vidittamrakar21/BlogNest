import { Link } from 'react-router-dom';
import './latest.css';


function Latest(props){

    console.log(props);
    
    
    return(
       <Link className='lona' to={`/blog/${props.id}`}> <div id='box'>
       <div id="foto">
           <img src={props.image} alt="" />
       </div>
       <h1>{props.title}</h1>
       {/* <p dangerouslySetInnerHTML={{__html: text}} /> */}
       <div id='sect'>
           <h5>24 Likes</h5>
           <h5>3 comments</h5>
           <h5>Posted By <span id='byy'>@{props.create}</span></h5>
           <h5>16-09-2-23</h5>
       </div>

   </div>
   </Link>
    )
}

export default Latest;