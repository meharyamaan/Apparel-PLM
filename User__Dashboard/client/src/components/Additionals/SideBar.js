import './../../Styles/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      
      <header>
  <div className="d-flex flex-column flex-shrink-0 sidebar-wrap">
    <Link to="/" className="text-decoration-none logo-wrap">
      <div className="icon-wrap">
        <i className="fab fa-slack" />
      </div>{" "}
      <span>Apparel PLM</span>
    </Link>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          <div className="icon-wrap">
            <i className="fas fa-home" />
          </div>
          <span> Home</span>
        </Link>
      </li>
      {/* <li>
        <Link to="/" className="nav-link">
          <div className="icon-wrap">
            <i className="fas fa-tachometer-alt" />
          </div>
          <span>Dashboard</span>
        </Link>
      </li> */}
      <li>
        <Link to="/OrdersList" className="nav-link">
          <div className="icon-wrap">
            <i className="fab fa-first-order" />
          </div>
          <span>Orders</span>
        </Link>
      </li>
      {/* <li>
        <Link to="/" className="nav-link">
          <div className="icon-wrap">
            <i className="fab fa-product-hunt" />
          </div>
          <span>Products</span>
        </Link>
      </li> */}
    </ul>
    <hr />
    {/* <div className="dropdown">
      <a
        href="/"
        className="text-decoration-none dropdown-toggle  dropdown-wrap"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="icon-wrap">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-circle"
          />
        </div>
        <strong>Customers</strong>
      </a>
      <ul
        className="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <a className="dropdown-item" href="/">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/">
            Sign out
          </a>
        </li>
      </ul>
    </div> */}
  </div>
</header>

    );
}

export default Sidebar;