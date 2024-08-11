import useUrgencyLevelStore from "../../../states/states";
import '../../../../styles/admin_styles.css';
export default function UrgencyLevelRadioBtn(){
    return(
        <div className="urgencyLvlRadio_Container"> 
            <div className="level_container lvl_containers">
                <div className="level1_indicator lvl_indicator"></div>
                <div className="level1_title lvl_title"><p>Critical</p></div>
            </div>
            <div className="level2_container lvl_containers">
                <div className="level2_indicator lvl_indicator"></div>
                <div className="level2_title lvl_title" ><p>Old</p></div>
            </div>
            <div className="level3_container lvl_containers">
                <div className="level3_indicator lvl_indicator"></div>
                <div className="level3_title lvl_title"><p>Neutral</p></div>
            </div>
        </div>
    );
}