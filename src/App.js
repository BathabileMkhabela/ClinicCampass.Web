import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/Register';
import Login from './screens/Login'
import Forgotp from './screens/Forgotp';
import Landingpage from './screens/Landingpage';
import Doctorslogin from './screens/Doctorslogin';





import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/Forgotp' element={<Forgotp />} />
        <Route exact path='/LandingPage' element={<Landingpage />} />
        <Route exact path='/Doctorslogin' element={<Doctorslogin />} />
       
      </Routes>
    </Router>
  );
}
export default App;
