import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header >
      <nav className="navbar navbar-expand-md navbar-light bg-light py-3 position-relative">
        <div className="container-fluid px-5">


          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" width="150" className="ms-5" />
          </a>
          <button
            className="navbar-toggler position-absolute top-0 end-0 me-3 mt-3 small-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center gap-4 gap-md-5">
              <li className="nav-item">
                <a className="nav-link active pink-color fs-5" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">CONTACT</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
