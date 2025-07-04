import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import unitolLogo from "../../assets/images/Unitol_logo.jpeg";

const Header = ({ sidebarVisible, setSidebarVisible }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine the admin role based on the active sidebar section
  const getAdminRole = () => {
    if (location.pathname.startsWith("/property")) return "Property Admin";
    if (location.pathname.startsWith("/unit")) return "Unit Admin";
    if (location.pathname.startsWith("/active-guests")) return "Unit Admin";
    if (location.pathname.startsWith("/invited-guests")) return "Unit Admin";
    if (location.pathname.startsWith("/yet-to-checkin")) return "Unit Admin";
    if (location.pathname.startsWith("/walk-in-guests")) return "Unit Admin";
    if (location.pathname.startsWith("/deskadmin")) return "Desk Admin";
    if (location.pathname.startsWith("/companyadmin")) return "Company Admin";
    if (location.pathname.startsWith("/visitors")) return "Visitor Admin";
    return "Company Admin"; // Default
    // return 'Campus Admin'; // Default
  };

  const isCompanyAdmin = getAdminRole() === "Company Admin";

  // Redirect to the appropriate dashboard
  const handleRoleClick = () => {
    const role = getAdminRole();
    switch (role) {
      case "Company Admin":
        navigate("/companyadmin");
        break;
      case "Unit Admin":
        navigate("/unit");
        break;
      case "Desk Admin":
        navigate("/deskadmin");
        break;
      case "Property Admin":
        navigate("/property");
        break;
      case "Visitor Admin":
        navigate("/visitors");
        break;
      default:
        navigate("/campus");
    }
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

      {/* Middle Section: Role & Search */}
      <div className="d-flex flex-grow-1 justify-content-start ms-35">
        <span
          className="fw-bold text-truncate headerStyle"
          style={{ cursor: "pointer", color: "#000" }}
          onClick={handleRoleClick}
        >
          {getAdminRole()}
        </span>
        <div className="input-group" style={{ maxWidth: "500px" }}>
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
              position: "absolute",
              top: "-5px",
              right: "-5px",
              fontSize: "0.75rem",
            }}
          >
            3
          </span>
        </div>
        <i className="bi bi-gear fs-5 me-3"></i>
        <i className="bi bi-question-circle fs-5 me-3"></i>

        {/* Profile Section */}
        {isCompanyAdmin ? (
          <div className="d-flex align-items-center">
            <img
              src={unitolLogo}
              alt="Unitol Logo"
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <div>
              <div className="fw-medium">Unitol Training Solutions</div>
              <div className="small text-muted">{getAdminRole()}</div>
            </div>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#1e3a38",
                color: "white",
                fontWeight: "bold",
                marginRight: "8px",
              }}
            >
              JD
            </div>
            <div>
              <div className="fw-medium">John Doe</div>
              <div className="small text-muted">{getAdminRole()}</div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
