import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoMain from '../../assets/images/1Pass_Logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const navItems = [
  { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
  { id: 2, title: 'Visitors', icon: 'bi-person', path: '/visitors' },
  { id: 3, title: 'Invites', icon: 'bi-envelope', path: '/invites' },
  {
    id: 4,
    title: 'Check-ins',
    icon: 'bi-check-square',
    path: '/check-in',
    submenu: [
      { id: 41, title: 'Check-in Management', path: '/check-in-management' },
      { id: 42, title: 'Check-out Management', path: '/check-out-management' },
      { id: 43, title: 'Check-in History', path: '/check-in-history' },
    ],
  },
];


const footerNavItems = [
  { id: 1, title: 'Settings', icon: 'bi-gear' },
  { id: 2, title: 'Help & Support', icon: 'bi-question-circle' },
  { id: 3, title: 'Logout', icon: 'bi-box-arrow-right' }
];

const Sidebar = ({ activeNavItem, setActiveNavItem, activeFooterItem, setActiveFooterItem, sidebarVisible, setSidebarVisible }) => {
  const navigate = useNavigate();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleNavItemClick = (id, path) => {
    setActiveNavItem(id);
    setActiveFooterItem(null);
    navigate(path);
  };

  const handleFooterItemClick = (id) => {
    setActiveFooterItem(id);
    setActiveNavItem(null);
  };

  const handleSubmenuClick = (id) => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div
      className="bg-dark text-white"
      style={{
        width: sidebarVisible ? '250px' : '0px',
        minHeight: '100vh',
        position: 'fixed',
        transition: 'width 0.3s ease',
        zIndex: 1000,
        backgroundColor: '#1e3a38'
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center p-3">
        <div className="w-10 h-10 bg-gray-300 rounded"><img src={logoMain} alt='1/Pass' /></div>
        <div className="fs-5 fw-bold ms-3">1/Pass</div>
      </div>

      {/* Navigation Menu */}
      <div>
        <ul className="nav flex-column ">
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <a
                className={`nav-link ${activeNavItem === item.id ? 'active' : ''} d-flex align-items-center`}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.id, item.path);
                }}
                style={{
                  backgroundColor: activeNavItem === item.id ? '#2c5451' : 'transparent',
                  color: '#fff',
                  padding: '0.8rem 1rem'
                }}
              >
                <i className={`${item.icon} me-2`}></i>
                <span>{item.title}</span>
                {item.submenu && (
                  <i
                    className={`bi bi-chevron-down ms-auto ${showSubmenu ? 'bi bi-chevron-up' : ''}`}
                    onClick={() => handleSubmenuClick(item.id)}
                  ></i>
                )}
              </a>
              {item.submenu && showSubmenu && (
                <ul className="nav flex-column ms-3">
                  {item.submenu.map(subitem => (
                    <li key={subitem.id} className="nav-item">
                      <a
                        className={`nav-link ${activeNavItem === subitem.id ? 'active' : ''} d-flex align-items-center`}
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavItemClick(subitem.id, subitem.path);
                        }}
                        style={{
                          backgroundColor: activeNavItem === subitem.id ? '#2c5451' : 'transparent',
                          color: '#fff',
                          padding: '0.8rem 1rem'
                        }}
                      >
                        <i className="bi bi-chevron-right me-2"></i>
                        <span>{subitem.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Navigation */}
      <div className="mt-auto navHeight">
        <ul className="nav flex-column">
          {footerNavItems.map(item => (
            <li key={item.id} className="nav-item">
              <a
                className={`nav-link ${activeFooterItem === item.id ? 'active' : ''} d-flex align-items-center`}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleFooterItemClick(item.id);
                }}
                style={{
                  backgroundColor: activeFooterItem === item.id ? '#2c5451' : 'transparent',
                  color: '#fff',
                  padding: '0.8rem 1rem'
                }}
              >
                <i className={`${item.icon} me-2`}></i>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
