import "../../../../styles/admin_styles.css";
export default function SelectCinicDropDownField(){
    return(
    <div className="select_clinic_dropdownField">

     <label>
        Select your clinic
     </label>
       <select>
         <option value="clinic1">KwaMhlanga Clinic (1022, Kwamahlanga-Ia, KwaMhlanga)</option>

         <option value="clinic2">Kwaggafontein Clinic (Masilela St, Kwaggafontein-C, Kwaggafontein)</option>
       </select>


   </div>
    );
}