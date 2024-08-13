import React from "react";
import { AddPatientForm } from "../../admin/components/add_patient_components/AddPatientForm"; // Adjust the path accordingly

function AddPatient({ onAddPatient }) {
  return <AddPatientForm onAddPatient={onAddPatient} />;
}

export default AddPatient;

