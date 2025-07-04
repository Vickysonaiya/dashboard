// import React, { useState } from "react";
// import "./TableData.css";

// const ActiveGuestsPage = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);

//   // Sample data (replace with your actual `data` prop or state)
//   const data = [
//     {
//       id: 1,
//       CheckinTime: "01-Jul-25 10:05 am",
//       Host: "Amit Patel",
//       Purpose: "Business Meeting",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Nikhil Desai",
//       Company: "TechNova Inc.",
//     },
//     {
//       id: 2,
//       CheckinTime: "01-Jul-25 10:20 am",
//       Host: "Neha Kapoor",
//       Purpose: "Interview",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Rajiv Malhotra",
//       Company: "QuantumEdge",
//     },
//     {
//       id: 3,
//       CheckinTime: "01-Jul-25 10:45 am",
//       Host: "Sanjay Trivedi",
//       Purpose: "Project Discussion",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Preeti Sharma",
//       Company: "CloudBridge",
//     },
//     {
//       id: 4,
//       CheckinTime: "01-Jul-25 11:00 am",
//       Host: "Divya Nair",
//       Purpose: "Business Proposal",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Aakash Iyer",
//       Company: "Innovent Solutions",
//     },
//     {
//       id: 5,
//       CheckinTime: "01-Jul-25 11:25 am",
//       Host: "Ravi Joshi",
//       Purpose: "Interview",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Sneha Mehta",
//       Company: "BrightLink Pvt Ltd",
//     },
//     {
//       id: 6,
//       CheckinTime: "01-Jul-25 11:40 am",
//       Host: "Meera Shah",
//       Purpose: "Business Proposal",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Tushar Agarwal",
//       Company: "Zenith InfoTech",
//     },
//     {
//       id: 7,
//       CheckinTime: "01-Jul-25 12:00 pm",
//       Host: "Karan Verma",
//       Purpose: "Business Meeting",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Ritika Bansal",
//       Company: "BlueOrbit",
//     },
//     {
//       id: 8,
//       CheckinTime: "01-Jul-25 12:15 pm",
//       Host: "Ishita Ghosh",
//       Purpose: "Project Discussion",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Sameer Sheikh",
//       Company: "DataScape Analytics",
//     },
//     {
//       id: 9,
//       CheckinTime: "01-Jul-25 12:30 pm",
//       Host: "Arjun Mehta",
//       Purpose: "Interview",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Lavanya Rao",
//       Company: "NextGen Tech",
//     },
//     {
//       id: 10,
//       CheckinTime: "01-Jul-25 12:50 pm",
//       Host: "Simran Kaur",
//       Purpose: "Business Meeting",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Manoj Jain",
//       Company: "CoreVision",
//     },
//     {
//       id: 11,
//       CheckinTime: "01-Jul-25 01:05 pm",
//       Host: "Rohit Bhatt",
//       Purpose: "Business Proposal",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Nidhi Saxena",
//       Company: "Vertex Systems",
//     },
//     {
//       id: 12,
//       CheckinTime: "01-Jul-25 01:20 pm",
//       Host: "Priya Dutta",
//       Purpose: "Project Discussion",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Kunal Sinha",
//       Company: "MetaCore Pvt Ltd",
//     },
//     {
//       id: 13,
//       CheckinTime: "01-Jul-25 01:35 pm",
//       Host: "Rahul Yadav",
//       Purpose: "Interview",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Pooja Narang",
//       Company: "CodeNova",
//     },
//     {
//       id: 14,
//       CheckinTime: "01-Jul-25 01:50 pm",
//       Host: "Anjali Menon",
//       Purpose: "Business Meeting",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Deepak Pillai",
//       Company: "CloudAxis",
//     },
//     {
//       id: 15,
//       CheckinTime: "01-Jul-25 02:05 pm",
//       Host: "Mohit Choudhary",
//       Purpose: "Project Discussion",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Aarav Jain",
//       Company: "TechPulse",
//     },
//     {
//       id: 16,
//       CheckinTime: "01-Jul-25 02:20 pm",
//       Host: "Sonal Arora",
//       Purpose: "Interview",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Siddharth Rao",
//       Company: "Infobright Ltd.",
//     },
//     {
//       id: 17,
//       CheckinTime: "01-Jul-25 02:30 pm",
//       Host: "Varun Sehgal",
//       Purpose: "Business Proposal",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Priyanka Deshmukh",
//       Company: "EdgeSpark",
//     },
//     {
//       id: 18,
//       CheckinTime: "01-Jul-25 02:40 pm",
//       Host: "Tanvi Bhagat",
//       Purpose: "Business Meeting",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Yash Thakkar",
//       Company: "SmartSync Pvt Ltd",
//     },
//     {
//       id: 19,
//       CheckinTime: "01-Jul-25 02:50 pm",
//       Host: "Vivek Rana",
//       Purpose: "Interview",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Ananya Kulkarni",
//       Company: "InnoTrack Systems",
//     },
//     {
//       id: 20,
//       CheckinTime: "01-Jul-25 03:00 pm",
//       Host: "Shruti Rawal",
//       Purpose: "Project Discussion",
//       VisitType: "Invite",
//       VisitStatus: "Guest-in",
//       Guest: "Omkar Naik",
//       Company: "DataSprout",
//     },
//   ];

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
//         <div className="container-fluid p-3">
//           <h5 className="mb-3">Active Guests</h5>

