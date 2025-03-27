import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoMain from '../../assets/images/1Pass_Logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = ({ sidebarVisible, setSidebarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const navItems = {
    '/property': [
      { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
    ],
    '/unit': [
      { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
    ],
    '/deskadmin': [
      { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
      {
        id: 2,
        title: 'Check-ins',
        icon: 'bi-check-square',
        path: '/deskadmin/check-in',
        submenu: [
          { id: 41, title: 'Check-in Management', path: '/deskadmin/check-in' },
          { id: 42, title: 'Check-out Management', path: '/deskadmin/check-out' },
          { id: 43, title: 'Check-in History', path: '/deskadmin/check-in-history' },
        ],
      },
      { id: 3, title: 'Check-outs', icon: 'bi-box-arrow-right', path: '/deskadmin/check-out' },
      { id: 4, title: 'Activity Logs', icon: 'bi-clock-history', path: '/activity-logs' },
    ],
    '/companyadmin': [
      { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
    ],
    '/visitors': [
      { id: 1, title: 'Dashboard', icon: 'bi-person', path: '/' },
      { id: 2, title: 'Visitor Management', icon: 'bi-people', path: '/visitors/manage' },
      { id: 3, title: 'Visitor History', icon: 'bi-calendar', path: '/visitors/history' },
    ],
    '/activity-logs': [
      { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
    ],
    'default': [
      { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
      { id: 2, title: 'Property', icon: 'bi-building', path: '/property' },
      { id: 3, title: 'Units', icon: 'bi-door-open', path: '/unit' },
      { id: 4, title: 'Desk Admin', icon: 'bi-briefcase', path: '/deskadmin' },
      { id: 5, title: 'Company', icon: 'bi-briefcase', path: '/companyadmin' },
      { id: 6, title: 'Visitors', icon: 'bi-briefcase', path: '/visitors' },
      { id: 7, title: 'Activity-log', icon: 'bi-briefcase', path: '/activity-logs' },
    ]
  };

  const getActiveNavItems = () => {
    if (location.pathname.startsWith('/deskadmin')) return navItems['/deskadmin'];
    if (location.pathname.startsWith('/visitors')) return navItems['/visitors'];
    if (location.pathname.startsWith('/property')) return navItems['/property'];
    if (location.pathname.startsWith('/unit')) return navItems['/unit'];
    if (location.pathname.startsWith('/companyadmin')) return navItems['/companyadmin'];
    if (location.pathname.startsWith('/activity-logs')) return navItems['/activity-logs'];
    return navItems['default'];
  };
  
  const currentNavItems = getActiveNavItems();

  useEffect(() => {
    const allNavItems = Object.values(navItems).flat();
    const activeItem = allNavItems.find(item => location.pathname.startsWith(item.path));
    setActiveNavItem(activeItem ? activeItem.id : null);
  }, [location]);

  const handleNavItemClick = (id, path, submenuId = null) => {
    setActiveNavItem(submenuId || id);
    navigate(path);
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
      <div className="d-flex align-items-center p-3">
        <img src={logoMain} alt='1/Pass' className="w-10 h-10" />
        <div className="fs-5 fw-bold ms-3">1/Pass</div>
      </div>
      <div>
        <ul className="nav flex-column">
          {currentNavItems.map(item => (
            <li key={item.id} className="nav-item">
              <a
                className={`nav-link ${activeNavItem === item.id ? 'active' : ''} d-flex align-items-center`}
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
    </div>
  );
};

export default Sidebar;
