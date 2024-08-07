import UrgencyLevelRadioBtn from "./urgency_lvl_radioBtn_comp";
export default function UrgencyLevelComp(){
    return(
        <div className="urgency_level_component">
            <p>Urgency Level</p>
            <div className="urgency_level_inner_comp">
                <UrgencyLevelRadioBtn/>
            </div>
        </div>
    );
}