import React from 'react';
import '../../../styles/admin_styles.css';
import Header from '../../admin/components/doctor_nurse_view_components/Header';
import Table from '../../admin/components/doctor_nurse_view_components/Table';
import ActionButtons from '../../admin/components/doctor_nurse_view_components/ActionButtons';

function DoctorNurseView() {
  return (
    <div>
      <main>
        <div className="doctor-nurse-containerB">
          <Header />
          <Table />
          <ActionButtons />
        </div>
      </main>
    </div>
  );
}

export default DoctorNurseView;
