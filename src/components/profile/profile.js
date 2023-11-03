import './profile.css';
import Latest from '../latest/latest';
import Footer from '../footer/Footer';
import User from '../user/user';
import { useState,useContext,useEffect,useRef } from 'react';
import axios from 'axios';
import checkcontext from '../../context/checkcontext';
import { useNavigate } from 'react-router-dom';

function Profile () {

    const a = useContext(checkcontext);
    const [id, setid] = useState("");
    const [user, setdata] = useState("");
    const [savedarr, setsave] = useState([]);
    const [allow, setallow] = useState(false);
    const navigate = useNavigate();


    const checkccokie = async () => {
     const check = await(await axios.get('/check')).data;
     if(check){
      if(check.message === 'declined'){
        a.openlog()
        setallow(false);
      }
  
      else{
        console.log(check);
        setid(check.id);
        setallow(true);
        a.closelog();
        
      }
     } 
    }

    
    const getuser = async () => {
        const _id = localStorage.getItem("userId");
        const udata = await(await axios.post('/api/getuser', {id: _id}) ).data;
        if(udata){
            setdata(udata);
            setsave(udata.saved);
            console.log(udata);
            a.setdata()
          
        }

        else{
            console.log("unable to fetch data ")
        }
    }

    const name = useRef();
    const mail = useRef();
   
    const changename = async () => {
       if(allow){
        const udata = await (await axios.patch('/api/updatename', {name: name.current.value, uid: id})).data;
        if (udata){
            alert(udata.message)
        }
       }

       else{
        alert("Kindly login first to continue !")
       }
    }

    const changemail = async () => {
       if(allow){
        const udata = await (await axios.patch('/api/updatemail', {mail: mail.current.value, uid: id})).data;
        if (udata){
            alert(udata.message)
        }
       }

       else{
        alert("Kindly login first to continue !")
       }
    }

    const [mes, setmes] = useState("");
    const handlecomment = (e) => {
        setmes(e.target.value);
        
    }

    const changebio = async () => {
      if(allow){
        const udata = await (await axios.patch('/api/updateabout', {bio: mes, uid: id})).data;
        if (udata){
            alert(udata.message)
            osave(false);
            opro(true);
            isedit(false);
        }
      }

      else{
        alert("Kindly login first to continue !")
      }
    }

    const logout = async () => {
       if(allow){
        const logdata = await (await axios.post('/api/user/logout')).data;
        if(logdata.message){
            localStorage.removeItem("userId")
            alert(logdata.message);
            navigate('/')
        }
       }

       else{
        alert("Kindly login first to continue !")
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

    const [file , setfile] = useState();

    const showfile = async (e) => {
      setfile( e.target.files[0])

      const formdata = new FormData()
      formdata.append('file', e.target.files[0])
     const data= await( await axios.post(`/api/upload/${user._id}`, formdata)).data;
     if(data.message){
        alert(data.message)
     }
       
      
    }

    const deleteacc = async () => {
      if(allow){
        const popup = window.confirm("NOTE: After deleting your account ,all the information, blogs posted will be removed from BlogNest, Are you sure you want to proceed? ")
        if(popup){
            const del = await (await axios.delete(`/api/user/delete/${id}`)).data;
            if(del.message){
                const logdata = await (await axios.post('/api/user/logout')).data;
                localStorage.removeItem("userId")
              
                navigate('/')
                alert(del.message)
                
            }
        }


      }

      else{
        alert("Kindly login first to continue !")
      }
    }


    return(
        <div id="pro">
            <div id='profile'>
                    {pro && <> <User name = {user.name} about = {user.about} blogs = {user.blogposted}></User> <div id="iq">  <h5 onClick={doedit}>Edit Profile</h5>
                        <h5 onClick={dosave}>Saved Blogs</h5>
                        <h5 onClick={logout}>Log Out</h5>
                        </div></>}

                {edit && <div id='ii'>
                
                <h2>Edit Profile</h2>
                
                <div id="uplo">
                       <div id="pop">
                            <img src={user.image? `/images/${user.image}`: "/images/user.png"} alt="" />
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
              <button id='newbut' onClick={changebio}>Edit</button>
             <button id='ev' onClick={dopro}>Save Changes</button>

            <h4 id='del' onClick={deleteacc}>Delete Account</h4>


           </div>}

            {save && <div id='rakh'>
                <h2>Blogs Saved By You</h2>
               {savedarr.length>0? savedarr.map((item)=>{
                return(
                    <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
                )
               }):<><h3>No Blogs Saved Yet !</h3></>}
                
                </div>}
               


            </div>
            <div id='settings'>
                   <div id="mamu">
                        <div id="pop">
                            <img src={user.image? `/images/${user.image}`: "/images/user.png"} alt="" />
                        </div>
                        <div id='dd'>
                           <h3>@{user.name}</h3>
                          
                        </div>
                    </div>

                    <div id="out">
                    <h5 onClick={doedit}>Edit Profile</h5>
                        <h5 onClick={dosave}>Saved Blogs</h5>
                        <h5 onClick={logout}>Log Out</h5>
                    </div>
                   <div  className='joot'>
                        <Footer></Footer>

                   </div>

                    
            </div>
        </div>
    )
}

export default Profile;