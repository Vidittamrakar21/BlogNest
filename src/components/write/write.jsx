import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState,useContext,useRef,useEffect } from 'react';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';


function Write () {

    const [name, setname] = useState("");
    const [id, setid] = useState("");
    const [allow, setallow] = useState(false);
    
    const a = useContext(checkcontext);
    const checkccokie = async () => {
        const check = await(await axios.get('/check')).data;
        if(check){
         if(check.message === 'declined'){
          console.log("unauthorized")
          setallow(false)
         }
     
         else{
           console.log(check);
          setname(check.name);
          setid(check.id);
          setallow(true);
         }
        } 
       }

       useEffect(()=> {
        checkccokie()
      },[])

    const [value, setvalue] = useState("");

    const title = useRef();
    const url = useRef();
    const btype = useRef();

    const post = async () => {
        if(allow){
            const data = await (await axios.post('/api/post',{title: title.current.value, image: url.current.value, btype: btype.current.value,content: value, createdby: name, userid: id})).data;
            if(data){
               alert(data.message);
               console.log(data.blog);
            }
        }

        else{
            alert("Kindly login first, to continue!")
        }
    }



return(
    <div id="wt">
        <h1 id='guga'>Write A Blog !</h1>
        <input type="text" placeholder='&nbsp;Blog Title' className='link' ref={title}/>
        <input type="text" placeholder='&nbsp; Put the link of an image' className='link' ref={url}/>
        <input type="text" placeholder='&nbsp; Blog Type - lifestyle /tech /food / entrepreneurship' className='link' ref={btype}/>
        <div id='editor'>
           <ReactQuill value={value} onChange={setvalue}></ReactQuill>
        </div>

        <button id='publish' onClick={post}>Post</button>


    </div>
)

}

export default Write;