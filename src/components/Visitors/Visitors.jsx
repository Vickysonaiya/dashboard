// // import React from 'react';

// // const Visitors = () => {
// //     return (
// //         <div className="container p-4">
// //             <h2>Visitors Screen</h2>
// //             <p>List of visitors will be displayed here.</p>
// //         </div>
// //     );
// // };

// // export default Visitors;


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// // import logoMain from '../../assets/images/1Pass_Logo.svg';

// // const Dashboard = () => {
// //     const [selectedUnit, setSelectedUnit] = useState('');
// //     const [selectedDesk, setSelectedDesk] = useState('');
// //     const [dateRange, setDateRange] = useState('Today');
// //     const [sidebarVisible, setSidebarVisible] = useState(true);
// //     const navigate = useNavigate();

// //     // Define units and desks mapping
// //     const units = ['Unit A', 'Unit B', 'Unit C'];
// //     const desks = {
// //         'Unit A': ['Desk 1A', 'Desk 2A', 'Desk 3A'],
// //         'Unit B': ['Desk 1B', 'Desk 2B', 'Desk 3B'],
// //         'Unit C': ['Desk 1C', 'Desk 2C', 'Desk 3C'],
// //     };

// //     // Handle unit selection
// //     const handleUnitChange = (e) => {
// //         const selected = e.target.value;
// //         setSelectedUnit(selected);
        
// //         // Auto-select the first available desk for the chosen unit
// //         setSelectedDesk(desks[selected]?.[0] || '');
// //     };

// //     return (
// //         <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
// //             {/* Sidebar */}
// //             <div
// //                 className="bg-dark text-white"
// //                 style={{ width: sidebarVisible ? '250px' : '0px', transition: 'width 0.3s ease', backgroundColor: '#1e3a38' }}
// //             >
// //                 <div className="d-flex align-items-center p-3">
// //                     <img src={logoMain} alt="1/Pass" style={{ width: '40px' }} />
// //                     <div className="fs-5 fw-bold ms-3">1/Pass</div>
// //                 </div>
// //             </div>

// //             {/* Main Content */}
// //             <div style={{ marginLeft: sidebarVisible ? '250px' : '0px', flex: 1, transition: 'margin-left 0.3s ease' }}>
// //                 <header className="border-bottom d-flex justify-content-between align-items-center p-3">
// //                     <h1 className="h4 mb-0">Dashboard</h1>
// //                 </header>

// //                 <div className="container-fluid bg-light p-3">
// //                     {/* Filters */}
// //                     <div className="bg-white rounded p-3 shadow-sm mb-4">
// //                         <div className="row mb-3 align-items-end">
// //                             {/* Unit Selection */}
// //                             <div className="col-md-4">
// //                                 <label className="form-label">Select Unit</label>
// //                                 <select className="form-select" value={selectedUnit} onChange={handleUnitChange}>
// //                                     <option value="">All Units</option>
// //                                     {units.map((unit) => (
// //                                         <option key={unit} value={unit}>
// //                                             {unit}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                             </div>

// //                             {/* Desk Selection (auto-updated) */}
// //                             <div className="col-md-4">
// //                                 <label className="form-label">Select Desk</label>
// //                                 <select className="form-select" value={selectedDesk} onChange={(e) => setSelectedDesk(e.target.value)}>
// //                                     <option value="">All Desks</option>
// //                                     {desks[selectedUnit]?.map((desk) => (
// //                                         <option key={desk} value={desk}>
// //                                             {desk}
// //                                         </option>
// //                                     ))}
// //                                 </select>
// //                             </div>

