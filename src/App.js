
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';
import Login from './components/login/login';
import Blog from './components/blog/blog';
import Checkstate from './context/checkstate';
import Footer from './components/footer/Footer';
import Profile from './components/profile/profile';
import Write from './components/write/write';
import User from './components/user/user';
import Life from './components/home/life';
import Tech from './components/home/tech';
import Food from './components/home/food';
import Entre from './components/home/entre';
import Search from './components/search/search';
import Other from './components/user/other';


import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';



function App() {

  
  

  return (
    <Router>

      <Checkstate>
    <div className="App">
          <Navbar></Navbar>
         
          
        <Routes>
            
          <Route exact path='/' element={<><Home/>  <Login></Login> </>}></Route> 
          <Route exact path='/life' element={<><Life/>  <Login></Login> </>}></Route> 
          <Route exact path='/tech' element={<><Tech/>  <Login></Login> </>}></Route> 
          <Route exact path='/food' element={<><Food/>  <Login></Login> </>}></Route> 
          <Route exact path='/entre' element={<><Entre/>  <Login></Login> </>}></Route> 
          <Route exact path='/profile' element={<><Profile/>  <Login></Login> </>}></Route> 
          <Route exact path='/search' element={<><Search/>  <Login></Login> <Footer></Footer></>}></Route> 
          
                 
          <Route exact path='/blog/:id' element={<><Blog/> <Login></Login> <Footer></Footer></>}></Route>

          <Route exact path='/write' element={<><Write/>  <Footer></Footer></>}></Route>  

          <Route  path='/user' element={<><User/>  <Footer></Footer></>}></Route>  
          <Route  path='/other' element={<><Other/>  <Footer></Footer></>}></Route>  

        </Routes>  
       
    </div>
      </Checkstate>
    </Router>
  );
}

export default App;
