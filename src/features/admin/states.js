import { create } from 'zustand'
import PatientsListTableRowComp from './components/patients_waiting_visit_comp/patients_list_table_row_comp'

const usePatientListRowStore = create((set)=>({
    patientsListRow: [<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,<PatientsListTableRowComp/>,],
    addNewPatientOnList: ()=> set((state)=>({
       
    }))
}))
export default usePatientListRowStore