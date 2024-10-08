import usePatientListRowStore from "../../../states/states";
export default function PatientsListTableComp(){
    const patientsListRow = usePatientListRowStore((state)=> state.patientsListRow);
    return(
        <div className="table_container">
            <table className="patients_list_table all_table">
            <tr className="table_header all_table_header">
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