
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';
import Login from './components/login/login';
import Blog from './components/blog/blog';
import Checkstate from './context/checkstate';
import Footer from './components/footer/Footer';
import Profile from './components/profile/profile';


function App() {
  return (
      <Checkstate>
    <div className="App">
          <Navbar></Navbar>
          <Login></Login>
          {/* <Profile></Profile> */}
          {/* <Home></Home> */}
          <Blog></Blog>
          <Footer></Footer>
    </div>
      </Checkstate>
  );
}

export default App;
