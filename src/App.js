// import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <div className="sidebar" id="sidebar">
//         <div className="logo-container">
//             <img src="/api/placeholder/40/40" alt="1/Pass Logo" className="logo"/>
//             <span className="logo-text">1/Pass</span>
//         </div>

//         <div className="menu-item active">
//             <i className="fas fa-th-large"></i>
//             <span className="menu-item-text">Dashboard</span>
//         </div>

//         <div className="menu-item">
//             <i className="fas fa-users"></i>
//             <span className="menu-item-text">Visitors</span>
//         </div>

//         <div className="menu-item">
//             <i className="fas fa-ticket-alt"></i>
//             <span className="menu-item-text">Invites</span>
//         </div>

//         <div className="menu-item">
//             <i className="fas fa-clipboard-check"></i>
//             <span className="menu-item-text">Check-ins</span>
//         </div>

//         <div className="menu-item">
//             <i className="fas fa-building"></i>
//             <span className="menu-item-text">Properties</span>
//         </div>

//         <div className="menu-item">
//             <i className="fas fa-chart-bar"></i>
//             <span className="menu-item-text">Reports</span>
//         </div>

//         <div className="bottom-menu">
//             <div className="menu-item">
//                 <i className="fas fa-cog"></i>
//                 <span className="menu-item-text">Settings</span>
//             </div>

//             <div className="menu-item">
//                 <i className="fas fa-question-circle"></i>
//                 <span className="menu-item-text">Help & Support</span>
//             </div>

//             <div className="menu-item">
//                 <i className="fas fa-sign-out-alt"></i>
//                 <span className="menu-item-text">Logout</span>
//             </div>
//         </div>
//     </div>

//     <div className="main-content" id="mainContent">
//         <div className="header">
//             <div className="left-side">
//                 <button className="toggle-sidebar" id="toggleSidebar">
//                     <i className="fas fa-bars"></i>
//                 </button>
//                 <h1 className="page-title">Dashboard</h1>
//             </div>

//             <div className="user-controls">
//                 <button>
//                     <i className="fas fa-bell"></i>
//                     <span className="notification-badge">3</span>
//                 </button>
//                 <button>
//                     <i className="fas fa-download"></i>
//                 </button>
//                 <button>
//                     <i className="fas fa-share-alt"></i>
//                 </button>
//                 <div className="user-profile">
//                     <div className="user-avatar">JD</div>
//                     <div className="user-info">
//                         <div className="user-name">John Doe</div>
//                         <div className="user-role" id="displayedUserRole">Campus Admin</div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="filter-bar">
//             <div className="filter-bar-top">
//                 <div className="dropdown-container" id="roleDropdowns">
//                     <div className="dropdown-group company-admin-view hidden">
//                         <div className="dropdown-label">Select Unit</div>
//                         <select className="dropdown" id="companyUnitDropdown">
//                             <option value="">All Units</option>
//                             <option value="unit1">Unit 101</option>
//                             <option value="unit2">Unit 102</option>
//                             <option value="unit3">Unit 201</option>
//                         </select>
//                     </div>

//                     <div className="dropdown-group campus-admin-view">
//                         <div className="dropdown-label">Select Property</div>
//                         <select className="dropdown" id="campusPropertyDropdown">
//                             <option value="">All Properties</option>
//                             <option value="property1">Building A</option>
//                             <option value="property2">Building B</option>
//                             <option value="property3">Building C</option>
//                         </select>
//                     </div>
                    
//                     <div className="dropdown-group campus-admin-view hidden" id="campusUnitContainer">
//                         <div className="dropdown-label">Select Unit</div>
//                         <select className="dropdown" id="campusUnitDropdown">
//                             <option value="">All Units</option>
//                         </select>
//                     </div>
                    
//                     <div className="dropdown-group campus-admin-view hidden" id="campusDeskContainer">
//                         <div className="dropdown-label">Select Desk</div>
//                         <select className="dropdown" id="campusDeskDropdown">
//                             <option value="">All Desks</option>
//                         </select>
//                     </div>

//                     <div className="dropdown-group property-admin-view hidden">
//                         <div className="dropdown-label">Select Unit</div>
//                         <select className="dropdown" id="propertyUnitDropdown">
//                             <option value="">All Units</option>
//                             <option value="unit1">Unit 101</option>
//                             <option value="unit2">Unit 102</option>
//                             <option value="unit3">Unit 201</option>
//                         </select>
//                     </div>
                    
