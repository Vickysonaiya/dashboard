import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ExcelJS from "exceljs";
import "./TableData.css";

const YetToCheckInPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const tableRef = useRef(null);
  const data = [
    {
      id: 1,
      CheckinTime: "04-Jul-25 10:05 am",
      Host: "Ritika Patel",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      InviteTime: "10:15 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Suresh Iyer",
      Company: "Zephyr Technologies",
    },
    {
      id: 2,
      CheckinTime: "04-Jul-25 10:25 am",
      Host: "Ankit Mehta",
      Purpose: "Interview",
      VisitType: "Invite",
      InviteTime: "10:30 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Neha Kapoor",
      Company: "Crestwave Pvt Ltd",
    },
    {
      id: 3,
      CheckinTime: "04-Jul-25 10:45 am",
      Host: "Swati Rana",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      InviteTime: "11:00 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Aarav Bansal",
      Company: "Nimbus Financials",
    },
    {
      id: 4,
      CheckinTime: "04-Jul-25 11:00 am",
      Host: "Manish Solanki",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "11:15 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Pooja Sinha",
      Company: "Quantum Healthcare",
    },
    {
      id: 5,
      CheckinTime: "04-Jul-25 11:20 am",
      Host: "Deepa Shah",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      InviteTime: "11:30 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Karan Thakur",
      Company: "NeoGenX Systems",
    },
    {
      id: 6,
      CheckinTime: "04-Jul-25 11:35 am",
      Host: "Rahul Bhagat",
      Purpose: "Interview",
      VisitType: "Invite",
      InviteTime: "11:45 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Shruti Joshi",
      Company: "Pixel Perfect Studios",
    },
    {
      id: 7,
      CheckinTime: "04-Jul-25 12:00 pm",
      Host: "Pallavi Joshi",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      InviteTime: "12:15 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Dhruv Sethi",
      Company: "AlphaEdge Solutions",
    },
    {
      id: 8,
      CheckinTime: "04-Jul-25 12:20 pm",
      Host: "Yash Dholakia",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "12:30 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Zara Khan",
      Company: "Skybound Logistics",
    },
    {
      id: 9,
      CheckinTime: "04-Jul-25 12:40 pm",
      Host: "Komal Verma",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      InviteTime: "12:45 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Nikhil Arora",
      Company: "GreenMatrix Inc.",
    },
    {
      id: 10,
      CheckinTime: "04-Jul-25 01:00 pm",
      Host: "Tarun Nanda",
      Purpose: "Interview",
      VisitType: "Invite",
      InviteTime: "01:15 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Reema Shah",
      Company: "NextLeap Innovations",
    },
    {
      id: 11,
      CheckinTime: "04-Jul-25 01:25 pm",
      Host: "Nidhi Goyal",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      InviteTime: "01:30 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Amit Dubey",
      Company: "Vertex Analytics",
    },
    {
      id: 12,
      CheckinTime: "04-Jul-25 01:40 pm",
      Host: "Bhavin Soni",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "01:45 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Tanya Malhotra",
      Company: "Synthex Labs",
    },
    {
      id: 13,
      CheckinTime: "04-Jul-25 02:00 pm",
      Host: "Kriti Sen",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      InviteTime: "02:15 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Rajeev Ranjan",
      Company: "Infinitum Services",
    },
    {
      id: 14,
      CheckinTime: "04-Jul-25 02:18 pm",
      Host: "Mohit Jain",
      Purpose: "Interview",
      VisitType: "Invite",
      InviteTime: "02:30 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Divya Mehta",
      Company: "Aether Communications",
    },
    {
      id: 15,
      CheckinTime: "04-Jul-25 02:35 pm",
      Host: "Sejal Rana",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      InviteTime: "02:45 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Farhan Shaikh",
      Company: "BrightLane Software",
    },
    {
      id: 16,
      CheckinTime: "04-Jul-25 03:00 pm",
      Host: "Lakshya Khanna",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "03:15 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Ananya Reddy",
      Company: "EcoNova Energy",
    },
    {
      id: 17,
      CheckinTime: "04-Jul-25 03:20 pm",
      Host: "Jinal Shah",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      InviteTime: "03:30 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Rajat Kulkarni",
      Company: "FusionWare Labs",
    },
    {
      id: 18,
      CheckinTime: "04-Jul-25 03:35 pm",
      Host: "Tushar Gandhi",
      Purpose: "Interview",
      VisitType: "Invite",
      InviteTime: "03:45 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Meera Das",
      Company: "TechNest Ventures",
    },
    {
      id: 19,
      CheckinTime: "04-Jul-25 04:00 pm",
      Host: "Simran Kaur",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      InviteTime: "04:15 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Aditya Chauhan",
      Company: "UrbanRoots Pvt Ltd",
    },
    {
      id: 20,
      CheckinTime: "04-Jul-25 04:20 pm",
      Host: "Nayan Parmar",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "04:30 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Isha Talwar",
      Company: "BrightEdge AI",
    },
  ];
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
          "Invite Time",
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
        item.InviteTime,
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

  // const exportToExcel = () => {
  //   // Prepare worksheet data with headers as first row
  //   const excelData = [
  //     [
  //       "Host",
  //       "Purpose",
  //       "Visit Type",
  //       "Invite Time",
  //       "Visit Status",
  //       "Guest",
  //       "Company",
  //     ],
  //     ...data.map((item) => [
  //       item.Host,
  //       item.Purpose,
  //       item.VisitType,
  //       item.InviteTime,
  //       item.VisitStatus, // Add bullet point before status
  //       item.Guest,
  //       item.Company,
  //     ]),
  //   ];

  //   // Create worksheet
  //   const ws = XLSX.utils.aoa_to_sheet(excelData);

  //   // Add styling to header row
  //   const headerStyle = {
  //     fill: { fgColor: { rgb: "1B3631" } }, // Dark green background
  //     font: { bold: true, color: { rgb: "FFFFFF" } }, // White bold text
  //     alignment: { horizontal: "center" },
  //   };

  //   // Apply style to header cells (A1:G1)
  //   for (let col = 0; col < excelData[0].length; col++) {
  //     const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
  //     if (!ws[cellAddress]) ws[cellAddress] = {};
  //     ws[cellAddress].s = headerStyle;
  //   }

  //   // Set column widths to match the table display
  //   const colWidths = [
  //     { wch: 15 }, // Host
  //     { wch: 18 }, // Purpose
  //     { wch: 12 }, // Visit Type
  //     { wch: 12 }, // Invite Time
  //     { wch: 18 }, // Visit Status (with bullet)
  //     { wch: 15 }, // Guest
  //     { wch: 20 }, // Company
  //   ];
  //   ws["!cols"] = colWidths;

  //   // Create workbook
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Yet To Check-In");

  //   // Export file
  //   XLSX.writeFile(wb, "yet_to_check_in_guests.xlsx");
  // };

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Visitor Management System";

    const worksheet = workbook.addWorksheet("Yet To Check-In");

    // Define columns
    worksheet.columns = [
      { header: "Host", key: "host", width: 20 },
      { header: "Purpose", key: "purpose", width: 22 },
      { header: "Visit Type", key: "visitType", width: 15 },
      { header: "Invite Time", key: "inviteTime", width: 15 },
      { header: "Visit Status", key: "visitStatus", width: 20 },
      { header: "Guest", key: "guest", width: 20 },
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
        host: item.Host,
        purpose: item.Purpose,
        visitType: item.VisitType,
        inviteTime: item.InviteTime,
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
    a.download = "yet_to_check_in_guests.xlsx";
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
            <thead className="table-primary">
              <tr>
                <th>Host</th>
                <th>Purpose</th>
                <th>Visit Type</th>
                <th>Invite Time</th>
                <th>Visit Status</th>
                <th>Guest</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.Host}</td>
                    <td>{item.Purpose}</td>
                    <td>{item.VisitType}</td>
                    <td>{item.InviteTime}</td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          style={{
                            display: "inline-block",
                            width: "10px",
                            height: "10px",
                            backgroundColor: "Gray",
                            borderRadius: "50%",
                            // marginLeft: "5px",
                          }}
                        >
                          {" "}
                        </span>
                        {item.VisitStatus}{" "}
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

export default YetToCheckInPage;
