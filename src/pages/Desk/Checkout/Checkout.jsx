import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoMain from '../../../assets/images/1Pass_Logo.svg'

const CheckOut = () => {
  const [dateRange, setDateRange] = useState('Today');
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [activeFooterItem, setActiveFooterItem] = useState(null);
  const navigate = useNavigate();

  const stats = [
    { id: 1, title: 'Expected Departures', count: 15 },
    { id: 2, title: 'Overdue Departures', count: 5 },
  ];

  const navItems = [
    { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/deskadmin' },
    { id: 2, title: 'Check-in Management', icon: 'bi-person', path: '/check-in' },
    { id: 3, title: 'Check-out Management', icon: 'bi-check-square', path: '/check-out' },
    { id: 4, title: 'Activity Logs', icon: 'bi-question-circle', path: '/activity-logs' },
  ];

  const footerNavItems = [
    { id: 1, title: 'Settings', icon: 'bi-gear' },
    { id: 2, title: 'Help & Support', icon: 'bi-question-circle' },
    { id: 3, title: 'Logout', icon: 'bi-box-arrow-right' },
  ];

  const handleNavItemClick = (id, path) => {
    setActiveNavItem(id);
    setActiveFooterItem(null);
    navigate(path);
  };

  const handleFooterItemClick = (id) => {
    setActiveFooterItem(id);
    setActiveNavItem(null);
  };

  const handleDateChange = (e) => {
    const selectedValue = e.target.value;
    setDateRange(selectedValue);
    if (selectedValue === "Today") {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setCustomDateFrom(formattedDate);
      setCustomDateTo(formattedDate);
      setShowCalendar(false);
    } else if (selectedValue === "Yesterday") {
      const yesterday = new Date(new Date().getTime() - 86400000);
      const formattedDate = yesterday.toISOString().split('T')[0];
      setCustomDateFrom(formattedDate);
      setCustomDateTo(formattedDate);
      setShowCalendar(false);
    } else if (selectedValue === "Custom Range") {
      setShowCalendar(true);
      setCustomDateFrom("");
      setCustomDateTo("");
    } else {
      setShowCalendar(false);
      setCustomDateFrom("");
      setCustomDateTo("");
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white"
        style={{
          width: sidebarVisible ? '250px' : '0px',
          minHeight: '100vh',
          position: 'fixed',
          transition: 'width 0.3s ease',
          zIndex: 1000,
          backgroundColor: '#1e3a38',
        }}
      >
        {/* Logo */}
        <div className="d-flex align-items-center p-3">
          <div className="w-10 h-10 bg-gray-300 rounded">
            <img src={logoMain} alt="1/Pass" />
          </div>
          <div className="fs-5 fw-bold ms-3">1/Pass</div>
        </div>

        {/* Navigation Menu */}
        <div>
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  className={`nav-link ${activeNavItem + 2 === item.id ? 'active' : ''} d-flex align-items-center`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.id, item.path);
                  }}
                  style={{
                    backgroundColor: activeNavItem + 2 === item.id ? '#2c5451' : 'transparent',
                    color: '#fff',
                    padding: '0.8rem 1rem',
                  }}
                >
                  <i className={`${item.icon} me-2`}></i>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Navigation */}
        <div className="mt-auto navHeight">
          <ul className="nav flex-column">
            {footerNavItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  className={`nav-link ${activeFooterItem === item.id ? 'active' : ''} d-flex align-items-center`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterItemClick(item.id);
                  }}
                  style={{
                    backgroundColor: activeFooterItem === item.id ? '#2c5451' : 'transparent',
                    color: '#fff',
                    padding: '0.8rem 1rem',
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

      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarVisible ? '250px' : '0px',
          flex: 1,
          transition: 'margin-left 0.3s ease',
          width: '100%',
        }}
      >
        {/* Header */}
        <header className="border-bottom d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center">
            <button
              className="btn d-md-none me-2"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              <i className="bi bi-list"></i>
            </button>
            <i className="bi bi-grid me-2"></i>
            <h1 className="h4 mb-0">Check-Out management</h1>
          </div>

          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="position-relative me-3 badges">
              <i className="bi bi-bell fs-5"></i>
              <span
                className="badge rounded-pill bg-danger"
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                }}
              >
                3
              </span>
            </div>
            <div className="badges">
              <span>
                <i className="bi bi-gear fs-5 me-3"></i>
              </span>
            </div>
            <div className="badges">
              <span>
                <i className="bi bi-question-circle fs-5 me-3"></i>
              </span>
            </div>

            <div className="d-flex align-items-center">
              <div
                className="badges"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1e3a38',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                  fontWeight: 'bold',
                }}
              >
                JD
              </div>
              <div>
                <div className="fw-medium badges">John Doe</div>
                <div className="small text-muted badges">Desk Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Area */}
        <div className="container-fluid bg-light p-3">
          {/* Filters */}
          <div className="bg-white rounded p-4 shadow-sm mb-4">
            <div className="row mb-1 align-items-end">
              <div className="col-md-2 mb-2 mb-md-0">
                <select
                  className="form-select"
                  value={dateRange}
                  onChange={handleDateChange}
                >
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div>
              {dateRange === "Today" && (
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    value={new Date().toISOString().split('T')[0]}
                    readOnly
                  />
                </div>
              )}
              {dateRange === "Yesterday" && (
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(new Date().getTime() - 86400000).toISOString().split('T')[0]}
                    readOnly
                  />
                </div>
              )}
              {showCalendar && (
                <div className="row">
                  <div className="col-md-2">
                    <label>From:</label>
                    <input
                      type="date"
                      className="form-control"
                      value={customDateFrom}
                      onChange={(e) => setCustomDateFrom(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>To:</label>
                    <input
                      type="date"
                      className="form-control"
                      value={customDateTo}
                      onChange={(e) => setCustomDateTo(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            {stats.map((stat) => (
              <div key={stat.id} className="col-md-6 col-lg-3 mb-3">
                <div className="bg-white rounded p-3 shadow-sm h-100">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="text-muted">{stat.title}</div>
                    <i className="bi bi-three-dots"></i>
                  </div>
                  <div className="h3 mb-2">{stat.count}</div>
                  <div className="small" style={{ color: '#28a745' }}>
                    <i className="bi bi-arrow-up"></i> 10% vs last week
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent */}
          <div className="bg-white rounded p-3 shadow-sm">
            <h5 className="mb-3">Recent</h5>
            {/* Recent content would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
