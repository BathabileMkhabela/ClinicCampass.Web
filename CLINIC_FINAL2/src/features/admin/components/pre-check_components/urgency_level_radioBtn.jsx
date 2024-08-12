export default function UrgencyLevelRadioBtns({id,name,value,label,inputClass}){
    return(
        <div className="urgency_level_radio_container">
          <input
            type="radio"
            name="urgency_level"
            id={id}
            value={value}
            className="urg_lvl_inline"
          />
        <label for={id}>{label}</label>
        </div>
    );
}