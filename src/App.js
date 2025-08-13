import './App.css';
import NavScrollExample from './Components/Navigation/Nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Quote from './Components/Quote';
import Menu from './Components/Menu'
import Wave from './Components/Wave'
import InstagramLike from './Components/InstagramLike'
import MixAndRideContainer from './Components/MixRide/MixAndRideContainer';
import Resume from './Components/ResumeSection/Resume.js';
import Blog from './Components/Blog.js'
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import MRScreenController from './Components/MixRidePhone/main';


function App() {
  return (
    <BrowserRouter basename='/personal_website'>
        <div className="App">
        <NavScrollExample />
          <Routes>
                 <Route exact path='/' element={
                 <>
                  <Home />
                  <Quote />
                  
                  <Menu />
                  <Wave/>
                 </>
                }></Route>
                 <Route exact path='/professional' element={<>                        <Resume/> 
      <Wave/>
          <Footer/></>}></Route>
                 <Route exact path='/modelling_portfolio' element={<>   <InstagramLike />       <Wave/>
          <Footer/></>}></Route>
                 <Route exact path='/mix_and_ride' element={<> 
                  <div style={{backgroundColor:'#0e0f43', height:'100%'}} className={"back-background"}>
                    <MRScreenController/> 
                  </div>
                   </>}></Route>
                   <Route exact path='/blog' element={<> 
                    <Blog/> 
                   </>}></Route>

                   <Route exact path='/projects' element={<> 
                    <Projects/> 
                   </>}></Route>

          </Routes>

      </div>
    </BrowserRouter>
  );
}
export default App;


{/* <Route exact path='/about' element={< About />}></Route>
<Route exact path='/contact' element={< Contact />}></Route> */}
