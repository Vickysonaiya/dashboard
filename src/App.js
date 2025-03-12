import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard'
import Property from './pages/Propertyadmin/Property'
import Unit from './pages/Unit/Unit'
import Deskadmin from './pages/Desk/Deskadmin'
import Company from './pages/Company/Company'
import Visitors from './components/Visitors/Visitors';

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
            </Routes>
        </Router>
    );
  }
  
  export default App;