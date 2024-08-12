import useModalConsultRoomsStore from "../../../../states/modal_consultRooms_stateStore";
export default function ModalConsultRoomContainer(){
    const consultRoomComponent = useModalConsultRoomsStore((state)=> state.consultRoomComponents);
    return(
        <div className="modal_ConsultRoom_container">
            {consultRoomComponent}
        </div>
    );
}