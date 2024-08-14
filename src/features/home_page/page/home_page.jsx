// import TopHomeHeader from "../../components/header";
// import HomePageTitleComponent from "../components/homePageTitle_comp";
// import HomePageSubTiteComp from "../components/homePageSub-title_comp";
// import '../../../styles/homePage_styles.css'
// import HomePageNavButtonComp from "../components/homeNavButton_Comp";
// import { useNavigate } from 'react-router-dom';
// import H1titleComponent from "../../components/h1_title_component";
// import SubTitle from "../../components/sub_title_comp";

// export default function HomePage(){
//     const navigate = useNavigate();
//     return(
//         <div className="homePage">
//                 <TopHomeHeader/>
//                 <H1titleComponent title={"Welcome to the Future of Healthcare"}/>
//                 <SubTitle subtitle={"Know when your doctor’s available and Secure your spot at your local clinic"}/>
           
//             <div className="home_buttons">
//                 <HomePageNavButtonComp btnTitle={"Patient Login"}/>
//                 <HomePageNavButtonComp btnTitle={"Doctor Login"}/>
//                 <HomePageNavButtonComp btnTitle={"Nurse Login"}/>
//                 <HomePageNavButtonComp btnTitle={"Admin Login"} navigate={() => navigate('/Admin-login')}/>
//             </div>
           
//         </div>
//     );
// }

import React from 'react';
import '../../../styles/homepage_styles.css';
import { useNavigate } from 'react-router-dom';


const Homepage1 = ({ buttonsVisible }) => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src={require('../../../assets/BackgroundVideo.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="welcome-message">
          <h1>Know when your doctor’s available</h1>
          <p>Secure your spot at your local clinic</p>
        </div>
        <div className={`sign-in-buttons ${buttonsVisible ? 'visible' : 'hidden'}`}>
          <button onClick={() => navigate('/patient-signin')}>Patient Sign In</button>
          <button onClick={() => navigate('/doctor-signin')}>Doctor Sign In</button>
          <button onClick={() => navigate('/nurse-signin')}>Nurse Sign In</button>
          <button onClick={() => navigate('/admin-signin')}>Admin Sign In</button>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage1;




























