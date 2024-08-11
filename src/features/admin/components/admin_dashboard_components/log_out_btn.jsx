import { useNavigate } from 'react-router-dom';
export default function LogOutButton(){
    const navigate = useNavigate();
    return(
        <>
            <button type="button" className="log_out_button" onClick={()=>navigate('/')}>Logout</button>
        </>
    );
}