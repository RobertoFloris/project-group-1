import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar py-3">
        <div className="container container-fluid justify-content-center">
          <Link className="logo" to="/travels">
            <img src="src/public/img/logo.png" alt="logo" />
          </Link>
          {/* <Link className="btn btn-danger" to="/">
            LOG OUT <i className="bi bi-box-arrow-in-left"></i>
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;