//                     <div className="dropdown-group property-admin-view hidden" id="propertyDeskContainer">
//                         <div className="dropdown-label">Select Desk</div>
//                         <select className="dropdown" id="propertyDeskDropdown">
//                             <option value="">All Desks</option>
//                         </select>
//                     </div>

//                     <div className="dropdown-group unit-admin-view hidden">
//                         <div className="dropdown-label">Select Desk</div>
//                         <select className="dropdown" id="unitDeskDropdown">
//                             <option value="">All Desks</option>
//                             <option value="desk1">Desk 1</option>
//                             <option value="desk2">Desk 2</option>
//                             <option value="desk3">Desk 3</option>
//                         </select>
//                     </div>

//                     <div className="dropdown-group">
//                         <div className="dropdown-label">Date Range</div>
//                         <select className="dropdown">
//                             <option value="today">Today</option>
//                             <option value="yesterday">Yesterday</option>
//                             <option value="thisWeek" selected>This Week</option>
//                             <option value="lastWeek">Last Week</option>
//                             <option value="thisMonth">This Month</option>
//                             <option value="lastMonth">Last Month</option>
//                             <option value="custom">Custom Range</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="search-container">
//                     <i className="fas fa-search search-icon"></i>
//                     <input type="text" className="search-input" placeholder="Search..."/>
//                 </div>
//             </div>

//             <div className="filter-bar-bottom">
//                 <div className="filter-actions">
//                     <button className="filter-button active">All</button>
//                     <button className="filter-button">Pending</button>
//                     <button className="filter-button">Checked-in</button>
//                     <button className="filter-button">Cancelled</button>
//                     <button className="filter-button">Expired</button>
//                 </div>

//                 <div className="action-buttons">
//                     <button className="action-button">
//                         <i className="fas fa-filter"></i>
//                         <span>Filter</span>
//                     </button>
//                     <button className="action-button">
//                         <i className="fas fa-sort"></i>
//                         <span>Sort</span>
//                     </button>
//                     <button className="action-button primary">
//                         <i className="fas fa-plus"></i>
//                         <span>New Invite</span>
//                     </button>
//                 </div>
//             </div>
//         </div>

//         <div className="stats-container">
//             <div className="stat-card">
//                 <div className="stat-card-header">
//                     <div className="stat-card-title">Total Invites</div>
//                     <div className="stat-card-icon">
//                         <i className="fas fa-ticket-alt"></i>
//                     </div>
//                 </div>
//                 <div className="stat-card-value">523</div>
//                 <div className="stat-card-footer">
//                     <div className="stat-card-trend up">
//                         <i className="fas fa-arrow-up"></i>
//                         <span>8.2%</span>
//                     </div>
//                     <div className="stat-card-period">vs last week</div>
//                 </div>
//             </div>

//             <div className="stat-card">
//                 <div className="stat-card-header">
//                     <div className="stat-card-title">Check-ins</div>
//                     <div className="stat-card-icon">
//                         <i className="fas fa-clipboard-check"></i>
//                     </div>
//                 </div>
//                 <div className="stat-card-value">384</div>
//                 <div className="stat-card-footer">
//                     <div className="stat-card-trend up">
//                         <i className="fas fa-arrow-up"></i>
//                         <span>5.3%</span>
//                     </div>
//                     <div className="stat-card-period">vs last week</div>
//                 </div>
//             </div>

//             <div className="stat-card">
//                 <div className="stat-card-header">
//                     <div className="stat-card-title">Pending</div>
//                     <div className="stat-card-icon">
//                         <i className="fas fa-clock"></i>
//                     </div>
//                 </div>
//                 <div className="stat-card-value">87</div>
//                 <div className="stat-card-footer">
//                     <div className="stat-card-trend down">
//                         <i className="fas fa-arrow-down"></i>
//                         <span>2.1%</span>
//                     </div>
//                     <div className="stat-card-period">vs last week</div>
//                 </div>
//             </div>

//             <div className="stat-card">
//                 <div className="stat-card-header">
//                     <div className="stat-card-title">Cancelled</div>
//                     <div className="stat-card-icon">
//                         <i className="fas fa-ban"></i>
//                     </div>
//                 </div>
//                 <div className="stat-card-value">52</div>
//                 <div className="stat-card-footer">
//                     <div className="stat-card-trend up">
//                         <i className="fas fa-arrow-up"></i>
//                         <span>3.7%</span>
//                     </div>
//                     <div className="stat-card-period">vs last week</div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default App;
