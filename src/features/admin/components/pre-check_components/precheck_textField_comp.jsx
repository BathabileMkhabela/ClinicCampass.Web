export default function PrecheckTextFieldComp({id,labelID,placeholder,label}){
    return(
        <div className="precheckTextField_container">
        <label for={id} id={labelID}
          >{label}</label>
        <input type="text" id={id} placeholder={placeholder}
        />
        </div>
    );
}