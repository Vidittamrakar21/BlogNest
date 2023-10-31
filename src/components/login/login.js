import './login.css';
import{useState , useContext, useRef} from 'react';
import checkcontext from '../../context/checkcontext';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";


function Login(){

    const [loading, isloading] = useState(false);

    const a = useContext(checkcontext);

    const [open, openit] = useState(false);

    const displaysign = () => {
        openit(true);
    } 

    const displaylog = () => {
        openit(false);
    } 

    const remove = () => {
        a.closelog();
    } 

    const uname = useRef();
    const mail = useRef();
    const pass = useRef();
    const confirmpass = useRef();

    const apass = useRef();
    const amail = useRef();

    const registeruser = async () =>{
        isloading(true);
        if(pass.current.value !== confirmpass.current.value){
            
            isloading(false);
            const stopload = () =>{
                alert("Confirm password dosen't matches with the entered password!");
                uname.current.value="";
                mail.current.value="";
                pass.current.value="";
                confirmpass.current.value="";
            }

            setTimeout(stopload,800);
            
        }

        else{
            const user  = await(await axios.post('/api/register', {name: uname.current.value, email: mail.current.value, password: confirmpass.current.value})).data;
            if(user){
                
                isloading(false);
                const stopload = () =>{
                    alert(user.message);
                    uname.current.value="";
                    mail.current.value="";
                    pass.current.value="";
                    confirmpass.current.value="";
                }

                setTimeout(stopload,800);
                
            }
        }

    }

    const loginuser = async () => {
        isloading(true);
        const user  = await(await axios.post('/api/login', { email: amail.current.value, password: apass.current.value})).data;
            if(user){
                isloading(false);
                const stopload = () =>{
                    alert(user.message);
                    localStorage.setItem("userId", (user.existuser)._id)
                    a.closelog();
                    amail.current.value="";
                    apass.current.value="";

                }

                setTimeout(stopload,800);
                
            }
    }



   return(
    <>
    <div id="outer" className={`${!a.log ? "hide" : ""}`}>
       {!open &&  <div id="log">
            <div id='cross' onClick={remove}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-x" viewBox="0 0 16 16">
             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
             </svg>
            </div>
            <h2>Log In To Continue</h2>
            <input type="text" className="inp" placeholder='&nbsp;Enter Email' ref={amail}/>
            <input type="password" className="inp" placeholder='&nbsp;Enter Password' ref={apass}/>
            <button id="put" onClick={loginuser}>Log In</button>
            <ClipLoader color="#36bdd6" loading={loading} cssOverride={{ position: 'absolute', bottom: '70px'}}/>
            <div id="rem">
                <h5>Remember My Login ?</h5>
                <input type="checkbox" checked={true} />
            </div>
            <div id='noac'>
            <h5 onClick={displaysign}>Don't have an account ? <br /><span> Sign Up</span></h5>
            <h5 id='pas'>Forgot Password?</h5>
            </div>
        </div>}

        {open &&  <div id="sign">
            <div id='cross' onClick={remove}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-x" viewBox="0 0 16 16">
             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
             </svg>
            </div>
            <h2>Create an account</h2>
            <input type="text" className="inp" placeholder='&nbsp;Enter Name' ref={uname}/>
            <input type="text" className="inp" placeholder='&nbsp;Enter Email' ref={mail}/>
            <input type="password" className="inp" placeholder='&nbsp;Enter Password' ref={pass}/>
            <input type="password" className="inp" placeholder='&nbsp; Confirm Password' ref={confirmpass}/>
            <button id="put" onClick={registeruser}>Sign Up</button>
            <ClipLoader color="#36bdd6" loading={loading} cssOverride={{ position: 'absolute', bottom: '60px'}}/>
            <div id='noac'>
            <h5 onClick={displaylog}>Already  have an account ? <br /><span> Log In</span></h5>
         
            </div>
        </div>}

    </div>
    
    </>
   ) 
}

export default Login;