import TopHomeHeader from "../../components/header";
import H1titleComponent from "../../components/h1_title_component";
import SubTitle from "../../components/sub_title_comp";
import "../../../styles/admin_styles.css";
import StaffInfoBackBtn from "../components/manage_staff_page_comp/staff_info_backBtn";
import StaffGenPWDContainer from "../components/manage_staff_page_comp/staff_genPWD_container";
import StaffInformationContainer from "../components/manage_staff_page_comp/staff_information_container";
import StaffInfoActionBtns from "../components/manage_staff_page_comp/staff_info_actionBtns_container";
import useOpenCloseDialogStore from "../../states/openDialogStore";
import ModalIconComponent from "../components/pre-check_components/modal_components/modal_icon_component";
import Modal from "../../components/modal/modal";
import ModalBodyComponent from "../components/pre-check_components/modal_components/modal_body_component";
import ModalBodyMessageComp from "../components/pre-check_components/modal_components/modal_body_message_comp";
import modalIconSrc from "../../../assets/admin_assets/icons/remove_staff_dialog_icon.svg";
import ModalYesNoBtnContainerComp from "../components/pre-check_components/modal_components/modal_yes_no_btns_container_comp";
import RemoveStaffAdminAuthBtn from "../components/manage_staff_page_comp/modal_components/remove_staff_AdminAuth_btn";
import AdminAuthPWDTextField from "../components/manage_staff_page_comp/modal_components/adminAuthPwd_textfield";
import AdminAuthGenPWDBtn from "../components/manage_staff_page_comp/modal_components/adminGenPwd_component";
export default function ManageStaffPage(){
    function ModalType({modalTypeNUmber}){
        if(modalTypeNUmber === 4){
         return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Are you sure you want to remove: StaffMemberName ?"}/>}/>} buttonsContainer={<ModalYesNoBtnContainerComp/>}/>;
        }else if(modalTypeNUmber === 2){
            return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Provide admin password to remove:"}/>} secondBody={<AdminAuthPWDTextField/>}/>} buttonsContainer={<RemoveStaffAdminAuthBtn/>}/>;
        }else if(modalTypeNUmber === 5){
            return <Modal iconContainer={<ModalIconComponent iconSrc={modalIconSrc}/>} bodyContainer={<ModalBodyComponent firstBody={<ModalBodyMessageComp bodyMessage={"Provide admin password:"}/>} secondBody={<AdminAuthPWDTextField/>}/>} buttonsContainer={<AdminAuthGenPWDBtn/>}/>;
        }
     };
     const modalTypeNumber = useOpenCloseDialogStore((state)=> state.modalNumber);
    return(
        <div className="manage_staff_page">
            <TopHomeHeader/>
            <H1titleComponent title={"Manage Doctors/Nurses"}/>
            <SubTitle subtitle={"Practice number: 88788955587"}/>
            <div className="manage_staff_body_container">
                <StaffInformationContainer/>
                <StaffGenPWDContainer/>
            </div>
            <StaffInfoActionBtns/>
            <StaffInfoBackBtn/>
            <ModalType modalTypeNUmber={modalTypeNumber}/>
        </div>
    );
}