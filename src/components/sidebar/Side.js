
import './side.css';


function Side(props){

  

    return(
        <div className={`sidebar ${ props.kaam === false ? "fuu" : ""}`}>

        <div id="cat" >
           <h4>Categories</h4>
        </div>            

       {/* <Link to={"/settings"} className='linker'> */}
        <div id="setting" className='dib'>
           <h4>Lifestyle</h4>
        </div>
       {/* </Link> */}

        <div className='dib' >           
                <h4>Tech</h4>
        </div>

         {/* <Link to={"/profile"} className='linker'> */}
         <div className='dib'>
           
           <h4>Food</h4>
        </div>
         {/* </Link> */}  

          {/* <Link to={"/profile"} className='linker'> */}
          <div  className='dib'>
           
           <h4>Entrepreneurship</h4>
        </div>
         {/* </Link> */}  

          {/* <Link to={"/profile"} className='linker'> */}
          <div id="out"  className='dib'>
           
           <h4>Profile</h4>
        </div>
         {/* </Link> */}  

    </div>
    );
   
}

export default Side;