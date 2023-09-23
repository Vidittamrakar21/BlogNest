import Checkcontext from './checkcontext';
import { useState } from "react";

const Checkstate = (props) =>{

    const [log, logit] = useState(false);
    const [com, comit] = useState(false);
    const [side, oside] = useState(false);


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

    const openside = (x) => {
       if(x === 0){
           oside(true);
          

       }
       else if(x === 1){
        oside(false);
       }
    
    }
   
    

   return (
    <Checkcontext.Provider value={{openlog, closelog,opencom,closecom,openside,side,com,log}}>
        {props.children}
    </Checkcontext.Provider>
   ); 
}

export default Checkstate;