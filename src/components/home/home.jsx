import './home.css'
import Latest from '../latest/latest';
import Trend from '../trend/trend';

function Home (){
    return (
        <div id='home'>
           <div id="latest">
            <h1 className='juu'>For You</h1>
           
           <Latest></Latest>
            <Latest></Latest>
            <Latest></Latest>
            <Latest></Latest>
           
           </div>
           <div id="trending">
            <h1 className='juu'>Trending</h1>
            <div id='flow'>
            <Trend></Trend>
            <Trend></Trend>
            <Trend></Trend>
            <Trend></Trend>
            </div>
            </div> 
        </div>
    )
}

export default Home;