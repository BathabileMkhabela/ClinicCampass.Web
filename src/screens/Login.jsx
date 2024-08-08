
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import Header from './Header';

function Login() {
    const user = [
        { practice: "kekana@gmail.com", password: '123zxc@Z' },
        { practice: 'nkosana@gmail.com', password: '123zxc@Z' }
    ];

    const [Practice, setPractice] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        var isFound = false;
        for (var k = 0; k < user.length; k++) {
            if (user[k].practice === Practice && user[k].password === Password) {
                isFound = true;
                break;
            }
        }

        if (isFound) {
            toast.success("Login successfully");
            navigate('/about'); // Navigate to the About page
        } else {
            toast.warn("User not found");
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="log-group">
                    <h2>Nurse Login</h2>
                    <div className="form-group">
                        <input
                            placeholder="Practice Number"
                            type="practice"
                            onChange={(event) => setPractice(event.target.value)}
                            className="control-form"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Password"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            className="control-form"
                        />
                    </div>
                    <div className="button">
                        <div className="form-group">
                            <button onClick={login} className="login-btn">Login</button>
                        </div>
                    </div>
                    <div className="forgot-group">
                        <Link to='/ConfirmPassw' className="nav_button">Forgot Password?</Link>
                        <Link to='/confirmPassword' className="nav_button">Reset Password?</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