// //                             {/* Date Range Selection */}
// //                             <div className="col-md-4">
// //                                 <label className="form-label">Date Range</label>
// //                                 <select className="form-select" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
// //                                     <option>Today</option>
// //                                     <option>Yesterday</option>
// //                                     <option>This Week</option>
// //                                     <option>Last Month</option>
// //                                     <option>This Month</option>
// //                                     <option>Custom Range</option>
// //                                 </select>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Content Area */}
// //                     <div className="bg-white rounded p-3 shadow-sm">
// //                         <h5 className="mb-3">Dashboard Content</h5>
// //                         <p>Selected Unit: <strong>{selectedUnit || "All Units"}</strong></p>
// //                         <p>Selected Desk: <strong>{selectedDesk || "All Desks"}</strong></p>
// //                         <p>Selected Date: <strong>{dateRange || "Today"}</strong></p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Dashboard;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import logoMain from '../../assets/images/1Pass_Logo.svg';

// const Dashboard = () => {
//   const [activeNavItem, setActiveNavItem] = useState(1);
//   const navigate = useNavigate();

//   const stats = [
//     { id: 1, title: 'Pending Check-ins', count: 10 },
//     { id: 2, title: 'Recent Check-ins', count: 20 },
//     { id: 3, title: 'Expected Departures', count: 15 },
//     { id: 4, title: 'Overdue Departures', count: 5 },
//     { id: 5, title: 'Failed Check-ins', count: 2 },
//   ];

//   const navItems = [
//     { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
//     { id: 2, title: 'Check-in Management', icon: 'bi-person', path: '/checkin-management' },
//     { id: 3, title: 'Check-out Management', icon: 'bi-check-square', path: '/checkout-management' },
//     { id: 4, title: 'Activity Logs', icon: 'bi-question-circle', path: '/activity-logs' },
//   ];

//   const handleNavItemClick = (id, path) => {
//     setActiveNavItem(id);
//     navigate(path);
//   };

//   const filteredStats = activeNavItem === 2
//     ? stats.filter(stat => [1, 2, 5].includes(stat.id))
//     : stats;

//   return (
//     <div className="d-flex" style={{ minHeight: '100vh', overflow: 'hidden' }}>
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
//         <div className="d-flex align-items-center">
//           <img src={logoMain} alt="1/Pass" className="me-3" />
//           <span className="fs-5 fw-bold">1/Pass</span>
//         </div>
//         <ul className="nav flex-column mt-4">
//           {navItems.map(item => (
//             <li key={item.id} className="nav-item">
//               <a
//                 className={`nav-link ${activeNavItem === item.id ? 'active' : ''}`}
//                 href="/"
//                 onClick={e => {
//                   e.preventDefault();
//                   handleNavItemClick(item.id, item.path);
//                 }}
//               >
//                 <i className={`${item.icon} me-2`}></i>{item.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-3">
//         <h1 className="h4">Dashboard</h1>
//         <div className="row">
//           {filteredStats.map(stat => (
//             <div key={stat.id} className="col-md-4 mb-3">
//               <div className="card p-3">
//                 <h5>{stat.title}</h5>
//                 <h2>{stat.count}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const DetailedReports = () => {
//   const [pendingArrivals, setPendingArrivals] = useState([]);
//   const [recentCheckins, setRecentCheckins] = useState([]);
//   const [dailyCheckinLog, setDailyCheckinLog] = useState([]);
//   const [deskEfficiency, setDeskEfficiency] = useState([]);
//   const [overdueCheckouts, setOverdueCheckouts] = useState([]);

//   const [pendingArrivalsFilters, setPendingArrivalsFilters] = useState({
//     timeWindow: '',
//     host: '',
//     visitPurpose: '',
//   });

//   const [recentCheckinsFilters, setRecentCheckinsFilters] = useState({
//     timeWindow: '',
//     ndaStatus: '',
//     safetySopStatus: '',
//   });

//   const [dailyCheckinLogFilters, setDailyCheckinLogFilters] = useState({
//     date: '',
//     verificationStatus: '',
//     host: '',
//   });

//   const [deskEfficiencyFilters, setDeskEfficiencyFilters] = useState({
//     dateRange: '',
//   });

//   const [overdueCheckoutsFilters, setOverdueCheckoutsFilters] = useState({
//     date: '',
//     host: '',
//     unit: '',
//   });

//   useEffect(() => {
//     // Fetch data from API or database
//     fetchPendingArrivals();
//     fetchRecentCheckins();
//     fetchDailyCheckinLog();
//     fetchDeskEfficiency();
//     fetchOverdueCheckouts();
//   }, []);

