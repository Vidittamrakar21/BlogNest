import Latest from "../latest/latest";
import { useEffect, useState ,useContext} from "react";
import axios from "axios";
import checkcontext from "../../context/checkcontext";
import PulseLoader from "react-spinners/PulseLoader";
import ClipLoader from "react-spinners/ClipLoader";


function User (props) {
    
    const a = useContext(checkcontext);
    const [arr, setarr] = useState([]);
    const [userdata, setuserdata] = useState([]);    
    const [count, setcount] = useState(1);
    const [loading ,setloading] = useState(true);
    const [uid , setid ] = useState("");

    
  

    const getuser = async () => {
       
        const _id =  localStorage.getItem("userId");
        const udata = await(await axios.post('/api/getuser', {id: _id}) ).data;
        if(udata){
            setarr(udata.blogposted);
            setid(udata._id);
            setuserdata(udata);
            setloading(false)
        }

        else{
            console.log("unable to fetch data ")
        }
    }

    const deletepost = async (x,y) => {
        const popup = window.confirm("Are you sure , you want to delete this blog ?");
        if(popup){
            const user = await (await axios.delete(`/api/blog/delete/${x}`)).data;
            const uvi = await axios.patch('/api/blog/deletefromuser',{uid: uid , bid: y})
            if (user.message){
                alert(user.message);
            }

        }
    }
   


    useEffect(()=>{
       getuser() 
      
    },[])

  

    return (
        <div id="nand">
            <div id="about">
                    <div id="namu">
                        <div id="oop">
                            <img src={userdata.image? `/images/${userdata.image}`: "/images/user.png"} alt="" />
                        </div>
                        <div id='ff'>
                          
                          <h2>@{props.name}</h2>
                           <PulseLoader
                              color="#454848"
                              margin={2}
                              size={10}
                              loading={a.post}
                            />
                            {/* <button id="follow">Follow</button> */}
                        </div>
                    </div>

                    <div id="me">
                        <h3>About Me</h3>
                        <p>{props.about? `${props.about}`: "Write something about yourself !"}</p>
                    </div>

                    <div id="num">
                        {/* <h3>104 Followers</h3> */}
                        <h3>Blogs posted</h3>
                    </div>
                    
                </div>
                <div id="posts">
                   {arr.length>0?arr.map((item)=>{
                    return(
                        <>
                         <div id="threedots"onClick={()=>{deletepost(item._id, item)}}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" class="bi bi-three-dots" viewBox="0 0 16 16">
                             <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                             </svg>
                         </div>
                         <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
                       </>
                    )
                   }):<><h2>No blog posted yet!</h2></>}

                   <ClipLoader color="#36bdd6" loading={loading} cssOverride={{ position: 'absolute', bottom: '120px'}}/>
                </div>
        </div>
    )
}

export default User;