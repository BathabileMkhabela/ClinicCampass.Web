import logo from "../images/logo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const Login = true;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-button" href="/">
            <img src={logo} className="nav_button" alt="logo" height={30} />
            <span>ClinicCompass</span>
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-button">
              <a href="/">Home</a>
            </li>
            {Login ? (
              <>
                <li className="nav-button">
                  <a href="/login">Sign Out</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-button">
                  <a href="/login">Sign In</a>
                </li>

                <li className="nav-button">
                  <a href="/register">Sign Up</a>
                </li>
              </>
            )}

            <li className="nav-button">
              <a href="/about">About</a>
            </li>

            <nav title="Sign-In"></nav>

            <form className="d-flex" role="search">
              <input
                className="fas fa-search search-icon"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // className="fas fa-search search-icon"
              />
              {/* <button className="btn btn-outline-success"     type="submit">
                    <span class="icon">🔍</span>
                </button> */}
              <i className="fas fa-search search-icon"></i>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
