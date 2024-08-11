import { create } from 'zustand'
import PatientsListTableRowComp from '../admin/components/patients_waiting_visit_comp/patients_list_table_row_comp'
import PatientListActionRowBnt from '../admin/components/patients_waiting_visit_comp/patientList_action_row'
const usePatientListRowStore = create((set)=>({
    patientsListRow: [<PatientsListTableRowComp actionBtns={<PatientListActionRowBnt/>}/>,<PatientsListTableRowComp actionBtns={<PatientListActionRowBnt/>}/>,<PatientsListTableRowComp actionBtns={<PatientListActionRowBnt/>}/>],
    addNewPatientOnList: ()=> set((state)=>({
       
    }))
}))
export default usePatientListRowStore