import { useState } from 'react';

import profile from '../assets/profile.jpg'
import { BsBox } from 'react-icons/bs'
import { LuUserSquare2, LuDivideSquare, LuBadgeHelp, LuLayoutDashboard } from 'react-icons/lu'
import { RiSettingsFill } from 'react-icons/ri'
import { FaFileInvoice } from 'react-icons/fa'
const SideNav = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
   <div className={`sidebar-container ${isSidebarOpen ? '' : 'collapsed'}`}>
      <div className="sidebar-header" onClick={toggleSidebar}>
        <p><RiSettingsFill className='header-icon'/>Dashboard</p>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li className="active-menu"><LuLayoutDashboard className='icons' />Dashboard</li>
          <li><BsBox className='icons' /> Products</li>
          <li><LuUserSquare2 className='icons' /> Customers</li>
          <li><FaFileInvoice className='icons' /> Income</li>
          <li><LuDivideSquare className='icons' /> Promote</li>
          <li><LuBadgeHelp className='icons' /> Help</li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className='footer-card'>
          <img src={profile} />
          <div className='footer-details'>
            <h5>Evano</h5>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav