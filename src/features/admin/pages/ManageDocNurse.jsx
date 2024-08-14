import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from '../../admin/components/manage_doctor_nurse_components/Header';
import DoctorInfoForm from '../../admin/components/manage_doctor_nurse_components/DoctorInfoForm';
import LoginDetails from '../../admin/components/manage_doctor_nurse_components/LoginDetails';
import BottomButtons from '../../admin/components/manage_doctor_nurse_components/BottomButtons';
import Dialog from '../../admin/components/manage_doctor_nurse_components/Dialog';

const ManageDocNurse = () => {
    const navigate = useNavigate();

    const [doctorInfo, setDoctorInfo] = useState({ name: "John", surname: "Doe", email: "john.doe@example.com", phone: "1234567890", practiceNumber: "123456" });
    const [editMode, setEditMode] = useState({ name: false, surname: false, email: false, phone: false });
    const [loginDetails, setLoginDetails] = useState({ newPassword: "" });
    const [adminPassword, setAdminPassword] = useState("");
    const [showDialog, setShowDialog] = useState(false);

    const handleDoctorInfoChange = (name, value) => setDoctorInfo({ ...doctorInfo, [name]: value });
    const handleEditClick = (field) => setEditMode({ ...editMode, [field]: !editMode[field] });
    const handleBlur = (field) => setEditMode({ ...editMode, [field]: false });
    const saveDoctorInfo = (event) => { event.preventDefault(); toast.success("Doctor information saved"); };
    const handleGeneratePassword = () => setShowDialog(true);
    const handleRemoveDoctor = () => { toast.info("Doctor removed"); };
    const handleAddNewDoctor = () => navigate('/addnursedoc');
    const handleGoBack = () => navigate('/docnursview');

    return (
        <div className="containerA">
            <Header practiceNumber={doctorInfo.practiceNumber} />
            <DoctorInfoForm
                doctorInfo={doctorInfo}
                handleDoctorInfoChange={handleDoctorInfoChange}
                editMode={editMode}
                handleEditClick={handleEditClick}
                handleBlur={handleBlur}
                saveDoctorInfo={saveDoctorInfo}
            />
            <LoginDetails newPassword={loginDetails.newPassword} handleGeneratePassword={handleGeneratePassword} />
            <BottomButtons handleRemoveDoctor={handleRemoveDoctor} handleAddNewDoctor={handleAddNewDoctor} handleGoBack={handleGoBack} />
            <Dialog
                show={showDialog}
                onSubmit={handleGeneratePassword}
                onCancel={() => setShowDialog(false)}
                action="generate"
                adminPassword={adminPassword}
                setAdminPassword={setAdminPassword}
            />
            <ToastContainer />
        </div>
    );
};

export default ManageDocNurse;
