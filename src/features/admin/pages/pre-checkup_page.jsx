import TopHomeHeader from "../../components/header";
import H1titleComponent from "../../components/h1_title_component";
import PrecheckInfoContainer from "../components/pre-check_components/precheck_info_container";
import PrecheckTitle from "../components/pre-check_components/precheck_title";
export default function PreCheckupPage(){
    return(
        <div className="precheckup_page">
            <TopHomeHeader/>
            <div className="admin_title"> 
            <H1titleComponent title={"Pre-checkup"}/>
            </div>
            <div className="checkup_container">
                
                <div className="patients_personal_info_container">
               
                </div>
               
                <div className="prechecking_container">
                
                </div>
            </div>
        </div>
    );
}