import {
   BrowserRouter as Router, 
   Routes, 
   Route
 } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Developpeur';
import Home from './pages/Home';
import Service from './pages/Service';
import Layouts from './layouts/Layouts';
import Busines from './pages/Busines';
import Developpeur from './pages/Developpeur';


function App() {
      return(
            <Router>
               <Layouts>
                  <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/busines" element={<Busines/>}></Route>
                        <Route path="/service" element={<Service/>}></Route>
                        <Route path="/developer" element={<Developpeur/>}></Route>
                  </Routes>
               </Layouts>
            </Router>
   
      );
}

export default App;
