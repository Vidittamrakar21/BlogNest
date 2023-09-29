import { Link } from 'react-router-dom';
import './latest.css';


function Latest(){
    
    return(
       <Link className='lona' to={'/blog'}> <div id='box'>
       <div id="foto">
           <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/FR/KN/OX/55284628/python-programming-online-course-500x500.jpeg" alt="" />
       </div>
       <h1>Python And It's Application</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore officia perspiciatis ex illo soluta, dolorum magni aut inventore cum voluptatibus a corporis</p>
       <div id='sect'>
           <h5>24 Likes</h5>
           <h5>3 comments</h5>
           <h5>Posted By <span id='byy'>@Rithuik</span></h5>
           <h5>16-09-2-23</h5>
       </div>

   </div>
   </Link>
    )
}

export default Latest;