import PatientsListTableRowComp from "./patients_list_table_row_comp";
import PatientListActionBtnsComp from './patient_list_actionbtn_comp';

export default function PatientsListTableComp(){
    return(
        <>
        <table className="patients_list_table">
            <tr>
                <th>NO</th>
                <th>Urgency Level</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Cell Number</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Action</th>
            </tr>
          <PatientsListTableRowComp actionBtns={<PatientListActionBtnsComp/>}/>
          <PatientsListTableRowComp urgLvl="urgencyLevelClassColorOld"/>
          <PatientsListTableRowComp urgLvl="urgencyLevelClassColorNeutral"/>
          
        </table>
        </>
    );
}