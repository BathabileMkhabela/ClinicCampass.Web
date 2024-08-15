import StaffVerifIcon from "../components/register_staff_components/staff_verifPage_icon";
import TopHomeHeader from "../../components/header";
import OtpVerifyBoxesContainer from "../components/register_staff_components/otp_verify_boxes";
import VerifyNewStaffBtn from "../components/register_staff_components/verify_newStaff_btn";
import ResendVerifyCodeText from "../components/register_staff_components/didnt_receiveVerifyCodeText";
export default function StaffRegisterVerificationPage(){
    return(
        <div className="staff_register_verify_page_container">
            {/* <TopHomeHeader/> */}
            <div className="verification_box_container">
                <h3>Registered user to KwaMhlanga Clinic</h3>
                <div className="staff_veriPage_icon">
                    <StaffVerifIcon/>
                </div>
                <p className="verify_message">Verify user account</p>
                <p className="otp_text">OTP verification</p>
                <p className="verify_description_message">Enter the verification we just sent to the user's email and cell number.</p>
                <OtpVerifyBoxesContainer/>
                <VerifyNewStaffBtn/>
                <ResendVerifyCodeText/>
            </div>
        </div>
    );
}