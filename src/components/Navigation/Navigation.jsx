import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard'
import Property from '../../pages/Propertyadmin/Property'
import Unit from '../../pages/Unit/Unit'
import Deskadmin from '../../pages/Desk/Deskadmin'
import Company from '../../pages/Company/Company'
import Visitors from '../../components/Visitors/Visitors';
import Checkin from '../../pages/Desk/Checkin/Checkin'
import CheckOut from '../../pages/Desk/Checkout/Checkout';
import Activitylog from '../../pages/Desk/Activitylog/Activitylog';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import CheckInHistory from '../../pages/Desk/Check-in-history/CheckInHistory';

const Navigation = () => {

    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeNavItem, setActiveNavItem] = useState(1);
    const [activeFooterItem, setActiveFooterItem] = useState(null);

    return (
        <div>
            <Sidebar
                activeNavItem={activeNavItem}
                setActiveNavItem={setActiveNavItem}
                activeFooterItem={activeFooterItem}
                setActiveFooterItem={setActiveFooterItem}
                sidebarVisible={sidebarVisible}
                setSidebarVisible={setSidebarVisible}
            />

            <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/property" element={<Property />} />
                <Route path="/unit" element={<Unit />} />
                <Route path="/deskadmin" element={<Deskadmin />} />
                <Route path="/companyadmin" element={<Company />} />
                <Route path="/visitors" element={<Visitors />} />
                <Route path="/deskadmin/check-in" element={<Checkin />} />
                <Route path="/companyadmin/check-in" element={<Checkin />} />
                <Route path="/deskadmin/check-out" element={<CheckOut />} />
                <Route path="/companyadmin/check-out" element={<CheckOut />} />
                <Route path="/deskadmin/check-in-history" element={<CheckInHistory />} />
                <Route path="/companyadmin/check-in-history" element={<CheckInHistory />} />
                <Route path="/activity-logs" element={<Activitylog />} />
            </Routes>
        </div>
    )
}

export default Navigation
