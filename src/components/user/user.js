import Latest from "../latest/latest";
import { useEffect, useState } from "react";
import axios from "axios";

function User (props) {
    
    const [arr, setarr] = useState([]);

    const num = localStorage.getItem("arr");


    const showblogs = async () =>{
        
        const data = await(await axios.get(`/api/oneb/${num[0]}`)).data;
        if(data){
            setarr(arr.concat(data))
            console.log(arr)
        }
    }

    useEffect(()=>{
        showblogs()
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
                   {arr.length>1?arr.map((item)=>{
                    return(
                        <Latest title = {item.title} image = {item.image} create = {item.createdby} id= {item._id} likes = {item.likes} comments = {item.comments} date ={item.date}></Latest>
                    )
                   }):<><h2>No blog posted yet!</h2></>}
                </div>
        </div>
    )
}

export default User;