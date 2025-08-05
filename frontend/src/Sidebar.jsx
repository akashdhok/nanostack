import React, { useState } from 'react';
import './css/Sidebar.css';
import {
  FaHome,
  FaTasks,
  FaUsers,
  FaCogs,
  FaTruck,
  FaRegFileAlt,
  FaChartBar,
  FaUserCircle,
  FaAngleRight,
  FaRegCalendarCheck,
  FaBoxes,
  FaLayerGroup,
  FaClipboardList,
  FaFileInvoice
} from 'react-icons/fa';

const menuItems = [
  { name: 'Dashboard', icon: <FaHome /> },
  { name: 'Tasks', icon: <FaTasks /> },
  { name: 'Buyer Meeting', icon: <FaRegCalendarCheck />, active: true },
  { name: 'Quick Costing', icon: <FaCogs /> },
  { name: 'Pre Order Costing', icon: <FaCogs /> },
  { name: 'Style Library', icon: <FaLayerGroup /> },
  { name: 'Requisitions', icon: <FaClipboardList />, dropdown: true },
  { name: 'Buyer Purchase', icon: <FaClipboardList />, dropdown: true },
  { name: 'Inventory', icon: <FaBoxes />, dropdown: true },
  { name: 'Sample Development', icon: <FaChartBar /> },
  { name: 'Production', icon: <FaChartBar /> },
  { name: 'Master Admin', icon: <FaUserCircle /> },
  { name: 'Users', icon: <FaUsers />, dropdown: true },
  { name: 'Suppliers', icon: <FaUsers /> },
  { name: 'Showroom', icon: <FaUsers />, dropdown: true },
  { name: 'Shipment', icon: <FaTruck /> },
  { name: 'KPIs', icon: <FaChartBar />, dropdown: true },
  { name: 'E-Invoice / E-Way Bill', icon: <FaFileInvoice /> },
  { name: 'Reports', icon: <FaRegFileAlt /> },
  { name: 'Master Data', icon: <FaClipboardList />, dropdown: true },
  { name: 'Settings', icon: <FaCogs /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${item.active ? 'active' : ''}`}
          >
            <div className="menu-icon">{item.icon}</div>
            <span className="menu-text">{item.name}</span>
            {item.dropdown && <FaAngleRight className="dropdown-arrow" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
