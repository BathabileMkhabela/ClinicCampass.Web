import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ConfirmPassword from './screens/ResetPassword';
import Login from './screens/Login';
import About from './screens/About';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ResetPassword/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/About' element={<About />} />
        
      </Routes>
    </Router>
  );
}
export default App;
