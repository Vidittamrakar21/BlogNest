import Checkcontext from './checkcontext';
import { useState } from "react";

const Checkstate = (props) =>{

    const [log, logit] = useState(false);
    const [com, comit] = useState(false);

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
   
    

   return (
    <Checkcontext.Provider value={{openlog, closelog,opencom,closecom,com,log}}>
        {props.children}
    </Checkcontext.Provider>
   ); 
}

export default Checkstate;