//           {/* Table Starts Here */}
//           <table className="table table-striped mt-3">
//             <thead className="table-danger">
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
//                     <td>
//                       <span className="d-flex align-items-center gap-2">
//                         <span
//                           style={{
//                             width: "10px",
//                             height: "10px",
//                             borderRadius: "50%",
//                             backgroundColor: statusColor,
//                             display: "inline-block",
//                           }}
//                         ></span>
//                         {item.VisitStatus}
//                       </span>
//                     </td>
//                     <td>{item.Guest}</td>
//                     <td>{item.Company}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActiveGuestsPage;

import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ExcelJS from "exceljs";
import "./TableData.css";

const ActiveGuestsPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const tableRef = useRef(null);

  // Sample data (same as before)
  const data = [
    {
      id: 1,
      CheckinTime: "04-Jul-25 10:05 am",
      Host: "Amit Patel",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Nikhil Desai",
      Company: "TechNova Inc.",
    },
    {
      id: 2,
      CheckinTime: "04-Jul-25 10:20 am",
      Host: "Neha Kapoor",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Rajiv Malhotra",
      Company: "QuantumEdge",
    },
    {
      id: 3,
      CheckinTime: "04-Jul-25 10:45 am",
      Host: "Sanjay Trivedi",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Preeti Sharma",
      Company: "CloudBridge",
    },
    {
      id: 4,
      CheckinTime: "04-Jul-25 11:00 am",
      Host: "Divya Nair",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Aakash Iyer",
      Company: "Innovent Solutions",
    },
    {
      id: 5,
      CheckinTime: "04-Jul-25 11:25 am",
      Host: "Ravi Joshi",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Sneha Mehta",
      Company: "BrightLink Pvt Ltd",
    },
    {
      id: 6,
      CheckinTime: "04-Jul-25 11:40 am",
      Host: "Meera Shah",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Tushar Agarwal",
      Company: "Zenith InfoTech",
    },
    {
      id: 7,
      CheckinTime: "04-Jul-25 12:00 pm",
      Host: "Karan Verma",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Ritika Bansal",
      Company: "BlueOrbit",
    },
    {
      id: 8,
      CheckinTime: "04-Jul-25 12:15 pm",
      Host: "Ishita Ghosh",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Sameer Sheikh",
      Company: "DataScape Analytics",
    },
    {
      id: 9,
      CheckinTime: "04-Jul-25 12:30 pm",
      Host: "Arjun Mehta",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Lavanya Rao",
      Company: "NextGen Tech",
    },
    {
      id: 10,
      CheckinTime: "04-Jul-25 12:50 pm",
      Host: "Simran Kaur",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Manoj Jain",
      Company: "CoreVision",
    },
    {
      id: 11,
      CheckinTime: "04-Jul-25 01:05 pm",
      Host: "Rohit Bhatt",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Nidhi Saxena",
      Company: "Vertex Systems",
    },
    {
      id: 12,
      CheckinTime: "04-Jul-25 01:20 pm",
      Host: "Priya Dutta",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Kunal Sinha",
      Company: "MetaCore Pvt Ltd",
    },
    {
      id: 13,
      CheckinTime: "04-Jul-25 01:35 pm",
      Host: "Rahul Yadav",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Pooja Narang",
      Company: "CodeNova",
    },
    {
      id: 14,
      CheckinTime: "04-Jul-25 01:50 pm",
      Host: "Anjali Menon",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Deepak Pillai",
      Company: "CloudAxis",
    },
    {
      id: 15,
      CheckinTime: "04-Jul-25 02:05 pm",
      Host: "Mohit Choudhary",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Aarav Jain",
      Company: "TechPulse",
    },
    {
      id: 16,
      CheckinTime: "04-Jul-25 02:20 pm",
      Host: "Sonal Arora",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Siddharth Rao",
      Company: "Infobright Ltd.",
    },
    {
      id: 17,
      CheckinTime: "04-Jul-25 02:30 pm",
      Host: "Varun Sehgal",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Priyanka Deshmukh",
      Company: "EdgeSpark",
    },
    {
      id: 18,
      CheckinTime: "04-Jul-25 02:40 pm",
      Host: "Tanvi Bhagat",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Yash Thakkar",
      Company: "SmartSync Pvt Ltd",
    },
    {
      id: 19,
      CheckinTime: "04-Jul-25 02:50 pm",
      Host: "Vivek Rana",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Ananya Kulkarni",
      Company: "InnoTrack Systems",
    },
    {
      id: 20,
      CheckinTime: "04-Jul-25 03:00 pm",
      Host: "Shruti Rawal",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Omkar Naik",
      Company: "DataSprout",
    },
  ];
  // Export to PDF function
  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.text("Active Guests Report", 14, 15);

    // Add table using autoTable
    autoTable(doc, {
      head: [
        [
          "Check-in Time",
          "Host",
          "Purpose",
          "Visit Type",
          "Visit Status",
          "Guest",
          "Company",
        ],
      ],
      body: data.map((item) => [
        item.CheckinTime,
        item.Host,
        item.Purpose,
        item.VisitType,
        item.VisitStatus,
        item.Guest,
        item.Company,
      ]),
      startY: 20,
      styles: {
        fontSize: 8,
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [27, 54, 49],
        textColor: 255,
        fontStyle: "bold",
      },
    });

    doc.save("active_guests_report.pdf");
  };

  // Export to Excel function
  // const exportToExcel = () => {
  //   // Prepare worksheet
  //   const ws = XLSX.utils.json_to_sheet(
  //     data.map((item) => ({
  //       "Check-in Time": item.CheckinTime,
  //       Host: item.Host,
  //       Purpose: item.Purpose,
  //       "Visit Type": item.VisitType,
  //       "Visit Status": item.VisitStatus,
  //       Guest: item.Guest,
  //       Company: item.Company,
  //     }))
  //   );

  //   // Create workbook
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Active Guests");

  //   // Export file
  //   XLSX.writeFile(wb, "active_guests_report.xlsx");
  // };

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Visitor Management System";

    const worksheet = workbook.addWorksheet("Walk-In Guests");

    // Define columns
    worksheet.columns = [
      { header: "Check-in Time", key: "checkin", width: 25 },
      { header: "Host", key: "host", width: 25 },
      { header: "Purpose", key: "purpose", width: 25 },
      { header: "Visit Type", key: "visitType", width: 25 },
      { header: "Visit Status", key: "visitStatus", width: 25 },
      { header: "Guest", key: "guest", width: 25 },
      { header: "Company", key: "company", width: 25 },
    ];

    // Set default row height for all rows
    worksheet.properties.defaultRowHeight = 25; // Increased from default 15

    // Add header row with increased height and styling
    const headerRow = worksheet.getRow(1);
    headerRow.height = 35; // Even taller for header

    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF1B3631" }, // Dark green
      };
      cell.font = {
        bold: true,
        color: { argb: "FFFFFFFF" }, // White
        size: 16, // Slightly larger font for header
      };
      cell.alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true, // Allow text to wrap if needed
      };
    });

    // Add data rows with increased height
    data.forEach((item, index) => {
      const row = worksheet.addRow({
        checkin: item.CheckinTime,
        host: item.Host,
        purpose: item.Purpose,
        visitType: item.VisitType,
        visitStatus: item.VisitStatus,
        guest: item.Guest,
        company: item.Company,
      });

      // Set row height for data rows
      row.height = 35; // Explicit height for each data row

      // Set font for data rows
      row.eachCell((cell) => {
        cell.font = {
          size: 14, // Comfortable reading size
        };
        cell.alignment = {
          vertical: "middle",
          horizontal: "center",
          wrapText: true,
        };
      });
    });

    // ... rest of the code (borders, protection, etc.) remains the same ...
    // Define the table boundaries
    const lastRow = worksheet.rowCount;
    const lastCol = worksheet.columnCount;

    // Apply borders only to the actual table area
    for (let rowNum = 1; rowNum <= lastRow; rowNum++) {
      const row = worksheet.getRow(rowNum);

      for (let colNum = 1; colNum <= lastCol; colNum++) {
        const cell = row.getCell(colNum);

        cell.border = {
          top: {
            style: rowNum === 1 ? "medium" : "thin",
            color: { argb: "FF000000" },
          },
          left: {
            style: colNum === 1 ? "medium" : "thin",
            color: { argb: "FF000000" },
          },
          bottom: {
            style: rowNum === lastRow ? "medium" : "thin",
            color: { argb: "FF000000" },
          },
          right: {
            style: colNum === lastCol ? "medium" : "thin",
            color: { argb: "FF000000" },
          },
        };

        // Alternate row coloring
        if (rowNum > 1) {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: rowNum % 2 === 0 ? "FFF5F5F5" : "FFEAEAEA" },
          };
        }
      }
    }

    // Protect worksheet (non-editable)
    worksheet.protect("", {
      selectLockedCells: false,
      selectUnlockedCells: false,
      formatCells: false,
      insertColumns: false,
      insertRows: false,
      deleteColumns: false,
      deleteRows: false,
      sort: false,
      autoFilter: false,
    });

    // Lock all cells
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.protection = { locked: true };
      });
    });

    // Export file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "active_guests_report.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="dashboard-container"
      style={{ display: "flex", minHeight: "100vh" }}
    >
      <div
        className="main-content"
        style={{
          marginLeft: sidebarVisible ? "250px" : "0",
          flex: 1,
          transition: "margin-left 0.3s ease",
          width: "100%",
        }}
      >
        <div className="container-fluid p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5>Active Guests</h5>
            <div>
              <button className="btn btn-danger me-2" onClick={exportToPDF}>
                Export to PDF
              </button>
              <button className="btn btn-success" onClick={exportToExcel}>
                Export to Excel
              </button>
            </div>
          </div>

          {/* Table with ref for PDF export */}
          <table className="table table-striped mt-3" ref={tableRef}>
            {" "}
            <thead className="table-danger">
              {" "}
              <tr>
                <th>Check-in Time</th>
                <th>Host</th>
                <th>Purpose</th>
                <th>Visit Type</th>
                <th>Visit Status</th>
                <th>Guest</th>
                <th>Company</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {data.map((item) => {
                let statusColor = "#6c757d"; // default gray
                if (item.VisitStatus.toLowerCase().includes("guest-in"))
                  statusColor = "red";
                else if (item.VisitStatus.toLowerCase().includes("yet"))
                  statusColor = "gray";
                else if (item.VisitStatus.toLowerCase().includes("check-out"))
                  statusColor = "green";

                return (
                  <tr key={item.id}>
                    <td>{item.CheckinTime}</td>
                    <td>{item.Host}</td>
                    <td>{item.Purpose}</td>
                    <td>{item.VisitType}</td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: statusColor,
                            display: "inline-block",
                          }}
                        ></span>
                        {item.VisitStatus}
                      </span>
                    </td>
                    <td>{item.Guest}</td>
                    <td>{item.Company}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveGuestsPage;
