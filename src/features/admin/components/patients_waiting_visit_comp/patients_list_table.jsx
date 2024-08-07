import PatientsListTableRowComp from "./patients_list_table_row_comp";
import PatientListActionBtnsComp from './patient_list_actionbtn_comp';
import usePatientListRowStore from "../../states";
export default function PatientsListTableComp(){
    const patientsListRow = usePatientListRowStore((state)=> state.patientsListRow);
    return(
        <div className="table_container">
            <table className="patients_list_table">
            <tr className="table_header">
                <th>NO</th>
                <th>Urgency Level</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Cell Number</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Action</th>
            </tr>
          {patientsListRow}
       
          
        </table>
        </div>
        
       
    );
}