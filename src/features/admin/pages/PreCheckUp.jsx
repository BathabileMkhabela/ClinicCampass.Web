import React, { useState } from "react";
import '../../../styles/admin_styles.css';
import PreCheckupHeader from '../../admin/components/pre_check_up_components/PreCheckupHeader';
import PatientInfo from '../../admin/components/pre_check_up_components/PreCheckingForm';
import PreCheckingForm from '../../admin/components/pre_check_up_components/PreCheckingForm';
import ButtonGroup from '../../admin/components/pre_check_up_components/ButtonGroup';
import CancelAppointmentModal from '../../admin/components/pre_check_up_components/CancelAppointmentModal';

const PreCheckup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="precheckup-container">
      <main>
        <PreCheckupHeader />
        <div className="PreInfo">
          <PatientInfo />
          <PreCheckingForm />
        </div>
        <ButtonGroup handleCancelClick={handleCancelClick} />
        {isModalOpen && <CancelAppointmentModal handleCloseModal={handleCloseModal} />}
      </main>
    </div>
  );
};

export default PreCheckup;
