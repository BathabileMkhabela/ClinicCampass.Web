export default function TextFieldComponent({name,label,placeholder,type}){
    return(
        <div className="textfield_container">
             <label for={name}><b>{label}</b></label>
             <input type={type} placeholder={placeholder} name={name} required/>
        </div>
    );
}