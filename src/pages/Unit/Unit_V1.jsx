// Card Clickble Table Open Action Code

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import HourlyVisitorsChart from "../../components/Chart/HourlyVisitorsChart";
// import "./unit.css"; // Create this CSS file for animation styles

// const Dashboard = () => {
//   const [dateRange, setDateRange] = useState("Today");
//   const [deskFilter, setDeskFilter] = useState("All Desks");
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const [activeTable, setActiveTable] = useState(null);
//   const [animateTable, setAnimateTable] = useState(false);

//   const stats = [
//     {
//       id: 1,
//       title: "Active Guests",
//       count: 35,
//       change: 8.2,
//       increasing: true,
//       icon: "bi-people",
//       tableId: "activeVisitors",
//     },
//     {
//       id: 2,
//       title: "Invited Guests",
//       count: 59,
//       change: 5.3,
//       increasing: true,
//       icon: "bi-envelope",
//       tableId: "invitedGuests",
//     },
//     {
//       id: 3,
//       title: "Yet to Check-in",
//       count: 36,
//       change: 2.1,
//       increasing: false,
//       icon: "bi-calendar",
//       tableId: "yetToCheckIn",
//     },
//     {
//       id: 4,
//       title: "Walk-in Guests",
//       count: 12,
//       change: 3.7,
//       increasing: true,
//       icon: "bi-door-open",
//       tableId: "walkInGuests",
//     },
//   ];

//   const tableData = {
//     activeVisitors: [
//       {
//         id: 1,
//         CheckinTime: "01-Jul-25 12:15 PM",
//         Host: "Vicky Sonaiya",
//         Purpose: "",
//         VisitType: "",
//         VisitStatus: "Guest-in",
//         Guest: "John Doe",
//         Company: "Apex Innovations",
//       },
//       {
//         id: 2,
//         CheckinTime: "01-Jul-25 12:45 PM",
//         Host: "Vicky Sonaiya",
//         Purpose: "",
//         VisitType: "",
//         VisitStatus: "Guest-in",
//         Guest: "Robert Snow",
//         Company: "Nova Dynamics",
//       },
//       {
//         id: 3,
//         CheckinTime: "01-Jul-25 01:08 PM",
//         Host: "Nirav Purohit",
//         Purpose: "",
//         VisitType: "",
//         VisitStatus: "Guest-in",
//         Guest: "Kamil Mishra",
//         Company: "Summit Diagnostics",
//       },
//       {
//         id: 4,
//         CheckinTime: "01-Jul-25 01:22 PM",
//         Host: "Vishal Mishra",
//         Purpose: "",
//         VisitType: "",
//         VisitStatus: "Guest-in",
//         Guest: "Rohan Sharma",
//         Company: "MoveAxis",
//       },
//       {
//         id: 5,
//         CheckinTime: "01-Jul-25 02:35 PM",
//         Host: "Kishan Waghela",
//         Purpose: "",
//         VisitType: "",
//         VisitStatus: "Guest-in",
//         Guest: "Hafiz Shaikh",
//         Company: "Bharat Marketing L.T.D",
//       },
//       {
//         id: 6,
//         CheckinTime: "01-Jul-25 02:38 PM",
//         Host: "Kishan Waghela",
//         Purpose: "",
//         VisitType: "",
//         VisitStatus: "Guest-in",
//         Guest: "Hasnain Pathan",
//         Company: "Bharat Marketing L.T.D",
//       },
//     ],
//     invitedGuests: [
//       {
//         id: 1,
//         CheckinTime: "01-Jul-25 12:15 PM",
//         Host: "Vicky Sonaiya",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "12:30 PM",
//         VisitStatus: "Guest-in",
//         Guest: "John Doe",
//         Company: "Apex Innovations",
//       },
//       {
//         id: 2,
//         CheckinTime: "01-Jul-25 12:45 PM",
//         Host: "Vicky Sonaiya",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "01:00 PM",
//         VisitStatus: "Check-out 01:30 PM",
//         Guest: "Robert Snow",
//         Company: "Nova Dynamics",
//       },
//       {
//         id: 3,
//         CheckinTime: "01-Jul-25 01:08 PM",
//         Host: "Nirav Purohit",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "01:15 PM",
//         VisitStatus: "Guest-in",
//         Guest: "Kamil Mishra",
//         Company: "Summit Diagnostics",
//       },
//       {
//         id: 4,
//         CheckinTime: "01-Jul-25 01:22 PM",
//         Host: "Vishal Mishra",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "01:30 PM",
//         VisitStatus: "Check-Out 02:15 PM",
//         Guest: "Rohan Sharma",
//         Company: "MoveAxis",
//       },
//       {
//         id: 5,
//         CheckinTime: "01-Jul-25 02:35 PM",
//         Host: "Kishan Waghela",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "02:45 PM",
//         VisitStatus: "Guest-in",
//         Guest: "Hafiz Shaikh",
//         Company: "Bharat Marketing L.T.D",
//       },
//       {
//         id: 6,
//         CheckinTime: "01-Jul-25 02:38 PM",
//         Host: "Kishan Waghela",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "02:45 PM",
//         VisitStatus: "Guest-in",
//         Guest: "Hasnain Pathan",
//         Company: "Bharat Marketing L.T.D",
//       },
//     ],
//     yetToCheckIn: [
//       {
//         id: 1,
//         CheckinTime: "01-Jul-25 12:15 PM",
//         Host: "Vicky Sonaiya",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "12:30 PM",
//         VisitStatus: "Yet To Check-in",
//         Guest: "John Doe",
//         Company: "Apex Innovations",
//       },
//       {
//         id: 2,
//         CheckinTime: "01-Jul-25 12:45 PM",
//         Host: "Vicky Sonaiya",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "01:00 PM",
//         VisitStatus: "Yet To Check-in",
//         Guest: "Robert Snow",
//         Company: "Nova Dynamics",
//       },
//       {
//         id: 3,
//         CheckinTime: "01-Jul-25 01:08 PM",
//         Host: "Nirav Purohit",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "01:15 PM",
//         VisitStatus: "Yet To Check-in",
//         Guest: "Kamil Mishra",
//         Company: "Summit Diagnostics",
//       },
//       {
//         id: 4,
//         CheckinTime: "01-Jul-25 01:22 PM",
//         Host: "Vishal Mishra",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "01:30 PM",
//         VisitStatus: "Yet To Check-in",
//         Guest: "Rohan Sharma",
//         Company: "MoveAxis",
//       },
//       {
//         id: 5,
//         CheckinTime: "01-Jul-25 02:35 PM",
//         Host: "Kishan Waghela",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "02:45 PM",
//         VisitStatus: "Yet To Check-in",
//         Guest: "Hafiz Shaikh",
//         Company: "Bharat Marketing L.T.D",
//       },
//       {
//         id: 6,
//         CheckinTime: "01-Jul-25 02:38 PM",
//         Host: "Kishan Waghela",
//         Purpose: "",
//         VisitType: "",
//         InviteTime: "02:45 PM",
//         VisitStatus: "Yet To Check-in",
//         Guest: "Hasnain Pathan",
//         Company: "Bharat Marketing L.T.D",
//       },
//     ],
//     walkInGuests: [
//       { id: 1, name: "Sarah Wilson", time: "09:15 AM", host: "David Miller" },
//     ],
//   };

