 import usePatientListRowStore from "../../../states/states";
 import "../../../../styles/admin_styles.css"
 export default function ViewStaffTableComp(){
     const staffRows = usePatientListRowStore((state)=>state.viewStaffRow);
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
                 <th>Action</th>
             </tr>
             {staffRows}
            

         </table>
         </div>
     );
 }