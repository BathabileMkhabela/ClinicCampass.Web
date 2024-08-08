import H1titleComponent from "../../../components/h1_title_component";
import '../../../../styles/admin_styles.css';
import SubTitle from "../../../components/sub_title_comp";
import ConsultationRoomTable from "./consultation_room";
import PatientsListTableComp from "../patients_waiting_visit_comp/patients_list_table";
import BackButton from "../patients_waiting_visit_comp/back_button_comp";
import ViewAllBtnComp from "./view_all_btn_Comp";
export default function ConsultationRoomBody(){
    return(
        <div className="pages">
         
                 <H1titleComponent title={"Consultation Room"}/>
                <SubTitle subtitle={"Doctore/Nurse Information"}/>
                <ConsultationRoomTable />
                <div className="back_btn btnFlex">
                <BackButton/>
                <ViewAllBtnComp/>
                </div>
           

        </div>
    );
}