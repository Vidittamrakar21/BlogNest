import './navbar.css'
import Side from '../sidebar/Side'
import { useContext, useState } from 'react';
import checkcontext from '../../context/checkcontext';
import { Link } from 'react-router-dom';
function Navbar () {

    const a = useContext(checkcontext);
    const [dep, ped] = useState(1);

    const io = () => {
        a.openlog()
    }

    const opensidemenu = () => {
        ped((prev) => prev+1);

        if(dep%2 === 0 ){
            a.openside(0);

        }

        else {
            a.openside(1);
        }
      
    }

    return(
        <div id="bar">

            
            <Link className='lona'  to={'/'}><h1 id='nest'>BlogNest</h1></Link>

            <ul id='tags'>
                <Link className='lona'  to={'/'}><li>For You</li></Link>
                <Link className='lona' to={'/'}><li>Lifestyle</li></Link>
                <Link className='lona' to={'/'}><li>Tech</li></Link>
                <Link className='lona' to={'/'}><li>Food</li></Link>
                <Link className='lona' to={'/'}><li>Entrepreneurship</li></Link>
                <Link className='lona' to={'/profile'}> <li>Profile</li></Link>
                
            </ul>

            <div id='butter'>
            <input type="search" placeholder='Search by topic, user..'/>
            <button id='ser'>Search</button>
            </div>

            <Link className='lona' to={'/write'}><div id="write">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-pencil-square" viewBox="0 0 16 16">
               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
               <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
             </svg>
             <li>Write</li>
            </div></Link>

            <button id='but' onClick={io}>Login</button>

            <div id="menu" onClick={opensidemenu}>
               <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
            </div>

            <Side></Side>

        </div>
    )
}

export default Navbar;