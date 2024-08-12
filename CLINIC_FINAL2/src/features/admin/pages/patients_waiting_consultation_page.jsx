/*import TopHomeHeader from "../../components/header";*/
import BodyComponent from "../components/patients_waiting_visit_comp/body";
import Modal from "../../components/modal/modal";
import modalIconSrc from "../../../assets/admin_assets/icons/consult_dialog_(house)icon.svg";
import ModalIconComponent from "../components/pre-check_components/modal_components/modal_icon_component";
import ModalBodyComponent from "../components/pre-check_components/modal_components/modal_body_component";
import ModalBodyMessageComp from "../components/pre-check_components/modal_components/modal_body_message_comp";
import useOpenCloseDialogStore from "../../states/openDialogStore";
import ModalConsultRoomContainer from "../components/patients_waiting_visit_comp/modal_components/modal_consultRooms_container";
import ModalCancelAppmntBtnComp from "../components/pre-check_components/modal_components/modal_cancel_appmnt_btn";
import ModalAdminAuthPWDBodyComp from "../components/pre-check_components/modal_components/modal_adminAuthPWD_body";
export default function PatientsWaitingConsultPage(){
    function ModalType({modalTypeNUmber}){
        if(modalTypeNUmber === 3){
         return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Available consultation room:"}/>} secondBody={<ModalConsultRoomContainer/>}/>}/>;
        }else if(modalTypeNUmber === 2){
            return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Provide admin password to cancel appointment of: "}/>} secondBody={<ModalAdminAuthPWDBodyComp patientsID={"0088787745"} patientsName={"Mpho Manaka"}/>}/>} buttonsContainer={<ModalCancelAppmntBtnComp/>}/>;
        }
 
     };
     const modalTypeNumber = useOpenCloseDialogStore((state)=> state.modalNumber);
    return (
       <div className="patientsListPage"> 
        
        <BodyComponent/>
        <ModalType modalTypeNUmber={modalTypeNumber}/>
       </div>
        
        
    );
}