//   const fetchPendingArrivals = async () => {
//     // Fetch pending arrivals data from API or database
//     const response = await fetch('/api/pending-arrivals');
//     const data = await response.json();
//     setPendingArrivals(data);
//   };

//   const fetchRecentCheckins = async () => {
//     // Fetch recent check-ins data from API or database
//     const response = await fetch('/api/recent-checkins');
//     const data = await response.json();
//     setRecentCheckins(data);
//   };

//   const fetchDailyCheckinLog = async () => {
//     // Fetch daily check-in log data from API or database
//     const response = await fetch('/api/daily-checkin-log');
//     const data = await response.json();
//     setDailyCheckinLog(data);
//   };

//   const fetchDeskEfficiency = async () => {
//     // Fetch desk efficiency data from API or database
//     const response = await fetch('/api/desk-efficiency');
//     const data = await response.json();
//     setDeskEfficiency(data);
//   };

//   const fetchOverdueCheckouts = async () => {
//     // Fetch overdue check-outs data from API or database
//     const response = await fetch('/api/overdue-checkouts');
//     const data = await response.json();
//     setOverdueCheckouts(data);
//   };

//   const handlePendingArrivalsFilterChange = (e) => {
//     const { name, value } = e.target;
//     setPendingArrivalsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handleRecentCheckinsFilterChange = (e) => {
//     const { name, value } = e.target;
//     setRecentCheckinsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handleDailyCheckinLogFilterChange = (e) => {
//     const { name, value } = e.target;
//     setDailyCheckinLogFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handleDeskEfficiencyFilterChange = (e) => {
//     const { name, value } = e.target;
//     setDeskEfficiencyFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handleOverdueCheckoutsFilterChange = (e) => {
//     const { name, value } = e.target;
//     setOverdueCheckoutsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   return (
//     <div>
//       <h1>Detailed Reports</h1>

//       {/* Pending Arrivals Table */}
//       <h2>Pending Arrivals</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Visit ID</th>
//             <th>Expected Arrival Time</th>
//             <th>Host Name</th>
//             <th>Visitor Name</th>
//             <th>Visit Purpose</th>
//             <th>OTP/QR Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pendingArrivals
//             .filter((arrival) => {
//               if (pendingArrivalsFilters.timeWindow) {
//                 return arrival.expectedArrivalTime >= pendingArrivalsFilters.timeWindow;
//               }
//               if (pendingArrivalsFilters.host) {
//                 return arrival.hostName === pendingArrivalsFilters.host;
//               }
//               if (pendingArrivalsFilters.visitPurpose) {
//                 return arrival.visitPurpose === pendingArrivalsFilters.visitPurpose;
//               }
//               return true;
//             })
//             .map((arrival) => (
//               <tr key={arrival.visitId}>
//                 <td>{arrival.visitId}</td>
//                 <td>{arrival.expectedArrivalTime}</td>
//                 <td>{arrival.hostName}</td>
//                 <td>{arrival.visitorName}</td>
//                 <td>{arrival.visitPurpose}</td>
//                 <td>{arrival.otpQrStatus}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="timeWindow"
//             value={pendingArrivalsFilters.timeWindow}
//             onChange={handlePendingArrivalsFilterChange}
//           >
//             <option value="">Select Time Window</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="thisWeek">This Week</option>
//           </select>
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="host"
//             value={pendingArrivalsFilters.host}
//             onChange={handlePendingArrivalsFilterChange}
//           >
//             <option value="">Select Host</option>
//             <option value="John Doe">John Doe</option>
//             <option value="Jane Doe">Jane Doe</option>
//           </select>
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="visitPurpose"
//             value={pendingArrivalsFilters.visitPurpose}
//             onChange={handlePendingArrivalsFilterChange}
//           >
//             <option value="">Select Visit Purpose</option>
//             <option value="meeting">Meeting</option>
//             <option value="interview">Interview</option>
//           </select>
//         </div>
//       </div>

