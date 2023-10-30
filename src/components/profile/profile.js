import './profile.css';
import Latest from '../latest/latest';
import Footer from '../footer/Footer';
import User from '../user/user';
import { useState,useContext,useEffect,useRef } from 'react';
import axios from 'axios';
import checkcontext from '../../context/checkcontext';

function Profile () {

    const a = useContext(checkcontext);
    const [id, setid] = useState("");
    const [user, setdata] = useState("");
  

    const checkccokie = async () => {
     const check = await(await axios.get('/check')).data;
     if(check){
      if(check.message === 'declined'){
        a.openlog()
      }
  
      else{
        console.log(check);
        setid(check.id);
        a.closelog();
        
      }
     } 
    }

    const _id = localStorage.getItem("userId");

    const getuser = async () => {
        const udata = await(await axios.post('/api/getuser', {id: _id}) ).data;
        if(udata){
            setdata(udata);
            console.log(udata);
          
        }

        else{
            console.log("unable to fetch data ")
        }
    }

    const name = useRef();
    const mail = useRef();
   
    const changename = async () => {
        const udata = await (await axios.patch('/api/updatename', {name: name.current.value, uid: id})).data;
        if (udata){
            alert(udata.message)
        }
    }

    const changemail = async () => {
        const udata = await (await axios.patch('/api/updatemail', {mail: mail.current.value, uid: id})).data;
        if (udata){
            alert(udata.message)
        }
    }

    const [mes, setmes] = useState("");
    const handlecomment = (e) => {
        setmes(e.target.value);
        
    }

    const changebio = async () => {
        const udata = await (await axios.patch('/api/updateabout', {bio: mes, uid: id})).data;
        if (udata){
            alert(udata.message)
            osave(false);
            opro(true);
            isedit(false);
        }
    }



    
  
    useEffect(()=> {
      checkccokie()
     
    },[])
    
    useEffect(()=> {
        getuser()
     
    },[])

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

    const showfile = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0];
       const reader  = new FileReader();
       reader.addEventListener("load", ()=>{
        console.log(reader.result);
       })

       reader.readAsDataURL(file);
    }


    return(
        <div id="pro">
            <div id='profile'>
                    {pro && <> <User name = {user.name} about = {user.about} blogs = {user.blogposted}></User> <div id="iq">  <h5 onClick={doedit}>Edit Profile</h5>
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
                        <input type="file" accept='image/*' id='file' placeholder='photo' onChange={showfile}/>
                        <label for="file">
                            Upload
                        </label>
                </div>
                
                <div id='mm'>
                  
                    <h3>{user.name}</h3>
                </div>
                <div id='oo'>
                <input type="text" placeholder='&nbsp; Edit Name' ref={name}/>
                <button onClick={changename}>Edit</button>
                </div>

                <div id='mm'>
                  
                  <h3>{user.email}</h3>
              </div>

                <div id='oo'>
                <input type="text" placeholder='&nbsp; Edit Email' ref={mail}/>
                <button onClick={changemail}>Edit</button>
                </div>

                <div >
                  <h3>* Write Somenthing About You</h3>
              </div>

              <textarea name="About" id="koo" cols="30" rows="8" placeholder='&nbsp;Write here..' value={mes} onChange={handlecomment}></textarea>

             <button id='ev' onClick={changebio}>Save Changes</button>

            <h4 id='del'>Delete Account</h4>


                </div>}

            {save && <div id='rakh'>
                <h2>Blogs Saved By You</h2>
                {/* <Latest></Latest> */}
                
                </div>}
               


            </div>
            <div id='settings'>
                   <div id="mamu">
                        <div id="pop">
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <div id='dd'>
                           <h3>@{user.name}</h3>
                          
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