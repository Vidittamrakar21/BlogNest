import Checkcontext from './checkcontext';
import { useState } from "react";

const Checkstate = (props) =>{

    const [log, logit] = useState(false);
    const [com, comit] = useState(false);
    const [side, oside] = useState(false);
    const [value, savevalue] = useState("");


    const openlog = () => {
        logit(true);
    }
    
    const closelog = () => {
        logit(false);
    }

    const opencom = () => {
        comit(true);
    }

    const closecom = () => {
        comit(false);
    }

    const openside = () => {
        
        oside(true);

    }
    const closeside = () => {
        
        oside(false);

    }
   
    const saveblog = (v) =>{
        savevalue(v);
    }
    

   return (
    <Checkcontext.Provider value={{openlog, closelog,opencom,closecom,openside, closeside,saveblog,savevalue,value,side,com,log}}>
        {props.children}
    </Checkcontext.Provider>
   ); 
}

export default Checkstate;