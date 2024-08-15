import TopHomeHeader from "../../components/header";
import ConsultationRoomBody from "../components/consultation_room_components/consultation_room_body";
import NavLink from "../../components/nav_link";
export default function ConsultationRoomPage(){
    return(
    <>
        {/* <TopHomeHeader navlink={<NavLink  className={"nav_link_highlight"} linkName={"Dashboard"}/>}/> */}
        <ConsultationRoomBody/>
    </>
    );
}