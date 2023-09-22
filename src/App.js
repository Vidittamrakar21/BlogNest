
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
          <Route exact path='/profile' element={<><Profile/>  <Login></Login> </>}></Route> 
          
                 
          <Route exact path='/blog' element={<><Blog/> <Login></Login> <Footer></Footer></>}></Route>

          <Route exact path='/write' element={<><Write/>  <Footer></Footer></>}></Route>  

          <Route exact path='/user' element={<><User/>  <Footer></Footer></>}></Route>  

        </Routes>  
       
    </div>
      </Checkstate>
    </Router>
  );
}

export default App;
