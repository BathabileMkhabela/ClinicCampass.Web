export default function LoginButtonComponent({login}){
    return(
        <div className="loginBtn_container">
            <button type="button" className="loginButton_comp" onClick={login}> Login</button>
        </div>
    );
}