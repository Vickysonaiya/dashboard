import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Property from "../../pages/Propertyadmin/Property";
import Unit from "../../pages/Unit/Unit";
import Deskadmin from "../../pages/Desk/Deskadmin";
import Company from "../../pages/Company/Company";
import Visitors from "../../components/Visitors/Visitors";
// import Checkin from '../../pages/Desk/Checkin/Checkin';
import Checkin from "../../pages/Company/Checkin/Checkin";
import CheckOut from "../../pages/Desk/Checkout/Checkout";
import Activitylog from "../../pages/Desk/Activitylog/Activitylog";
import CheckInHistory from "../../pages/Desk/Check-in-history/CheckInHistory";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Login from "../Login/Login";
import ActiveGuestsPage from "../../pages/TablePages/ActiveGuestsPage";
import InvitedGuestsPage from "../../pages/TablePages/InvitedGuestsPage";
import YetToCheckInPage from "../../pages/TablePages/YetToCheckInPage";
import WalkInGuestsPage from "../../pages/TablePages/WalkInGuestsPage";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ⬅️ Login state
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [activeFooterItem, setActiveFooterItem] = useState(null);

  // Show login screen if not logged in
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div>
      {/* Show sidebar and header only after login */}
      <Sidebar
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        activeFooterItem={activeFooterItem}
        setActiveFooterItem={setActiveFooterItem}
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />

      <Header
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />

      <Routes>
        <Route path="/" element={<Company />} />
        <Route path="/property" element={<Property />} />
        <Route path="/unit" element={<Unit />} />
        <Route path="/deskadmin" element={<Deskadmin />} />
        <Route path="/companyadmin" element={<Company />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/deskadmin/check-in" element={<Checkin />} />
        <Route path="/companyadmin/check-in" element={<Checkin />} />
        <Route path="/deskadmin/check-out" element={<CheckOut />} />
        <Route path="/companyadmin/check-out" element={<CheckOut />} />
        <Route
          path="/deskadmin/check-in-history"
          element={<CheckInHistory />}
        />
        <Route
          path="/companyadmin/check-in-history"
          element={<CheckInHistory />}
        />
        <Route path="/activity-logs" element={<Activitylog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/active-guests" element={<ActiveGuestsPage />} />
        <Route path="/invited-guests" element={<InvitedGuestsPage />} />
        <Route path="/yet-to-checkin" element={<YetToCheckInPage />} />
        <Route path="/walk-in-guests" element={<WalkInGuestsPage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
