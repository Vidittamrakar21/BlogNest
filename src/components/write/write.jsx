import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState,useContext,useRef } from 'react';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';


function Write () {

    const a = useContext(checkcontext);

    const [value, setvalue] = useState("");

    const title = useRef();
    const url = useRef();
    const btype = useRef();

    const post = async () => {
     const data = await (await axios.post('/api/post',{title: title.current.value, image: url.current.value, btype: btype.current.value,content: value, createdby: "vidit.dev"})).data;
     if(data){
        alert(data.message);
        console.log(data.blog);
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