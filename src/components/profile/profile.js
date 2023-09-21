import './profile.css';
import Latest from '../latest/latest';
import Footer from '../footer/Footer';
import { useState } from 'react';

function Profile () {

    const [edit, isedit] = useState(false);
    const doedit = () => {
        isedit(true);
    }

    const noedit = () => {
        isedit(false);
    }


    return(
        <div id="pro">
            <div id='profile'>
                    {!edit && <> <div id="about">
                    <div id="namu">
                        <div id="oop">
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <div id='ff'>
                           <h2>@Vidit Tamrakar</h2>
                            <button id="follow">Follow</button>
                        </div>
                    </div>

                    <div id="num">
                        <h3>104 Followers</h3>
                        <h3>4 Blogs Posted</h3>
                    </div>

                    <div id="me">
                        <h3>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium deleniti fuga atque necessitatibus, ratione modi adipisci iusto distinctio rem, odit quo! Atque possimus fugit expedita. Iure quo amet enim molestias dignissimos dolor quia tenetur, odit illo ipsam accusantium provident esse blanditiis voluptatem neque tempora perspiciatis asperiores vero facilis. Itaque.</p>
                    </div>
                </div>
                <div id="posts">
                    <Latest></Latest>
                    <Latest></Latest>
                    <Latest></Latest>
                    <Latest></Latest>
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

             <button id='ev' onClick={noedit}>Save Changes</button>

            <h4 id='del'>Delete Account</h4>


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
                        <h5>Saved Blogs</h5>
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