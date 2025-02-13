
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary py-5">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/"><i className="bi bi-house"></i></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;