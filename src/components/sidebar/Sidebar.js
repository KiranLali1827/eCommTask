import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink } from "react-router-dom";
import { MailLockTwoTone } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Hello , Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN MENU</p>
          <li>
            <DashboardIcon className="icon" />
            <NavLink to="/" className="SidebarLinkRemove" activestyle="true">
              <span>Dashboard</span>
            </NavLink>
          </li>
          <p className="title">LISTS MENU</p>
          <li>
            <GroupIcon className="icon" />
            <NavLink to="/users" className="SidebarLinkRemove" activestyle="true">
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <NavLink to="/Productdashborad" className="SidebarLinkRemove" activestyle="true">
            <span>Products</span>
            </NavLink>
           
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <NavLink to="/Order" className="SidebarLinkRemove" activestyle="true">
            <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <NavLink to="/Deliverydashboard" className="SidebarLinkRemove" activestyle="true">
             <span>Delivery</span>
            </NavLink>
           
            
          </li>
          <li>
          <MailLockTwoTone className="icon" />
            <NavLink to="/Calendardash" className="SidebarLinkRemove" activestyle="true">
             <span>Calender</span>
            </NavLink>
            
          </li>
          <p className="title">OTHER MENU</p>
          <li>
            <QueryStatsIcon className="icon" />
            <NavLink to="/Inventorydashboard" className="SidebarLinkRemove" activestyle="true">
             <span>Inventory</span>
            </NavLink>
            
          </li>

          <li>
            <QueryStatsIcon className="icon" />
            <NavLink to="/Analyticsdashboard" className="SidebarLinkRemove" activestyle="true">
             <span>Analytics</span>
            </NavLink>
            
          </li>

          
          <li>
          <MailLockTwoTone className="icon" />
            <NavLink to="/Invoicedashboard" className="SidebarLinkRemove" activestyle="true">
             <span>Invoice</span>
            </NavLink>
            
          </li>
          {/* <p className="title">SERVICES</p>
            <li>
              <HealthAndSafetyIcon className='icon' />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className='icon' />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li> */}
          <p className="title">ACCOUNT</p>
          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
