import "../../../../../styles/modal.css"
import { useNavigate } from 'react-router-dom';

export default function ModalConsultRoomBtnComp({roomNumberDesc}){
    const navigate = useNavigate();
    return(
        <div className="modal_consultRmBtn_container">
            <button type="button" onClick={()=>navigate("/consultation-room")}>{roomNumberDesc}</button>
        </div>
    );
}