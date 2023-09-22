import { Link } from 'react-router-dom';
import './trend.css';

function Trend(){
    return (

      <Link className='lona' to={'/blog'}>  <div id='dib'>
      <div id="toto">
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/FR/KN/OX/55284628/python-programming-online-course-500x500.jpeg" alt="" />
      </div>
      <h1>Python And It's Application</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore officia perspiciatis ex illo soluta, dolorum magni aut inventore cum voluptatibus a corporis voluptate nobis exercitationem odio fugit labore in. Provident minima modi vitae, odio architecto expedita mollitia ipsam, quas neque qui veritatis ut rerum. Laborum veniam voluptatibus qui consequatur blanditiis.</p>

      <div id='pect'>
          <h5>24 Likes</h5>
          <h5>3 comments</h5>
          <h5>Posted By <span id='byy'>@Rithuik</span></h5>
          <h5>16-09-2-23</h5>
      </div>

  </div>
  </Link>

    )
}

export default Trend;