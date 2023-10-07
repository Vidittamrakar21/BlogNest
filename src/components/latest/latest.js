import { Link } from 'react-router-dom';
import moment from 'moment';
import './latest.css';


function Latest(props){

    
    const formatdate = moment(props.date).utc().format("dddd, MMMM Do YYYY, h:mm")
    
    
    return(
       <Link className='lona' to={`/blog/${props.id}`}> <div id='box'>
       <div id="foto">
           <img src={props.image} alt="" />
       </div>
       <h1>{props.title}</h1>
       {/* <p dangerouslySetInnerHTML={{__html: text}} /> */}
       <div id='sect'>
           <h5>{props.likes} Likes</h5>
           <h5>{(props.comments).length} comments</h5>
           <h5>Posted By <span id='byy'>@{props.create}</span></h5>
           <h5>{formatdate}</h5>
       </div>

   </div>
   </Link>
    )
}

export default Latest;