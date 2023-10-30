import Checkcontext from './checkcontext';
import { useState } from "react";

const Checkstate = (props) =>{

    const [log, logit] = useState(false);
    const [com, comit] = useState(false);
    const [side, oside] = useState(false);
    const [value, savevalue] = useState("");
    const [bdata, store] = useState([]);
    const [loading, isloading] = useState(false);
    const [post, setpost] = useState(0);



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

    const storeblog = (data) => {
        store(data);
    }

    const loader = (x) =>{
        isloading(x);
    }

    const setdata = () =>{
        setpost((prev)=> prev + 1);
    }
    

   return (
    <Checkcontext.Provider value={{setdata,openlog, closelog,opencom,closecom,openside, closeside,saveblog,savevalue, storeblog,store,loader,loading,bdata,value,side,com,log,post}}>
        {props.children}
    </Checkcontext.Provider>
   ); 
}

export default Checkstate;