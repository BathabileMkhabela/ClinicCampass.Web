export default function CancelAppointmentButton({openDialog})
{
    return(
        <div className="cancelAppointment_btn_container">
            <button type="button" onClick={openDialog}>Cancel Appointment</button>
        </div>
    );
}