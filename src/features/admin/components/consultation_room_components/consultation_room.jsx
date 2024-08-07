import ConsultationRoomTableRows from "./consultation_room_tableRows";
import '../../../../styles/admin_styles.css'
export default function ConsultationRoomTable(){
    return(
        <>
        <div className="table_container consTable">
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
            <ConsultationRoomTableRows/>  <ConsultationRoomTableRows/>
            

        </table>
        </div>
        </>
    );
}