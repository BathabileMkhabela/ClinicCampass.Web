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
                
            </tr>
            {/* <IncomingAppTableRow no="01" surname="Malatji" name="Cindi" cellnum="08778965874" appointmentDate="25/09/2024" appointmentTime="15:30PM" actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
            <IncomingAppTableRow no="02" surname="Manamela" name="Lethabo" cellnum="06778987874" appointmentDate="22/09/2024" appointmentTime="13:30PM" actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
            <IncomingAppTableRow no="03" surname="Thabang" name="Thabo" cellnum="07878965114" appointmentDate="27/09/2024" appointmentTime="17:30PM" actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/>
            <IncomingAppTableRow no="04" surname="Seleka" name="Mpho" cellnum="06854877481" appointmentDate="16/09/2024" appointmentTime="20:30PM" actionBtn={<PreCheckButtonComp navigate={()=>navigate('/Pre-checkup')}/>}/> */}
            <IncomingAppTableRow no="01" surname="Malatji" name="Cindi" cellnum="08778965874" appointmentDate="25/09/2024" appointmentTime="15:30PM"/>
            <IncomingAppTableRow no="02" surname="Manamela" name="Lethabo" cellnum="06778987874" appointmentDate="22/09/2024" appointmentTime="13:30PM"/>
            <IncomingAppTableRow no="03" surname="Thabang" name="Thabo" cellnum="07878965114" appointmentDate="27/09/2024" appointmentTime="17:30PM" />
            <IncomingAppTableRow no="04" surname="Seleka" name="Mpho" cellnum="06854877481" appointmentDate="16/09/2024" appointmentTime="20:30PM" />  
           

           
        </table>
        </div>
    );
}