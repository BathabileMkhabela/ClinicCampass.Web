import H1titleComponent from "../../../components/h1_title_component";
import "../../../../styles/admin_styles.css"
import UrgencyLevelComp from "./urgency_level_component";
import PatientsListTableComp from "./patients_list_table";
import BackButton from "./back_button_comp";
import BackIconComp from "./back_icon_comp";

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
              <div className="back_btn">{<BackButton/>}</div>
        </div>
    );
}