//       {/* Recent Check-ins Table */}
//       <h2>Recent Check-ins</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Visit ID</th>
//             <th>Check-in Time</th>
//             <th>Host Name</th>
//             <th>Visitor Name</th>
//             <th>NDA Status</th>
//             <th>Safety SOP Status</th>
//             <th>Wi-Fi Provided</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recentCheckins
//             .filter((checkin) => {
//               if (recentCheckinsFilters.timeWindow) {
//                 return checkin.checkinTime >= recentCheckinsFilters.timeWindow;
//               }
//               if (recentCheckinsFilters.ndaStatus) {
//                 return checkin.ndaStatus === recentCheckinsFilters.ndaStatus;
//               }
//               if (recentCheckinsFilters.safetySopStatus) {
//                 return checkin.safetySopStatus === recentCheckinsFilters.safetySopStatus;
//               }
//               return true;
//             })
//             .map((checkin) => (
//               <tr key={checkin.visitId}>
//                 <td>{checkin.visitId}</td>
//                 <td>{checkin.checkinTime}</td>
//                 <td>{checkin.hostName}</td>
//                 <td>{checkin.visitorName}</td>
//                 <td>{checkin.ndaStatus}</td>
//                 <td>{checkin.safetySopStatus}</td>
//                 <td>{checkin.wifiProvided}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="timeWindow"
//             value={recentCheckinsFilters.timeWindow}
//             onChange={handleRecentCheckinsFilterChange}
//           >
//             <option value="">Select Time Window</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="thisWeek">This Week</option>
//           </select>
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="ndaStatus"
//             value={recentCheckinsFilters.ndaStatus}
//             onChange={handleRecentCheckinsFilterChange}
//           >
//             <option value="">Select NDA Status</option>
//             <option value="signed">Signed</option>
//             <option value="notSigned">Not Signed</option>
//           </select>
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="safetySopStatus"
//             value={recentCheckinsFilters.safetySopStatus}
//             onChange={handleRecentCheckinsFilterChange}
//           >
//             <option value="">Select Safety SOP Status</option>
//             <option value="completed">Completed</option>
//             <option value="notCompleted">Not Completed</option>
//           </select>
//         </div>
//       </div>

//       {/* Daily Check-in Log */}
//       <h2>Daily Check-in Log</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Visitor Name</th>
//             <th>Host Name</th>
//             <th>Company</th>
//             <th>Unit</th>
//             <th>Check-in Time</th>
//             <th>Expected Duration</th>
//             <th>Verification Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dailyCheckinLog
//             .filter((log) => {
//               if (dailyCheckinLogFilters.date) {
//                 return log.checkinTime >= dailyCheckinLogFilters.date;
//               }
//               if (dailyCheckinLogFilters.verificationStatus) {
//                 return log.verificationStatus === dailyCheckinLogFilters.verificationStatus;
//               }
//               if (dailyCheckinLogFilters.host) {
//                 return log.hostName === dailyCheckinLogFilters.host;
//               }
//               return true;
//             })
//             .map((log) => (
//               <tr key={log.id}>
//                 <td>{log.visitorName}</td>
//                 <td>{log.hostName}</td>
//                 <td>{log.company}</td>
//                 <td>{log.unit}</td>
//                 <td>{log.checkinTime}</td>
//                 <td>{log.expectedDuration}</td>
//                 <td>{log.verificationStatus}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <input
//             type="date"
//             className="form-control"
//             name="date"
//             value={dailyCheckinLogFilters.date}
//             onChange={handleDailyCheckinLogFilterChange}
//           />
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="verificationStatus"
//             value={dailyCheckinLogFilters.verificationStatus}
//             onChange={handleDailyCheckinLogFilterChange}
//           >
//             <option value="">Select Verification Status</option>
//             <option value="verified">Verified</option>
//             <option value="notVerified">Not Verified</option>
//           </select>
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="host"
//             value={dailyCheckinLogFilters.host}
//             onChange={handleDailyCheckinLogFilterChange}
//           >
//             <option value="">Select Host</option>
//             <option value="John Doe">John Doe</option>
//             <option value="Jane Doe">Jane Doe</option>
//           </select>
//         </div>
//       </div>

