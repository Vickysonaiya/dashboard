import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
    const route = createBrowserRouter([
    {
      path: "/",
      element:<Dashboard/>
    },
    
    ]);
    return (
      <div className="App">
        <RouterProvider router={route}></RouterProvider>
      </div>
    );
  }
  
  export default App;