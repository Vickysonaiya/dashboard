import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logoMain from "../../../assets/images/1Pass_Logo.svg";
import "./checkin.css";

const CheckIn = () => {
  const [pendingArrivals, setPendingArrivals] = useState([
    {
      visitId: "01",
      expectedArrivalTime: "02:00",
      hostName: "John Doe",
      visitorName: "Vicky",
      visitPurpose: "Meeting",
      otpQrStatus: "OTP",
    },
    {
      visitId: "02",
      expectedArrivalTime: "03:00",
      hostName: "John Doe",
      visitorName: "Karan",
      visitPurpose: "Interview",
      otpQrStatus: "OTP",
    },
    {
      visitId: "03",
      expectedArrivalTime: "04:00",
      hostName: "Jane Doe",
      visitorName: "Cina",
      visitPurpose: "Meeting",
      otpQrStatus: "OTP",
    },
    {
      visitId: "04",
      expectedArrivalTime: "05:00",
      hostName: "Jane Doe",
      visitorName: "Hardik",
      visitPurpose: "Interview",
      otpQrStatus: "OTP",
    },
    {
      visitId: "05",
      expectedArrivalTime: "06:00",
      hostName: "John Doe",
      visitorName: "Dhoni",
      visitPurpose: "Meeting",
      otpQrStatus: "OTP",
    },
  ]);

  const [recentCheckins, setRecentCheckins] = useState([
    {
      visitId: "01",
      checkinTime: "02:00",
      hostName: "John Doe",
      visitorName: "Vicky",
      ndaStatus: "Signed",
      safetySopStatus: "Completed",
      wifiProvided: "Yes",
    },
    {
      visitId: "02",
      checkinTime: "03:00",
      hostName: "John Doe",
      visitorName: "Karan",
      ndaStatus: "Not Signed",
      safetySopStatus: "Not Completed",
      wifiProvided: "No",
    },
    {
      visitId: "03",
      checkinTime: "04:00",
      hostName: "Jane Doe",
      visitorName: "Cina",
      ndaStatus: "Signed",
      safetySopStatus: "Completed",
      wifiProvided: "Yes",
    },
    {
      visitId: "04",
      checkinTime: "05:00",
      hostName: "Jane Doe",
      visitorName: "Hardik",
      ndaStatus: "Not Signed",
      safetySopStatus: "Not Completed",
      wifiProvided: "No",
    },
    {
      visitId: "05",
      checkinTime: "06:00",
      hostName: "John Doe",
      visitorName: "Dhoni",
      ndaStatus: "Signed",
      safetySopStatus: "Completed",
      wifiProvided: "Yes",
    },
  ]);

  const [dateRange, setDateRange] = useState("Today");
  const [customDate, setCustomDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [activeFooterItem, setActiveFooterItem] = useState(null);
  const [showPendingCheckins, setShowPendingCheckins] = useState(false);
  const [showRecentCheckins, setShowRecentCheckins] = useState(false);
  const navigate = useNavigate();
  const [pendingArrivalsFilters, setPendingArrivalsFilters] = useState({
    timeWindow: "",
    host: "",
    visitPurpose: "",
  });
  const [recentCheckinsFilters, setRecentCheckinsFilters] = useState({
    timeWindow: "",
    ndaStatus: "",
    safetySopStatus: "",
  });

  useEffect(() => {
    fetchPendingArrivals();
    fetchRecentCheckins();
  }, []);

  const fetchPendingArrivals = async () => {
    // Fetch pending arrivals data from API or database
    const response = await fetch("/api/pending-arrivals");
    const data = await response.json();
    setPendingArrivals(data);
  };

  const fetchRecentCheckins = async () => {
    // Fetch recent check-ins data from API or database
    const response = await fetch("/api/recent-checkins");
    const data = await response.json();
    setRecentCheckins(data);
  };

  const handlePendingArrivalsFilterChange = (e) => {
    const { name, value } = e.target;
    setPendingArrivalsFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleRecentCheckinsFilterChange = (e) => {
    const { name, value } = e.target;
    setRecentCheckinsFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleShowPendingCheckins = () => {
    setShowPendingCheckins(true);
  };
  const handleShowRecentCheckins = () => {
    setShowRecentCheckins(true);
  };

  const cardNavigation = (stat, e) => {
    if (stat.title === "Pending Arrivals") {
      handleShowPendingCheckins();
    } else if (stat.title === "Recent Check-ins") {
      handleShowRecentCheckins();
    }
  };

  console.log("function call", cardNavigation);

  const stats = [
    { id: 1, title: "Pending Arrivals", count: 10 },
    { id: 2, title: "Recent Check-ins", count: 20 },
    { id: 3, title: "Failed Check-ins", count: 2 },
  ];

  const navItems = [
    { id: 1, title: "Dashboard", icon: "bi-grid", path: "/deskadmin" },
    {
      id: 2,
      title: "Check-in Management",
      icon: "bi-person",
      path: "/check-in",
    },
    {
      id: 3,
      title: "Check-out Management",
      icon: "bi-check-square",
      path: "/check-out",
    },
    {
      id: 4,
      title: "Activity Logs",
      icon: "bi-question-circle",
      path: "/activity-logs",
    },
  ];

  const footerNavItems = [
    { id: 1, title: "Settings", icon: "bi-gear" },
    { id: 2, title: "Help & Support", icon: "bi-question-circle" },
    { id: 3, title: "Logout", icon: "bi-box-arrow-right" },
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
    setShowCalendar(selectedValue === "Custom Range");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white"
        style={{
          width: sidebarVisible ? "250px" : "0px",
          minHeight: "100vh",
          position: "fixed",
          transition: "width 0.3s ease",
          zIndex: 1000,
          backgroundColor: "#1e3a38",
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
                  className={`nav-link ${activeNavItem + 1 === item.id ? "active" : ""} d-flex align-items-center`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.id, item.path);
                  }}
                  style={{
                    backgroundColor:
                      activeNavItem + 1 === item.id ? "#2c5451" : "transparent",
                    color: "#fff",
                    padding: "0.8rem 1rem",
                  }}
                >
                  <i className={`${item.icon} me-2`}></i>
                  <span>{item.title} </span>
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
                  className={`nav-link ${activeFooterItem === item.id ? "active" : ""} d-flex align-items-center`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterItemClick(item.id);
                  }}
                  style={{
                    backgroundColor:
                      activeFooterItem === item.id ? "#2c5451" : "transparent",
                    color: "#fff",
                    padding: "0.8rem 1rem",
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
          marginLeft: sidebarVisible ? "250px" : "0px",
          flex: 1,
          transition: "margin-left 0.3s ease",
          width: "100%",
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
            <h1 className="h4 mb-0">Check-In Management</h1>
          </div>

          <div className="col-md-5">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="position-relative me-3 badges">
              <i className="bi bi-bell fs-5"></i>
              <span
                className="badge rounded-pill bg-danger"
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#1e3a38",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "8px",
                  fontWeight: "bold",
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
                  <option>Last Month</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Custom Range</option>
                </select>
              </div>
              {showCalendar && (
                <div className="col-md-3">
                  <input
                    type="date"
                    className="form-control"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Stats Cards */}
          <div className="row mb-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="col-md-6 col-lg-3 mb-3"
                onClick={(e) => cardNavigation(stat, e)}
              >
                <div className="bg-white rounded p-3 shadow-sm h-100">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="text-muted">{stat.title}</div>
                    <i className="bi bi-three-dots"></i>
                  </div>
                  <div className="h3 mb-2">{stat.count}</div>
                  <div className="small" style={{ color: "#28a745" }}>
                    <i className="bi bi-arrow-up"></i> 10% vs last week
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showPendingCheckins && (
            <div>
              {/* Pending Arrivals Table */}
              <h2>Pending Arrivals</h2>
              <div className="row mb-3 align-items-start">
                <div className="col-md-3 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    name="timeWindow"
                    value={pendingArrivalsFilters.timeWindow}
                    onChange={handlePendingArrivalsFilterChange}
                  >
                    <option value="">Select Time Window</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="thisWeek">This Week</option>
                  </select>
                </div>
                <div className="col-md-2 mb-2 mb-md-0 ms-10">
                  <select
                    className="form-select"
                    name="host"
                    value={pendingArrivalsFilters.host}
                    onChange={handlePendingArrivalsFilterChange}
                  >
                    <option value="">Select Host</option>
                    {pendingArrivals.map((arrival, index) => {
                      if (
                        !pendingArrivals
                          .slice(0, index)
                          .some(
                            (prevArrival) =>
                              prevArrival.hostName === arrival.hostName,
                          )
                      ) {
                        return (
                          <option
                            key={arrival.hostName}
                            value={arrival.hostName}
                          >
                            {arrival.hostName}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
                <div className="col-md-3 mb-2 mb-md-0 ms-20">
                  <select
                    className="form-select"
                    name="visitPurpose"
                    value={pendingArrivalsFilters.visitPurpose}
                    onChange={handlePendingArrivalsFilterChange}
                  >
                    <option value="">Select Visit Purpose</option>
                    {pendingArrivals.map((arrival, index) => {
                      if (
                        !pendingArrivals
                          .slice(0, index)
                          .some(
                            (prevArrival) =>
                              prevArrival.visitPurpose === arrival.visitPurpose,
                          )
                      ) {
                        return (
                          <option
                            key={arrival.visitPurpose}
                            value={arrival.visitPurpose}
                          >
                            {arrival.visitPurpose}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Visit ID</th>
                    <th>Expected Arrival Time</th>
                    <th>Host Name</th>
                    <th>Visitor Name</th>
                    <th>Visit Purpose</th>
                    <th>OTP/QR Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingArrivals
                    .filter((arrival) => {
                      if (pendingArrivalsFilters.timeWindow) {
                        return (
                          arrival.expectedArrivalTime >=
                          pendingArrivalsFilters.timeWindow
                        );
                      }
                      if (pendingArrivalsFilters.host) {
                        return arrival.hostName === pendingArrivalsFilters.host;
                      }
                      if (pendingArrivalsFilters.visitPurpose) {
                        return (
                          arrival.visitPurpose ===
                          pendingArrivalsFilters.visitPurpose
                        );
                      }
                      return true;
                    })
                    .map((arrival) => (
                      <tr key={arrival.visitId}>
                        <td>{arrival.visitId}</td>
                        <td>{arrival.expectedArrivalTime}</td>
                        <td>{arrival.hostName}</td>
                        <td>{arrival.visitorName}</td>
                        <td>{arrival.visitPurpose}</td>
                        <td>{arrival.otpQrStatus}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {showRecentCheckins && (
            <div>
              {/* Recent Check-ins Table */}
              <h2>Recent Check-ins</h2>
              <div className="row mb-3 align-items-start">
                <div className="col-md-3 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    name="timeWindow"
                    value={recentCheckinsFilters.timeWindow}
                    onChange={handleRecentCheckinsFilterChange}
                  >
                    <option value="">Select Time Window</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="thisWeek">This Week</option>
                  </select>
                </div>
                <div className="col-md-2 mb-2 mb-md-0 ms-10">
                  <select
                    className="form-select"
                    name="host"
                    value={recentCheckinsFilters.host}
                    onChange={handleRecentCheckinsFilterChange}
                  >
                    <option value="">Select Host</option>
                    {recentCheckins.map((checkin, index) => {
                      if (
                        !recentCheckins
                          .slice(0, index)
                          .some(
                            (prevCheckin) =>
                              prevCheckin.hostName === checkin.hostName,
                          )
                      ) {
                        return (
                          <option
                            key={checkin.hostName}
                            value={checkin.hostName}
                          >
                            {checkin.hostName}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Visit ID</th>
                    <th>Check-in Time</th>
                    <th>Host Name</th>
                    <th>Visitor Name</th>
                    <th>NDA Status</th>
                    <th>Safety SOP Status</th>
                    <th>Wi-Fi Provided</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCheckins
                    .filter((checkin) => {
                      if (recentCheckinsFilters.timeWindow) {
                        return (
                          checkin.checkinTime >=
                          recentCheckinsFilters.timeWindow
                        );
                      }
                      if (recentCheckinsFilters.host) {
                        return checkin.hostName === recentCheckinsFilters.host;
                      }
                      if (recentCheckinsFilters.visitPurpose) {
                        return (
                          checkin.visitPurpose ===
                          recentCheckinsFilters.visitPurpose
                        );
                      }
                      if (recentCheckinsFilters.ndaStatus) {
                        return (
                          checkin.ndaStatus === recentCheckinsFilters.ndaStatus
                        );
                      }
                      if (recentCheckinsFilters.safetySopStatus) {
                        return (
                          checkin.safetySopStatus ===
                          recentCheckinsFilters.safetySopStatus
                        );
                      }
                      return true;
                    })
                    .map((checkin) => (
                      <tr key={checkin.visitId}>
                        <td>{checkin.visitId}</td>
                        <td>{checkin.checkinTime}</td>
                        <td>{checkin.hostName}</td>
                        <td>{checkin.visitorName}</td>
                        <td>{checkin.ndaStatus}</td>
                        <td>{checkin.safetySopStatus}</td>
                        <td>{checkin.wifiProvided}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

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

export default CheckIn;
