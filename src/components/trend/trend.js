import { Link } from 'react-router-dom';
import './trend.css';

function Trend(props){
    return (

      <Link className='lona' to={`/blog/${props.id}`}>  <div id='dib'>
      <div id="toto">
          <img src={props.image} alt="" />
      </div>
      <h1>{props.title}</h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore officia perspiciatis ex illo soluta, dolorum magni aut inventore cum voluptatibus a corporis voluptate nobis exercitationem odio fugit labore in. Provident minima modi vitae, odio architecto expedita mollitia ipsam, quas neque qui veritatis ut rerum. Laborum veniam voluptatibus qui consequatur blanditiis.</p> */}

      <div id='pect'>
          <h5>24 Likes</h5>
          <h5>3 comments</h5>
          <h5>Posted By <span id='byy'>@{props.create}</span></h5>
          <h5>16-09-2-23</h5>
      </div>

  </div>
  </Link>

    )
}

export default Trend;