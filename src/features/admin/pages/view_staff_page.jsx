/*import TopHomeHeader from "../../components/header";*/
import H1titleComponent from "../../components/h1_title_component";
import SubTitle from "../../components/sub_title_comp";
import ViewStaffTableComp from "../components/view_staff_components/view_staff_table_comp";
import ViewStaffBackBtnComp from "../components/view_staff_components/view_staff_backBtn_comp";
export default function ViewStaffPage(){
    return(
        <div className="viewStaff_container">
            
            <H1titleComponent title={"View Nurses/Doctors"}/>
            <SubTitle subtitle={"Doctors/Nurse’s Information"}/>
            <ViewStaffTableComp/>
            <ViewStaffBackBtnComp/>

        </div>
    );
}