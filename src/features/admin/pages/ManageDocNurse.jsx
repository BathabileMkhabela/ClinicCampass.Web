import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../../../assets/admin_assets/images/add_new_staff_icon.png'; // Ensure correct path if required
import '../../../styles/admin_styles.css';

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
            <div className="header">
                <h1 className="main-title">Manage Nurse/Doctor</h1>
                <p className="practice-number">Practice Number: {doctorInfo.practiceNumber}</p>
            </div>
            <div className="doctor-info-container">
                <h4 className="title-doctor">Doctor's Information</h4>
                <form onSubmit={saveDoctorInfo}>
                    {['name', 'surname', 'email', 'phone'].map((field) => (
                        <div className="input-wrapper" key={field}>
                            <label htmlFor={field} className="input-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                            <div className="input-groupA">
                                <input
                                    id={field}
                                    value={doctorInfo[field]}
                                    onChange={({ target }) => handleDoctorInfoChange(target.name, target.value)}
                                    name={field}
                                    type={field === 'email' ? 'email' : 'text'}
                                    className="input"
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    disabled={!editMode[field]}
                                    onBlur={() => handleBlur(field)}
                                />
                                <button className="edit-button" type="button" onClick={() => handleEditClick(field)}>
                                    <i className="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="button-group">
                        <button type="submit" className="save-button">Save</button>
                    </div>
                </form>
            </div>
            <div className="login-details-container">
                <h4 className="title">Login Details</h4>
                <div className="input-groupA">
                    <button type="button" onClick={handleGeneratePassword} className="generate-password-button">Generate New Temporary Password</button>
                </div>
                {loginDetails.newPassword && (
                    <div className="new-password-display">
                        <p>New Password: <strong>{loginDetails.newPassword}</strong></p>
                    </div>
                )}
            </div>
            <div className="bottom-buttons">
                <button type="button" onClick={handleRemoveDoctor} className="remove-button">
                    <i className="fas fa-trash-alt"></i> Remove Doctor
                </button>
                <button type="button" onClick={handleAddNewDoctor} className="add-button">
                    <img src={require('../../../assets/admin_assets/images/add_new_staff_icon.png')} alt="Add New" className="close-icon" height={17}/> Add New Doctor/Nurse
                </button>
                <button type="button" onClick={handleGoBack} className="back-button">
                    <i className="fas fa-arrow-left"></i> Back
                </button>
            </div>
            {showDialog && (
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
                            <button type="button" onClick={handleGeneratePassword} className="submit-button">Submit</button>
                            <button type="button" onClick={() => setShowDialog(false)} className="cancel-button">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default ManageDocNurse;
