import { Home } from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar } from './Pages/Navbar.js';
import { Footer } from './Pages/Footer.js';
import { SeeAtAGlance } from './Pages/SeeAtAGlance.js';
import { Data_Analytics } from './Pages/Data_Analytics.js';
import { Data_Solution } from './Pages/Data_Solution.js';
import { EdTech } from './Pages/EdTech.js';
import { Healthcare } from './Pages/Healthcare.js';
import { Overview } from './Pages/Overview.js';
import { Manufacturing } from './Pages/Manufacturing.js';
import { Insurance } from './Pages/Insurance.js';

function App() {
  return (
    <div className="App">


    <Router>
      <Routes>
      <Route exact path="/"  element={<Home />}> </Route>
    <Route exact path="/home"  element={<Home />}> </Route>
    <Route exact path="/navbar"  element={<Navbar />}> </Route>
    <Route exact path="/footer"  element={<Footer />}> </Route>
    <Route exact path="/seeAt"  element={<SeeAtAGlance />}> </Route>
    <Route exact path="/Data_Analytics"  element={<Data_Analytics />}> </Route>
    <Route exact path="/Data_Solution"  element={<Data_Solution />}> </Route>
    <Route exact path="/Edtech"  element={<EdTech />}> </Route>
    <Route exact path="/healthcare"  element={<Healthcare />}> </Route>
    <Route exact path="/overview"  element={<Overview />}> </Route>
    <Route exact path="/manufacturing"  element={<Manufacturing />}> </Route>
    <Route exact path="/insurance"  element={<Insurance />}> </Route>
    </Routes>
      </Router>
     
    </div>
   
   
  );
}

export default App;
