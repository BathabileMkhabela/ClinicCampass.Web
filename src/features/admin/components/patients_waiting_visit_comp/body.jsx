import H1titleComponent from "../../../components/h1_title_component";
import "../../../../styles/admin_styles.css"
import UrgencyLevelComp from "./urgency_level_component";
import PatientsListTableComp from "./patients_list_table";
export default function BodyComponent(){
    return(
        <div className="patients_list_container">
            <div className="title_urgencyLevel_container">
                <UrgencyLevelComp/>
                <div className="title_container">
                    <H1titleComponent title={"Patients List"}/>
                </div>
            </div>
            <div className="patients_list_table_container">
                <PatientsListTableComp/>
            </div>
        </div>
    );
}