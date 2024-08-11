import { create } from 'zustand'
import PatientsListTableRowComp from '../admin/components/patients_waiting_visit_comp/patients_list_table_row_comp';
import PatientListActionRowBnt from '../admin/components/patients_waiting_visit_comp/patientList_action_row';
import ConsultationRoomTableRows from '../admin/components/consultation_room_components/consultation_room_tableRows';
import ViewStaffTableRow from '../admin/components/view_staff_components/view_staff_table_row_comp';
const usePatientListRowStore = create((set)=>({
    patientsListRow: [<PatientsListTableRowComp actionBtns={<PatientListActionRowBnt/>}/>,<PatientsListTableRowComp actionBtns={<PatientListActionRowBnt/>}/>,<PatientsListTableRowComp actionBtns={<PatientListActionRowBnt/>}/>],
    consultationStaffRow: [<ConsultationRoomTableRows name='Mpho' surnam='Manaka' cellNumber='0789987885' appDateTime='25/08/2024 14:35' designation='Doctor' specialty='Ophthalmology' roomNo='01' status='In-progress' />,<ConsultationRoomTableRows name='Mpho' surnam='Manaka' cellNumber='0789987885' appDateTime='25/08/2024 14:35' designation='Doctor' specialty='Ophthalmology' roomNo='01' status='In-progress' />,<ConsultationRoomTableRows name='Mpho' surnam='Manaka' cellNumber='0789987885' appDateTime='25/08/2024 14:35' designation='Doctor' specialty='Ophthalmology' roomNo='01' status='In-progress' />,<ConsultationRoomTableRows name='Mpho' surnam='Manaka' cellNumber='0789987885' appDateTime='25/08/2024 14:35' designation='Doctor' specialty='Ophthalmology' roomNo='01' status='In-progress' />],
    viewStaffRow: [<ViewStaffTableRow name='Mpho' surnam='M' cellNumber='8700215875' appDateTime='25/08/2024 13:30' designation='Nurse' specialty='Public Health' roomNo='01' status='available' />],
    addNewPatientOnList: ()=> set((state)=>({
       
    })),
    addNewConsultStaffRow: ()=> set((state)=>({
       
    }))
}))
export default usePatientListRowStore;