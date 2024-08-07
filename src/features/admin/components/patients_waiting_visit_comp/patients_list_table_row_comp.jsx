import '../../../../styles/admin_styles.css';

export default function PatientsListTableRowComp({no="1",urgLvl="",name="Mpho",surname="manaka",cellnum="0789987548",appointmentDate="12/08/2024",appointmentTime="14:45",actionBtns}){
    return(
             <tr className="table_row">
                 <td>{no}</td>
                 <td>{urgLvl}</td>
                 <td>{name}</td>
                 <td>{surname}</td>
                 <td>{cellnum}</td>
                 <td>{appointmentDate}</td>
                 <td>{appointmentTime}</td>
                 <td>{actionBtns}</td>
            </tr>
        
    );
}