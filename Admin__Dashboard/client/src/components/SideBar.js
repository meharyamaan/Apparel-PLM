import './../../Styles/sidebar.css';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Man4OutlinedIcon from '@mui/icons-material/Man4Outlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Sidebar = () => {
    return (
      
      <div className="sidebar" style={{ 
        // position: 'fixed',
        top: 75,
        left: 0,
        display: 'flex',
        bottom: 0,
        width: '100px', // Adjust as needed
        backgroundColor: '#1E2D3F', // Example background color
        overflowY: 'auto', // Enable scrolling if content exceeds height
        zIndex: 1000, // Ensure it's above other content
      }}>
        <hr style={{backgroundColor: '#1E2D3F'}}/>
        <div className="center"> 
          <ul>
            <p className="title">Main</p>
            <li>
              <Link style={{ textDecoration: "none" }} to="/Userdashboard">
                <DashboardIcon/>
                <span style={{color: 'white'}}>Dashboard</span>
              </Link>
            </li>
            <p className="title">Lists</p>
            <li>
              <Link style={{ textDecoration: "none" }} to="/keyprocdetail">
                <ProductionQuantityLimitsIcon/>
                <span style={{color: 'white'}}>Orders</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <Man4OutlinedIcon />
                <span style={{color: 'white'}}>Customers</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <StorefrontIcon />
               <span style={{color: 'white'}}>Products</span>
              </Link>
            </li>
            <p className="title">Alerts</p>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <CircleNotificationsIcon/>
                <span style={{color: 'white'}}>Notifications</span>
              </Link>
            </li>
            <p className="title">User</p>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <AccountCircleIcon/>
                <span style={{color: 'white'}}>Profile</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <LogoutIcon/>
                <span style={{color: 'white'}}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;
