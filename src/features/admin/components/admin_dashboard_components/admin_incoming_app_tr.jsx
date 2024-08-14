import PreCheckButtonComp from "./pre_check_btn";
export default function IncomingAppTableRow({no="",name="",surname="",cellnum="",appointmentDate="",appointmentTime="",actionBtn}){
    return(
        <tr className="table_row">
                 <td>{no}</td>
                 <td>{name}</td>
                 <td>{surname}</td>
                 <td>{cellnum}</td>
                 <td>{appointmentDate}</td>
                 <td>{appointmentTime}</td>
                 
            </tr>
    );
}