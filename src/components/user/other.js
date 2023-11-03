import Latest from "../latest/latest";
import { useEffect, useState ,useContext} from "react";
import axios from "axios";
import checkcontext from "../../context/checkcontext";
import PulseLoader from "react-spinners/PulseLoader";
import ClipLoader from "react-spinners/ClipLoader";


function Other () {
    
    const a = useContext(checkcontext);
    const [arr, setarr] = useState([]);
    const [userdata, setuserdata] = useState([]);    
    const [loading ,setloading] = useState(true);

    
  

    const getuser = async () => {
       
        // const _id =  localStorage.getItem("userId");
        const udata = await(await axios.post('/api/getuser', {id: a.userid}) ).data;
        if(udata){
            setarr(udata.blogposted);
            setuserdata(udata)
            setloading(false)
        }

        else{
            console.log("unable to fetch data ")
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
                          
                          <h2>@{userdata.name}</h2>
                           <PulseLoader
                              color="#454848"
                              margin={2}
                              size={10}
                              loading={loading}
                            />
                            {/* <button id="follow">Follow</button> */}
                        </div>
                    </div>

                    <div id="me">
                        <h3>About Me</h3>
                        <p>{userdata.about? `${userdata.about}`: "Here for today : )"}</p>
                    </div>

                    <div id="num">
                        {/* <h3>104 Followers</h3> */}
                        <h3>Blogs posted</h3>
                    </div>
                    
                </div>
                <div id="posts">
                   {arr.length>0?arr.map((item)=>{
                       return(
                           <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
                         )
                     }):<><h2>No blog posted yet!</h2></>}

                   <ClipLoader color="#36bdd6" loading={loading} cssOverride={{ position: 'absolute', bottom: '120px'}}/>
                </div>
        </div>
    )
}

export default Other;