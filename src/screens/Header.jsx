import { Link } from "react-router-dom";
import logo from './logo.jpeg'
function Header() {

    return (<div id="header">
        <nav className="navbar">

            <div className="nav-brand">
            <img src={logo}alt="logo"height={50}/>
            <h2 className="heading">ClinicCompass</h2>
        </div>

        <div className="nav-links">
        <Link to='/login' className="nav_button">Login</Link> 
        <Link to='/About'  className="nav_button">About</Link>
       
        </div>

        {
            /*Scottish Ngema*/
        }
       
        </nav> 
    </div>)


}

export default Header;