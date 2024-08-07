export default function DashboardNavButton({label,navigate}){
    return(
        <div className="dashboard_nav_button_container">
            <button type="button" className="dashboard_nav_button" onClick={navigate}>{label}</button>
        </div>
    );
}