//   const StatsCard = ({ title, count, change, increasing, icon, tableId }) => (
//     <div
//       className={`rounded-4 p-4 shadow-sm h-100 position-relative stats-card ${
//         activeTable === tableId ? "border-primary border-3" : "border-0"
//       }`}
//       style={{
//         cursor: "pointer",
//         background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
//         transition: "all 0.3s ease-in-out",
//       }}
//       onClick={() => {
//         if (activeTable === tableId) {
//           setAnimateTable(false);
//           setTimeout(() => setActiveTable(null), 400);
//         } else {
//           setActiveTable(tableId);
//           setTimeout(() => setAnimateTable(true), 50);
//         }
//       }}
//     >
//       <div className="d-flex justify-content-between align-items-start mb-3">
//         <div className="text-muted fw-semibold">{title}</div>
//         <div
//           className="rounded-circle d-flex align-items-center justify-content-center"
//           style={{ width: "40px", height: "40px", backgroundColor: "#e9ecef" }}
//         >
//           <i className={`bi ${icon} fs-5 text-primary`}></i>
//         </div>
//       </div>
//       <div className="h1 fw-bold text-dark mb-2">{count}</div>
//       <div
//         className={`small d-flex align-items-center gap-1 ${
//           increasing ? "text-success" : "text-danger"
//         }`}
//       >
//         <i className={`bi bi-arrow-${increasing ? "up" : "down"}`}></i>
//         <span>{change}%</span>
//         <span className="text-muted">vs last week</span>
//       </div>
//     </div>
//   );

//   const renderTable = () => {
//     if (!activeTable) return null;

//     const data = tableData[activeTable];

//     switch (activeTable) {
//       case "activeVisitors":
//         return (
//           <table className="table table-striped mt-3">
//             <thead className="table-primary">
//               <tr>
//                 <th>Check-in Time</th>
//                 <th>Host</th>
//                 <th>Purpose</th>
//                 <th>Visit Type</th>
//                 <th>Visit Status</th>
//                 <th>Guest</th>
//                 <th>Company</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => {
//                 // Optional: define colors based on VisitStatus
//                 let statusColor = "#6c757d"; // default gray
//                 if (item.VisitStatus.toLowerCase().includes("guest-in"))
//                   statusColor = "#28a745";
//                 else if (item.VisitStatus.toLowerCase().includes("yet"))
//                   statusColor = "#ffc107";
//                 else if (item.VisitStatus.toLowerCase().includes("check-out"))
//                   statusColor = "#17a2b8";

