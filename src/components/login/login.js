import './login.css';
import{useState , useContext} from 'react';
import checkcontext from '../../context/checkcontext';



function Login(){
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
            <input type="text" className="inp" placeholder='&nbsp;Enter Email'/>
            <input type="text" className="inp" placeholder='&nbsp;Enter Password'/>
            <button id="put">Log In</button>
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
            <input type="text" className="inp" placeholder='&nbsp;Enter Name'/>
            <input type="text" className="inp" placeholder='&nbsp;Enter Email'/>
            <input type="text" className="inp" placeholder='&nbsp;Enter Password'/>
            <input type="text" className="inp" placeholder='&nbsp; Confirm Password'/>
            <button id="put">Sign Up</button>
            
            <div id='noac'>
            <h5 onClick={displaylog}>Already  have an account ? <br /><span> Log In</span></h5>
         
            </div>
        </div>}

    </div>
    
    </>
   ) 
}

export default Login;