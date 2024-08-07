export default function HomePageNavButtonComp({btnTitle,navigate}){
    return(
        <>
            <button typeof="button" className="home_nav_btn" onClick={navigate}>{btnTitle} </button>
        </>
    );
}