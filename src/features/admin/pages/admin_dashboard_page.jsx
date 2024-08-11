import TopHomeHeader from "../../components/header";
import H1titleComponent from "../../components/h1_title_component";
import IncomingAppointmentsTable from "../components/admin_dashboard_components/admin_incoming_app_table";
import DashboardNavButton from "../components/admin_dashboard_components/admin_nav_button";
import LogOutButton from "../components/admin_dashboard_components/log_out_btn";
import { useNavigate } from 'react-router-dom';
export default function AdminDashboardPage(){
    const navigate = useNavigate();
    return(
        <div className="admin_dashboard_page_container">
            <TopHomeHeader/>
          
            <H1titleComponent title={"Incoming Appointments"}/>
           
        <IncomingAppointmentsTable/>
        <div className="dashboard_btns">
            <div className="dashboard_btns_firstRow">
            <DashboardNavButton label={"Patients waiting for consultation"} navigate={()=>navigate('/patients-list')}/>
            <DashboardNavButton label={"Patients waiting for hospital transfer"}/>
            <DashboardNavButton label={"View Nurse/Doctor"}/>
            </div>
         <div className="dashboard_btns_secondRow">
            <DashboardNavButton label={"Patients waiting for medical results"}/>
            <DashboardNavButton label={"Consultation Room"} navigate={()=>navigate('/consultation-room')}/>
            <DashboardNavButton label={"Reporting"}/>
        </div>
        </div>
        <LogOutButton/>
        
        </div>
    );
}