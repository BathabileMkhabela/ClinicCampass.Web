import "../../styles/admin_styles.css"
export default function NavLink({linkName,onClickLink,className}){
    return(
        <>
            <li className={className}><a href="/Admin-dashboard">{linkName}</a></li>
        </>
    );
}