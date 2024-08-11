import TopHomeHeader from "../../components/header";
import HomePageTitleComponent from "../components/homePageTitle_comp";
import HomePageSubTiteComp from "../components/homePageSub-title_comp";
import '../../../styles/homePage_styles.css'
import HomePageNavButtonComp from "../components/homeNavButton_Comp";
import { useNavigate } from 'react-router-dom';
import H1titleComponent from "../../components/h1_title_component";
import SubTitle from "../../components/sub_title_comp";

export default function HomePage(){
    const navigate = useNavigate();
    return(
        <div className="homePage">
                <TopHomeHeader/>
                <H1titleComponent title={"Welcome to the Future of Healthcare"}/>
                <SubTitle subtitle={"Know when your doctor’s available and Secure your spot at your local clinic"}/>
           
            <div className="home_buttons">
                <HomePageNavButtonComp btnTitle={"Patient Login"}/>
                <HomePageNavButtonComp btnTitle={"Doctor Login"}/>
                <HomePageNavButtonComp btnTitle={"Nurse Login"}/>
                <HomePageNavButtonComp btnTitle={"Admin Login"} navigate={() => navigate('/Admin-login')}/>
            </div>
           
        </div>
    );
}