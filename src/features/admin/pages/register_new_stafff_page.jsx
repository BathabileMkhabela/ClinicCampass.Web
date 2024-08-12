import H1titleComponent from "../../components/h1_title_component";
import TopHomeHeader from "../../components/header";
import SelectCinicDropDownField from "../components/register_staff_components/selectClinic_dropdownTextField";
import StaffRegistrationContainer from "../components/register_staff_components/registration_container";
export default function RegisterNewStaffPage(){
    return(
        <div className="register_new_staff_page_container">
           
            <TopHomeHeader/>
            <H1titleComponent title={"Register new Doctor/Nurse"}/>
            <SelectCinicDropDownField/>
            <StaffRegistrationContainer/>
        </div>
    );
}