import TopHomeHeader from "../../components/header";
import H1titleComponent from "../../components/h1_title_component";
import PrecheckTitle from "../components/pre-check_components/precheck_title";
import PrecheckPersonalInfoText from "../components/pre-check_components/personal_info_text_component";
import PrecheckReasonTextAreaComp from "../components/pre-check_components/pre-check_TextArea_component";
import PrecheckTextFieldComp from "../components/pre-check_components/precheck_textField_comp";
import UrgencyLevelRadioBtns from "../components/pre-check_components/urgency_level_radioBtn";
import SavePrecheckInfoBtn from "../components/pre-check_components/save_pre_checkup_infoBtn";
import CancelAppointmentButton from '../components/pre-check_components/cancel_appointment_btn';
import Modal from "../components/pre-check_components/modal";
import useOpenCloseDialogStore from "../../states/openDialogStore";
import ModalIconComponent from "../components/pre-check_components/modal_components/modal_icon_component";
import modalIconSrc from "../../../assets/admin_assets/icons/cancel_appnmt_dialog_icon.svg";
import ModalBodyComponent from "../components/pre-check_components/modal_components/modal_body_component";
import ModalBodyMessageComp from "../components/pre-check_components/modal_components/modal_body_message_comp";
import ModalYesNoBtnContainerComp from "../components/pre-check_components/modal_components/modal_yes_no_btns_container_comp";
import ModalAdminAuthPWDBodyComp from "../components/pre-check_components/modal_components/modal_adminAuthPWD_body";
import ModalCancelAppmntBtnComp from "../components/pre-check_components/modal_components/modal_cancel_appmnt_btn";
export default function PreCheckupPage(){
    /*ModalType for calling different types of modal base on the number select on buttons trigger*/
     function ModalType({modalTypeNUmber}){
       if(modalTypeNUmber === 1){
        return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Are  you sure you want to cancel this patient’s appointment(8803245945087)"}/>}/>} buttonsContainer={<ModalYesNoBtnContainerComp/>}/>;
       }else if(modalTypeNUmber === 2){
        return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Provide admin password to cancel appointment of: "}/>} secondBody={<ModalAdminAuthPWDBodyComp patientsID={"0088787745"} patientsName={"Mpho Manaka"}/>}/>} buttonsContainer={<ModalCancelAppmntBtnComp/>}/>;
       }

    };
    const setCancelationBtnModal = useOpenCloseDialogStore((state)=>state.toggleCancelPatientAppntModal);
    const modalTypeNumber = useOpenCloseDialogStore((state)=> state.modalNumber);
    return(
        <div className="precheckup_page">
            <TopHomeHeader/>
            <div className="pre_check_title"> 
                <H1titleComponent title={"Pre-checkup"}/>
            </div>
            <div className="checkup_container">
                <div>
                        <PrecheckTitle title={"Patient's Information"}/>
                    <div className="patients_personal_info_container">
                        <PrecheckPersonalInfoText title={"Queue No :"} data={"01"}/>
                        <PrecheckPersonalInfoText title={"Name :"} data={"Lethabo"}/>
                        <PrecheckPersonalInfoText title={"Surname :"} data={"Malatji"}/>
                        <PrecheckPersonalInfoText title={"ID :"} data={"025587445878"}/>
                        <PrecheckPersonalInfoText title={"Appointment DateTime :"} data={"08/08/2024 14:45"}/>
                    </div>
                    <CancelAppointmentButton openDialog={setCancelationBtnModal}/>
                    
                </div>
            <div>
                        <PrecheckTitle title={"Pre-Checking"}/>
                <div className="prechecking_container">
                        <PrecheckReasonTextAreaComp/>
                        <PrecheckTextFieldComp label={"Temperature"} id={"temp"} labelID={"temp_label"} placeholder={"Patients Temp °C"}/>
                        <PrecheckTextFieldComp label={"Blood Pressure"} id={"bp"} labelID={"bp_label"} placeholder={"Patients Bp mmHg"}/>
                    <div className="urgencyLvl_container">
                        <div className="urgency_lvl_container">
                            <p>Patient's urgency level</p>
                        </div>

                        <div className="urgencyLvl_radio_container">
                            <div className="urg_lvl_btn1">
                                <UrgencyLevelRadioBtns id={"urgencyLevel1"} name={"critical"} value={"critical"} label={"Critical"}/>
                            </div>
                            <div className="urg_lvl_btn2">
                                <UrgencyLevelRadioBtns id={"urgencyLevel2"} name={"old"} value={"old"} label={"Old"}/>
                            </div>
                        
                            <div className="urg_lvl_btn3">
                                 <UrgencyLevelRadioBtns id={"urgencyLevel3"} name={"neutral"} value={"neutral"} label={"Neutral"} />
                            </div>
                        </div>
                       
                    </div>
                 </div>
                 <SavePrecheckInfoBtn />
                </div>
            
                
            </div>
           <ModalType modalTypeNUmber={modalTypeNumber}/>
        </div>
    );
}