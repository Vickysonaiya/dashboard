import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ sidebarVisible, setSidebarVisible }) => {
  const location = useLocation();

  // Determine the admin role based on the active sidebar section
  const getAdminRole = () => {
    if (location.pathname.startsWith('/property')) return 'Property Admin';
    if (location.pathname.startsWith('/unit')) return 'Unit Admin';
    if (location.pathname.startsWith('/deskadmin')) return 'Desk Admin';
    if (location.pathname.startsWith('/companyadmin')) return 'Company Admin';
    if (location.pathname.startsWith('/visitors')) return 'Visitor Admin';
    return 'Campus Admin'; // Default role
  };

  return (
    <header className="border-bottom d-flex align-items-center p-3 bg-light">
      {/* Left Section: Sidebar Toggle & Title */}
      <div className="d-flex align-items-center">
        <button
          className="btn d-md-none me-2"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          <i className="bi bi-list"></i>
        </button>
        <i className="bi bi-grid me-2"></i>
        <h1 className="h5 mb-0">Dashboard</h1>
      </div>

      {/* Middle Section: Role Name & Search Bar */}
      <div className="d-flex flex-grow-1 justify-content-start ms-35">
        <span
          className="fw-bold text-truncate"
          style={{
            maxWidth: '150px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {getAdminRole()}
        </span>
        <div className="input-group" style={{ maxWidth: '500px' }}>
          <span className="input-group-text ms-30">
            <i className="bi bi-search"></i>
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
      </div>

      {/* Right Section: Notifications, Settings, Profile */}
      <div className="d-flex align-items-center">
        <div className="position-relative me-3">
          <i className="bi bi-bell fs-5"></i>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              fontSize: '0.75rem',
            }}
          >3</span>
        </div>
        <i className="bi bi-gear fs-5 me-3"></i>
        <i className="bi bi-question-circle fs-5 me-3"></i>

        {/* Profile Section */}
        <div className="d-flex align-items-center">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#1e3a38',
              color: 'white',
              fontWeight: 'bold',
              marginRight: '8px',
            }}
          >
            JD
          </div>
          <div>
            <div className="fw-medium">John Doe</div>
            <div className="small text-muted">{getAdminRole()}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