//       {/* Desk Efficiency */}
//       <h2>Desk Efficiency</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Total Check-ins</th>
//             <th>Average Processing Time</th>
//             <th>Peak Hours</th>
//           </tr>
//         </thead>
//         <tbody>
//           {deskEfficiency
//             .filter((efficiency) => {
//               if (deskEfficiencyFilters.dateRange) {
//                 return efficiency.date >= deskEfficiencyFilters.dateRange;
//               }
//               return true;
//             })
//             .map((efficiency) => (
//               <tr key={efficiency.id}>
//                 <td>{efficiency.date}</td>
//                 <td>{efficiency.totalCheckins}</td>
//                 <td>{efficiency.averageProcessingTime}</td>
//                 <td>{efficiency.peakHours}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <input
//             type="date"
//             className="form-control"
//             name="dateRange"
//             value={deskEfficiencyFilters.dateRange}
//             onChange={handleDeskEfficiencyFilterChange}
//           />
//         </div>
//       </div>

//       {/* Overdue Check-outs */}
//       <h2>Overdue Check-outs</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Visitor Name</th>
//             <th>Host Name</th>
//             <th>Check-in Time</th>
//             <th>Expected Check-out</th>
//             <th>Duration Overstay</th>
//           </tr>
//         </thead>
//         <tbody>
//           {overdueCheckouts
//             .filter((checkout) => {
//               if (overdueCheckoutsFilters.date) {
//                 return checkout.checkinTime >= overdueCheckoutsFilters.date;
//               }
//               if (overdueCheckoutsFilters.host) {
//                 return checkout.hostName === overdueCheckoutsFilters.host;
//               }
//               if (overdueCheckoutsFilters.unit) {
//                 return checkout.unit === overdueCheckoutsFilters.unit;
//               }
//               return true;
//             })
//             .map((checkout) => (
//               <tr key={checkout.id}>
//                 <td>{checkout.visitorName}</td>
//                 <td>{checkout.hostName}</td>
//                 <td>{checkout.checkinTime}</td>
//                 <td>{checkout.expectedCheckout}</td>
//                 <td>{checkout.durationOverstay}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <input
//             type="date"
//             className="form-control"
//             name="date"
//             value={overdueCheckoutsFilters.date}
//             onChange={handleOverdueCheckoutsFilterChange}
//           />
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="host"
//             value={overdueCheckoutsFilters.host}
//             onChange={handleOverdueCheckoutsFilterChange}
//           >
//             <option value="">Select Host</option>
//             <option value="John Doe">John Doe</option>
//             <option value="Jane Doe">Jane Doe</option>
//           </select>
//         </div>
//         <div className="col-md-2 mb-2 mb-md-0 ms-225">
//           <select
//             className="form-select"
//             name="unit"
//             value={overdueCheckoutsFilters.unit}
//             onChange={handleOverdueCheckoutsFilterChange}
//           >
//             <option value="">Select Unit</option>
//             <option value="Unit 1">Unit 1</option>
//             <option value="Unit 2">Unit 2</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailedReports;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DetailedReports = () => {
  const [pendingArrivals, setPendingArrivals] = useState([]);
  const [recentCheckins, setRecentCheckins] = useState([]);
  const [dailyCheckinLog, setDailyCheckinLog] = useState([]);
  const [deskEfficiency, setDeskEfficiency] = useState([]);
  const [overdueCheckouts, setOverdueCheckouts] = useState([]);

  const [pendingArrivalsFilters, setPendingArrivalsFilters] = useState({
    timeWindow: '',
    host: '',
    visitPurpose: '',
  });

  const [recentCheckinsFilters, setRecentCheckinsFilters] = useState({
    timeWindow: '',
    ndaStatus: '',
    safetySopStatus: '',
  });

  const [dailyCheckinLogFilters, setDailyCheckinLogFilters] = useState({
    date: '',
    verificationStatus: '',
    host: '',
  });

  const [deskEfficiencyFilters, setDeskEfficiencyFilters] = useState({
    dateRange: '',
  });

  const [overdueCheckoutsFilters, setOverdueCheckoutsFilters] = useState({
    date: '',
    host: '',
    unit: '',
  });

  const [showPendingCheckins, setShowPendingCheckins] = useState(false);

  useEffect(() => {
    // Fetch data from API or database
    fetchPendingArrivals();
    fetchRecentCheckins();
    fetchDailyCheckinLog();
    fetchDeskEfficiency();
    fetchOverdueCheckouts();
  }, []);

  const fetchPendingArrivals = async () => {
    // Fetch pending arrivals data from API or database
    const response = await fetch('/api/pending-arrivals');
    const data = await response.json();
    setPendingArrivals(data);
  };

  const fetchRecentCheckins = async () => {
    // Fetch recent check-ins data from API or database
    const response = await fetch('/api/recent-checkins');
    const data = await response.json();
    setRecentCheckins(data);
  };

  const fetchDailyCheckinLog = async () => {
    // Fetch daily check-in log data from API or database
    const response = await fetch('/api/daily-checkin-log');
    const data = await response.json();
    setDailyCheckinLog(data);
  };

  const fetchDeskEfficiency = async () => {
    // Fetch desk efficiency data from API or database
    const response = await fetch('/api/desk-efficiency');
    const data = await response.json();
    setDeskEfficiency(data);
  };

  const fetchOverdueCheckouts = async () => {
    // Fetch overdue check-outs data from API or database
    const response = await fetch('/api/overdue-checkouts');
    const data = await response.json();
    setOverdueCheckouts(data);
  };

  const handlePendingArrivalsFilterChange = (e) => {
    const { name, value } = e.target;
    setPendingArrivalsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleRecentCheckinsFilterChange = (e) => {
    const { name, value } = e.target;
    setRecentCheckinsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleDailyCheckinLogFilterChange = (e) => {
    const { name, value } = e.target;
    setDailyCheckinLogFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleDeskEfficiencyFilterChange = (e) => {
    const { name, value } = e.target;
    setDeskEfficiencyFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleOverdueCheckoutsFilterChange = (e) => {
    const { name, value } = e.target;
    setOverdueCheckoutsFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleShowPendingCheckins = () => {
    setShowPendingCheckins(true);
  };

  return (
    <div>
      <h1>Detailed Reports</h1>

      {/* Navigation Menu */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={handleShowPendingCheckins}
          >
            Pending Check-ins
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
          >
            Recent Check-ins
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
          >
            Daily Check-in Log
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
          >
            Desk Efficiency
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
          >
            Overdue Check-outs
          </a>
        </li>
      </ul>

      {showPendingCheckins && (
        <div>
          {/* Pending Arrivals Table */}
          <h2>Pending Arrivals</h2>
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
                    return arrival.expectedArrivalTime >= pendingArrivalsFilters.timeWindow;
                  }
                  if (pendingArrivalsFilters.host) {
                    return arrival.hostName === pendingArrivalsFilters.host;
                  }
                  if (pendingArrivalsFilters.visitPurpose) {
                    return arrival.visitPurpose === pendingArrivalsFilters.visitPurpose;
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
          <div className="row mb-3 align-items-end">
            <div className="col-md-2 mb-2 mb-md-0 ms-225">
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
            <div className="col-md-2 mb-2 mb-md-0 ms-225">
              <select
                className="form-select"
                name="host"
                value={pendingArrivalsFilters.host}
                onChange={handlePendingArrivalsFilterChange}
              >
                <option value="">Select Host</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
              </select>
            </div>
            <div className="col-md-2 mb-2 mb-md-0 ms-225">
              <select
                className="form-select"
                name="visitPurpose"
                value={pendingArrivalsFilters.visitPurpose}
                onChange={handlePendingArrivalsFilterChange}
              >
                <option value="">Select Visit Purpose</option>
                <option value="meeting">Meeting</option>
                <option value="interview">Interview</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedReports;
