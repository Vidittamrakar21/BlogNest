import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

function Write () {

    const [value, setvalue] = useState("");

    const post = () => {
   
       console.log(value);
    }


return(
    <div id="wt">
        <h1 id='guga'>Write A Blog !</h1>
        <input type="text" placeholder='&nbsp;Blog Title' className='link'/>
        <input type="text" placeholder='&nbsp; Put the link of an image' className='link'/>
        <div id='editor'>
           <ReactQuill value={value} onChange={setvalue}></ReactQuill>
        </div>

        <button id='publish' onClick={post}>Post</button>


    </div>
)

}

export default Write;