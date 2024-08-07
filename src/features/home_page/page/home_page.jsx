import TopHomeHeader from "../../components/header";
import HomePageTitleComponent from "../components/homePageTitle_comp";
import HomePageSubTiteComp from "../components/homePageSub-title_comp";
import '../../../styles/homePage_styles.css'
import HomePageNavButtonComp from "../components/homeNavButton_Comp";
import { useNavigate } from 'react-router-dom';

export default function HomePage(){
    const navigate = useNavigate();
    return(
        <div className="homePage">
                <TopHomeHeader/>
            <div className="homePage_body">
                <HomePageTitleComponent/>
                <HomePageSubTiteComp/>
            </div>
            <div className="home_buttons">
                <HomePageNavButtonComp btnTitle={"Patient Login"}/>
                <HomePageNavButtonComp btnTitle={"Doctor Login"}/>
                <HomePageNavButtonComp btnTitle={"Nurse Login"}/>
                <HomePageNavButtonComp btnTitle={"Admin Login"} navigate={() => navigate('/Admin-login')}/>
            </div>
           
        </div>
    );
}