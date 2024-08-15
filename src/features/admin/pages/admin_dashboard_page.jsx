import React, { useEffect, useState } from "react";
import TopHomeHeader from "../../components/header";
import H1titleComponent from "../../components/h1_title_component";
import IncomingAppointmentsTable from "../components/admin_dashboard_components/admin_incoming_app_table";
import DashboardNavButton from "../components/admin_dashboard_components/admin_nav_button";
import LogOutButton from "../components/admin_dashboard_components/log_out_btn";
import { useNavigate } from 'react-router-dom';

export default function AdminDashboardPage() {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const clinicName = "KwaMhlanga Clinic"; // Replace with actual clinic name if dynamic
    const adminName = "Lebo Sethole"; // Replace with actual admin name if dynamic

    return (
        <div>
            <header>
                <div className="adminInfo">
                    <div className="clinicInfo">
                        <p>{clinicName}</p>
                        <p><span className="admin-name">Admin:</span> {adminName}</p>
                    </div>
                    <div className="dateTime">
                        <p>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
                    </div>
                </div>
            </header>
            <H1titleComponent title={"Incoming Appointments"} />
            <IncomingAppointmentsTable />
            <div className="dashboard_btns">
                <div className="dashboard_btns_firstRow">
                    <DashboardNavButton label={"Patients waiting for consultation"} navigate={() => navigate('/patients-list')} />
                    <DashboardNavButton label={"Patients waiting for hospital transfer"} />
                    <DashboardNavButton label={"View Nurse/Doctor"} navigate={() => navigate('/view-staff')} />
                </div>
                <div className="dashboard_btns_secondRow">
                    <DashboardNavButton label={"Patients waiting for medical results"} />
                    <DashboardNavButton label={"Consultation Room"} navigate={() => navigate('/consultation-room')} />
                    <DashboardNavButton label={"Reporting"} />
                </div>
                <div className="dashboard_btns_thirdRow">
                    <DashboardNavButton label={"Add Patient"} navigate={() => navigate('/add-patient')} />
                </div>
            </div>
            <LogOutButton />
        </div>
    );
}
