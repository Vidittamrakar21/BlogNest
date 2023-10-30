import Latest from "../latest/latest";
import { useEffect, useState ,useContext} from "react";
import axios from "axios";
import checkcontext from "../../context/checkcontext";

function User (props) {
    
    const a = useContext(checkcontext);
    const [arr, setarr] = useState([]);
    const [postdata, setpostdata] = useState([]);    
    const [count, setcount] = useState(1);

    
  

    const getuser = async () => {
       
        const _id =  localStorage.getItem("userId");
        const udata = await(await axios.post('/api/getuser', {id: _id}) ).data;
        if(udata){
            const data = await(await axios.get(`/api/oneb/${(udata.blogposted)[a.post]}`)).data;
            if(data){
                console.log("data",data)
                setarr((prev)=> [...prev, data])
                
                if(a.post < 4){
                   await a.setdata()
                    getuser()
                    
        
                }
                console.log(arr)
            }
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
                            <img src="/images/vid.jpg" alt="" />
                        </div>
                        <div id='ff'>
                           <h2>@{props.name}</h2>
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
                        <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
                    )
                   }):<><h2>No blog posted yet!</h2></>}
                </div>
        </div>
    )
}

export default User;