//                 return (
//                   <tr key={item.id}>
//                     <td>{item.CheckinTime}</td>
//                     <td>{item.Host}</td>
//                     <td>{item.Purpose}</td>
//                     <td>{item.VisitType}</td>
//                     <td className="d-flex align-items-center gap-2">
//                       {item.VisitStatus}
//                       <span
//                         style={{
//                           width: "10px",
//                           height: "10px",
//                           borderRadius: "50%",
//                           backgroundColor: statusColor,
//                           display: "inline-block",
//                         }}
//                       ></span>
//                     </td>
//                     <td>{item.Guest}</td>
//                     <td>{item.Company}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         );
//       case "invitedGuests":
//         return (
//           <table className="table table-striped mt-3">
//             <thead className="table-primary">
//               <tr>
//                 <th>Check-in Time</th>
//                 <th>Host</th>
//                 <th>Purpose</th>
//                 <th>Visit Type</th>
//                 <th>Invite Time</th>
//                 <th>Visit Status</th>
//                 <th>Guest</th>
//                 <th>Company</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.CheckinTime}</td>
//                   <td>{item.Host}</td>
//                   <td>{item.Purpose}</td>
//                   <td>{item.VisitType}</td>
//                   <td>{item.InviteTime}</td>
//                   <td>
//                     {item.VisitStatus}{" "}
//                     <span
//                       style={{
//                         display: "inline-block",
//                         width: "10px",
//                         height: "10px",
//                         borderRadius: "50%",
//                         marginLeft: "8px",
//                         backgroundColor:
//                           item.VisitStatus.toLowerCase().includes("guest-in")
//                             ? "red"
//                             : item.VisitStatus.toLowerCase().includes(
//                                 "check-out"
//                               )
//                             ? "green"
//                             : item.VisitStatus.toLowerCase().includes(
//                                 "yet to check-in"
//                               )
//                             ? "gray"
//                             : "transparent",
//                       }}
//                     ></span>
//                   </td>
//                   <td>{item.Guest}</td>
//                   <td>{item.Company}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         );
//       case "yetToCheckIn":
//         return (
//           <table className="table table-striped mt-3">
//             <thead className="table-primary">
//               <tr>
//                 <th>Host</th>
//                 <th>Purpose</th>
//                 <th>Visit Type</th>
//                 <th>Invite Time</th>
//                 <th>Visit Status</th>
//                 <th>Guest</th>
//                 <th>Company</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.Host}</td>
//                   <td>{item.Purpose}</td>
//                   <td>{item.VisitType}</td>
//                   <td>{item.InviteTime}</td>
//                   <td>
//                     {item.VisitStatus}{" "}
//                     <span
//                       style={{
//                         display: "inline-block",
//                         width: "10px",
//                         height: "10px",
//                         backgroundColor: "Gray",
//                         borderRadius: "50%",
//                         marginLeft: "5px",
//                       }}
//                     >
//                       {" "}
//                     </span>
//                   </td>
//                   <td>{item.Guest}</td>
//                   <td>{item.Company}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         );
//       case "walkInGuests":
//         return (
//           <table className="table table-striped mt-3">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Time</th>
//                 <th>Host</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.time}</td>
//                   <td>{item.host}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         );
//       default:
//         return null;
//     }
//   };
//   return (
//     <div
//       className="dashboard-container"
//       style={{ display: "flex", minHeight: "100vh" }}
//     >
//       <div
//         className="main-content"
//         style={{
//           marginLeft: sidebarVisible ? "250px" : "0",
//           flex: 1,
//           transition: "margin-left 0.3s ease",
//           width: "100%",
//         }}
//       >
//         <div className="container-fluid bg-light p-3">
//           <div className="bg-white rounded p-3 shadow-sm mb-4">
//             <div className="row align-items-end">
//               <div className="col-md-3 col-lg-2 mb-2 mb-md-0">
//                 <select
//                   className="form-select"
//                   value={deskFilter}
//                   onChange={(e) => setDeskFilter(e.target.value)}
//                 >
//                   <option>All Desks</option>
//                   <option>Desk 1</option>
//                   <option>Desk 2</option>
//                 </select>
//               </div>
//               <div className="col-md-3 col-lg-2 mb-2 mb-md-0">
//                 <select
//                   className="form-select"
//                   value={dateRange}
//                   onChange={(e) => setDateRange(e.target.value)}
//                 >
//                   <option>Today</option>
//                   <option>Yesterday</option>
//                   <option>This Week</option>
//                   <option>Last Week</option>
//                   <option>This Month</option>
//                   <option>Last Month</option>
//                   <option>Custom Range</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="row mb-4">
//             {stats.map((stat) => (
//               <div key={stat.id} className="col-sm-6 col-md-6 col-lg-3 mb-3">
//                 <StatsCard {...stat} />
//               </div>
//             ))}
//           </div>

//           {activeTable && (
//             <div className="bg-white rounded p-3 shadow-sm mb-4">
//               <h5 className="mb-3">
//                 {stats.find((stat) => stat.tableId === activeTable)?.title}{" "}
//                 Details
//               </h5>
//               <div className={`table-container ${animateTable ? "show" : ""}`}>
//                 {renderTable()}
//               </div>
//             </div>
//           )}

//           <h5 className="mb-3">Today's Invites</h5>
//           <div
//             className="bg-white rounded p-3 shadow-sm"
//             style={{ width: "100%", height: "400px" }}
//           >
//             <HourlyVisitorsChart />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
