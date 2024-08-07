import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/Register';
import Login from './screens/Login';
import AddDoc from './screens/AddDoc';
import CreateP from './screens/CreateP';
import ConfirmBooking from './screens/ConfirmBooking';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClinicReg from './screens/ClinicReg';
import RegDone from './screens/RegDone';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/addDoc' element={<AddDoc />} />
        <Route exact path='/createPassword' element={<CreateP/>} />
        <Route exact path= '/confirmBooking' element={<ConfirmBooking/>} />
        <Route exact path='/clinicReg' element={<ClinicReg/>} />
        <Route exact path='/regDone' element={<RegDone/>} />
      </Routes>
    </Router>
  );
}
export default App;
