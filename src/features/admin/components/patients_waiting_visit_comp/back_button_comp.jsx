import "../../../../styles/admin_styles.css"
import BackIconComp from "./back_icon_comp";
import { useNavigate } from 'react-router-dom';
export default function BackButton(){
    const navigate = useNavigate();
    return(
        <>
            <button type="button consBtn" onClick={()=>navigate('/Admin-dashboard')}><li>{<BackIconComp/>}</li>Back</button>
        </>
    );
}