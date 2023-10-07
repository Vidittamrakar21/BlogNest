import './profile.css';
import Latest from '../latest/latest';
import Footer from '../footer/Footer';
import User from '../user/user';
import { useState } from 'react';

function Profile () {

    const [edit, isedit] = useState(false);
    const [save, osave] = useState(false);
    const [pro, opro] = useState(true);

    const doedit = () => {
        osave(false);
        opro(false);
        isedit(true);
    }

    const dosave = () => {
        osave(true);
        opro(false);
        isedit(false);
    }

    const dopro = () => {
        osave(false);
        opro(true);
        isedit(false);
    }


    return(
        <div id="pro">
            <div id='profile'>
                    {pro && <> <User></User> <div id="iq">  <h5 onClick={doedit}>Edit Profile</h5>
                        <h5 onClick={dosave}>Saved Blogs</h5>
                        <h5>Log Out</h5>
                        </div></>}

                {edit && <div id='ii'>
                
                <h2>Edit Profile</h2>
                
                <div id="uplo">
                       <div id="pop">
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <h3>Update Profile Photo</h3>
                        <input type="file" accept='image/*' id='file' placeholder='photo'/>
                        <label for="file">
                            Upload
                        </label>
                </div>
                
                <div id='mm'>
                  
                    <h3>Vidit Tamrakar</h3>
                </div>
                <div id='oo'>
                <input type="text" placeholder='&nbsp; Edit Name'/>
                <button>Edit</button>
                </div>

                <div id='mm'>
                  
                  <h3>vidit.tamrakar16@gmail.com</h3>
              </div>

                <div id='oo'>
                <input type="text" placeholder='&nbsp; Edit Email'/>
                <button>Edit</button>
                </div>

                <div >
                  <h3>* Write Somenthing About You</h3>
              </div>

              <textarea name="About" id="koo" cols="30" rows="8" placeholder='&nbsp;Write here..'></textarea>

             <button id='ev' onClick={dopro}>Save Changes</button>

            <h4 id='del'>Delete Account</h4>


                </div>}

            {save && <div id='rakh'>
                <h2>Blogs Saved By You</h2>
                <Latest ></Latest>
                
                </div>}
               


            </div>
            <div id='settings'>
                   <div id="mamu">
                        <div id="pop">
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <div id='dd'>
                           <h3>@Vidit Tamrakar</h3>
                          
                        </div>
                    </div>

                    <div id="out">
                    <h5 onClick={doedit}>Edit Profile</h5>
                        <h5 onClick={dosave}>Saved Blogs</h5>
                        <h5>Log Out</h5>
                    </div>
                   <div  className='joot'>
                        <Footer></Footer>

                   </div>

                    
            </div>
        </div>
    )
}

export default Profile;