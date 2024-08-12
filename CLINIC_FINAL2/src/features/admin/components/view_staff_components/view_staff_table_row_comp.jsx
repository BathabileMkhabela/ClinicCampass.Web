import "../../../../styles/admin_styles.css";
import ViewStaffManageBtnComp from "./view_staff_manage_btn";
export default function ViewStaffTableRow({roomNo="01",name="Mpho",surnam="",cellNumber="",appDateTime="",specialty="",designation="",status="",action}){
    return(
        <>
               <tr className="table_row">
                 <td>{roomNo}</td>
                 <td>{name}</td>
                 <td>{surnam}</td>
                 <td>{cellNumber}</td>
                 <td>{appDateTime}</td>
                 <td>{specialty}</td>
                 <td>{designation}</td>
                 <td>{status}</td>
                 <td>{<ViewStaffManageBtnComp/>}</td>
            </tr>
        
        </>
    );
}