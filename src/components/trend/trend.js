import { Link } from 'react-router-dom';
import moment from 'moment';
import './trend.css';

function Trend(props){
    const formatdate = moment(props.date).utc().format("dddd, MMMM Do YYYY, h:mm")
    return (

      <Link className='lona' to={`/blog/${props.id}`}>  <div id='dib'>
      <div id="toto">
          <img src={props.image} alt="" />
      </div>
      <h1>{props.title}</h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore officia perspiciatis ex illo soluta, dolorum magni aut inventore cum voluptatibus a corporis voluptate nobis exercitationem odio fugit labore in. Provident minima modi vitae, odio architecto expedita mollitia ipsam, quas neque qui veritatis ut rerum. Laborum veniam voluptatibus qui consequatur blanditiis.</p> */}

      <div id='pect'>
          <h5>{props.likes} Likes</h5>
          <h5>{(props.comments).length} comments</h5>
          <h5>Posted By <span id='byy'>@{props.create}</span></h5>
          <h5>{formatdate}</h5>
      </div>

  </div>
  </Link>

    )
}

export default Trend;