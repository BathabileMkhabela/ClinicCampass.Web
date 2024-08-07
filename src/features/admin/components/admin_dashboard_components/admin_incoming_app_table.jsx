import IncomingAppTableRow from "./admin_incoming_app_tr";
import PreCheckButtonComp from "./pre_check_btn";
import { useNavigate } from 'react-router-dom';
export default function IncomingAppointmentsTable(){
    const navigate = useNavigate();
    return(
        <div className="table_container incoming_app_table">
            <table className="patients_list_table all_table">
            <tr className="table_header all_table_header">
                <th>NO</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Cell Number</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Action</th>
            </tr>
            <IncomingAppTableRow actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
            <IncomingAppTableRow actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
            <IncomingAppTableRow actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
            <IncomingAppTableRow actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
                
           

           
        </table>
        </div>
    );
}