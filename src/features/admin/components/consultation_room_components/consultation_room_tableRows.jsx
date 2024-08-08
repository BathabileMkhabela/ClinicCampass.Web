export default function ConsultationRoomTableRows({roomNo="01",name="",surnam="",cellNumber="",appDateTime="",specialty="",designation="",status=""}){
    return(
        <>
               <tr className="table_row">
                 <td>{roomNo}</td>
                 <td>{name}</td>
                 <td>{cellNumber}</td>
                 <td>{appDateTime}</td>
                 <td>{appDateTime}</td>
                 <td>{specialty}</td>
                 <td>{designation}</td>
                 <td>{status}</td>
            </tr>
        
        </>
    );
}