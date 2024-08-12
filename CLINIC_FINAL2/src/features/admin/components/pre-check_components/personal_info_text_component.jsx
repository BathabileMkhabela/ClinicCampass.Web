export default function PrecheckPersonalInfoText({title,data}){
    return(
        <div className="precheck_presonalInfo_text_container">
            <div className="precheck_pInfo_text_title">
                <p>{title}</p>
            </div>
            <div className="precheck_pInfo_text_data">
                 <p>{data}</p>   
            </div>
        </div>
    );
}