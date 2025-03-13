import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard'
import Property from './pages/Propertyadmin/Property'
import Unit from './pages/Unit/Unit'
import Deskadmin from './pages/Desk/Deskadmin'
import Company from './pages/Company/Company'
import Visitors from './components/Visitors/Visitors';
import Checkin from './pages/Desk/Checkin/Checkin'
import CheckOut from './pages/Desk/Checkout/Checkout';
import Activitylog from './pages/Desk/Activitylog/Activitylog';

function App() {
    
    return (
      <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/property" element={<Property />} />
                <Route path="/unit" element={<Unit />} />
                <Route path="/deskadmin" element={<Deskadmin />} />
                <Route path="/companyadmin" element={<Company />} />
                <Route path="/visitors" element={<Visitors />} />
                <Route path="/check-in" element={<Checkin />} />
                <Route path="/check-out" element={<CheckOut />} />
                <Route path="/activity-logs" element={<Activitylog />} />

            </Routes>
        </Router>
    );
  }
  
  export default App;