import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import '../../../styles/admin_styles.css'; // Ensure this file exists for custom styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import { useNavigate } from 'react-router-dom';

const ManageDocNurse = () => {
    const navigate = useNavigate();

    const [doctorInfo, setDoctorInfo] = useState({
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        practiceNumber: "123456"
    });

    const [editMode, setEditMode] = useState({
        name: false,
        surname: false,
        email: false,
        phone: false,
    });

    const [loginDetails, setLoginDetails] = useState({
        newPassword: "",
    });

    const [adminPassword, setAdminPassword] = useState("");
    const [showAdminPasswordDialog, setShowAdminPasswordDialog] = useState(false);
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [dialogAction, setDialogAction] = useState(""); // To track the action (generate or remove)

    const handleDoctorInfoChange = (name, value) => {
        setDoctorInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleEditClick = (field) => {
        setEditMode(prevMode => ({
            ...prevMode,
            [field]: !prevMode[field],
        }));
    };

    const handleBlur = (field) => {
        setEditMode(prevMode => ({
            ...prevMode,
            [field]: false,
        }));
    };

    const generateNewPassword = () => {
        if (adminPassword === "123456") {
            const newPassword = Math.random().toString(36).slice(-8);
            setLoginDetails({ newPassword });
            toast.success("New password generated");
            setAdminPassword(""); // Clear admin password field
            setShowAdminPasswordDialog(false); // Close dialog after generation
        } else {
            toast.error("Incorrect admin password");
        }
    };

    const saveDoctorInfo = (event) => {
        event.preventDefault();

        toast.dismiss();
        if (!doctorInfo.name || !doctorInfo.surname || !doctorInfo.email || !doctorInfo.phone) {
            toast.error("All fields are required");
            return;
        }

        toast.success("Doctor information saved");
        // Handle saving logic here
    };

    const confirmRemoveDoctor = () => {
        setShowConfirmationDialog(true);
    };

    const handleConfirmRemove = () => {
        setShowConfirmationDialog(false);
        setDialogAction("remove");
        setShowAdminPasswordDialog(true);
    };

    const removeDoctor = () => {
        if (adminPassword === "123456") { // Admin password validation
            toast.info("Doctor removed");
            // Handle remove logic here
            setShowAdminPasswordDialog(false);
            setAdminPassword(""); // Clear admin password field
        } else {
            toast.error("Incorrect admin password");
        }
    };

    const addNewDoctor = () => {
        toast.info("Add new doctor/nurse");
        navigate('/addnursedoc');
    };

    const goBack = () => {
        console.log("Back button clicked");
        navigate('/docnursview');
    };

    return (
        <div className="containerA">
            <div className="header">
                <h1 className="main-title">Manage Nurse/Doctor</h1>
                <p className="practice-number">Practice Number: {doctorInfo.practiceNumber}</p>
            </div>
            <div className="contentA">
                <div className="doctor-info-container">
                    <h4 className="title-doctor">Doctor's Information</h4>
                    <form onSubmit={saveDoctorInfo}>
                        <div className="input-wrapper">
                            <label htmlFor="name" className="input-label">Name:</label>
                            <div className="input-groupA">
                                <input
                                    id="name"
                                    value={doctorInfo.name}
                                    onChange={({ target }) => handleDoctorInfoChange(target.name, target.value)}
                                    name="name"
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                    disabled={!editMode.name}
                                    onBlur={() => handleBlur('name')}
                                />
                                <button className="edit-button" type="button" onClick={() => handleEditClick('name')}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="surname" className="input-label">Surname:</label>
                            <div className="input-groupA">
                                <input
                                    id="surname"
                                    value={doctorInfo.surname}
                                    onChange={({ target }) => handleDoctorInfoChange(target.name, target.value)}
                                    name="surname"
                                    type="text"
                                    className="input"
                                    placeholder="Surname"
                                    disabled={!editMode.surname}
                                    onBlur={() => handleBlur('surname')}
                                />
                                <button className="edit-button" type="button" onClick={() => handleEditClick('surname')}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email" className="input-label">Email:</label>
                            <div className="input-groupA">
                                <input
                                    id="email"
                                    value={doctorInfo.email}
                                    onChange={({ target }) => handleDoctorInfoChange(target.name, target.value)}
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                    disabled={!editMode.email}
                                    onBlur={() => handleBlur('email')}
                                />
                                <button className="edit-button" type="button" onClick={() => handleEditClick('email')}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="phone" className="input-label">Phone Number:</label>
                            <div className="input-groupA">
                                <input
                                    id="phone"
                                    value={doctorInfo.phone}
                                    onChange={({ target }) => handleDoctorInfoChange(target.name, target.value)}
                                    name="phone"
                                    type="text"
                                    className="input"
                                    placeholder="Phone Number"
                                    disabled={!editMode.phone}
                                    onBlur={() => handleBlur('phone')}
                                />
                                <button className="edit-button" type="button" onClick={() => handleEditClick('phone')}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                        <div className="button-group">
                            <button type="submit" className="save-button">Save</button>
                        </div>
                    </form>
                </div>
                <div className="login-details-container">
                    <h4 className="title">Login Details</h4>
                    <div className="input-groupA">
                        <button type="button" onClick={() => { setDialogAction("generate"); setShowAdminPasswordDialog(true); }} className="generate-password-button">Generate New Temporary Password</button>
                    </div>
                    {loginDetails.newPassword && (
                        <div className="new-password-display">
                            <p>New Password: <strong>{loginDetails.newPassword}</strong></p>
                        </div>
                    )}
                </div>
            </div>
            <div className="bottom-buttons">
                <button type="button" onClick={confirmRemoveDoctor} className="remove-button">
                    <i className="fas fa-trash-alt"></i> Remove Doctor
                </button>
                <button type="button" onClick={addNewDoctor} className="add-button">
                    <img src={require('../../../assets/admin_assets/images/add_new_staff_icon.png')} alt="Add New" className="close-icon" height={17}/> Add New Doctor/Nurse
                </button>
                <button type="button" onClick={goBack} className="back-button">
                    <i className="fas fa-arrow-left"></i> Back
                </button>
            </div>
            {showConfirmationDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <img src={require('../../../assets/admin_assets/images/remove_staff_dialog_icon.png')} alt="Remove" className="close-icon" height={50}/>
                        <h4>Are you sure you want to remove the doctor?</h4>
                        <div className="button-group">
                            <button type="button" onClick={handleConfirmRemove} className="submit-button">Yes</button>
                            <button type="button" onClick={() => setShowConfirmationDialog(false)} className="cancel-button">No</button>
                        </div>
                    </div>
                </div>
            )}
            {showAdminPasswordDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <h4>Enter Admin Password</h4>
                        <input
                            type="password"
                            value={adminPassword}
                            onChange={({ target }) => setAdminPassword(target.value)}
                            className="admin-password-input"
                        />
                        <div className="button-group">
                            <button type="button" onClick={dialogAction === "generate" ? generateNewPassword : removeDoctor} className="submit-button">Submit</button>
                            <button type="button" onClick={() => setShowAdminPasswordDialog(false)} className="cancel-button">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default ManageDocNurse;
