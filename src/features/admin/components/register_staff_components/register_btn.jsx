import { useNavigate } from 'react-router-dom';
export default function RegisterNewStaffBtn(){
    const navigate = useNavigate();
    return(
        <div className="register_new_staffBtn">
            <button type="button" onClick={()=>navigate('/register-verification')}>Register</button>
        </div>
    );
}