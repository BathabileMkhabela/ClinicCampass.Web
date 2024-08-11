import ConsultationRoomTableRows from "./consultation_room_tableRows";
import '../../../../styles/admin_styles.css';
import usePatientListRowStore from "../../../states/states";
export default function ConsultationRoomTable(){
    const consultationRoomTableRows = usePatientListRowStore((state)=>state.consultationStaffRow);
    return(
        
        <div className="table_container consTable">
            <table className="patients_list_table all_table">
            <tr className="table_header all_table_header">
                <th>Room No.</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Cell Number</th>
                <th>Appointment Date&Time</th>
                <th>Specialty</th>
                <th>Designation</th>
                <th>status</th>
            </tr>
            {consultationRoomTableRows}
            

        </table>
        </div>
       
    );
}