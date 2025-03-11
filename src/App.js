import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Property from './components/Propertyadmin/Property'
import Unit from './components/Unit/Unit'
import Deskadmin from './components/Desk/Deskadmin'
import Company from './components/Company/Company'

function App() {
    const route = createBrowserRouter([
    {
      path: "/",
      element:<Dashboard/>
    },
    {
        path:"/property",
        element:<Property/>
    },
    {
        path:"/unit",
        element:<Unit/>
    },
    {
        path:"/deskadmin",
        element:<Deskadmin/>
    },
    {
        path:"/companyadmin",
        element:<Company/>
    }
    
    ]);
    return (
      <div className="App">
        <RouterProvider router={route}></RouterProvider>
      </div>
    );
  }
  
  export default App;