import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ExcelJS from "exceljs";
import "./TableData.css";

const InvitedGuestsPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const tableRef = useRef(null);
  const data = [
    {
      id: 1,
      CheckinTime: "04-Jul-25 10:05 am",
      Host: "Vicky Sonaiya",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      InviteTime: "10:00 am",
      VisitStatus: "Guest-in",
      Guest: "Aarav Mehta",
      Company: "Orbit Corp",
    },
    {
      id: 2,
      CheckinTime: "",
      Host: "Nirav Purohit",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      InviteTime: "11:00 am",
      VisitStatus: "Yet To Check-in",
      Guest: "Sneha Patel",
      Company: "TalentEdge",
    },
    {
      id: 3,
      CheckinTime: "04-Jul-25 11:20 am",
      Host: "Kishan Waghela",
      Purpose: "Project Discussion",
      VisitType: "Walk-in",
      InviteTime: "11:00 am",
      VisitStatus: "Guest-in",
      Guest: "Rahul Singh",
      Company: "NextGen Labs",
    },
    {
      id: 4,
      CheckinTime: "",
      Host: "Vishal Mishra",
      Purpose: "Consultation",
      VisitType: "Invite",
      InviteTime: "12:00 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Neha Sharma",
      Company: "BlueBay Pvt Ltd",
    },
    {
      id: 5,
      CheckinTime: "04-Jul-25 12:30 pm",
      Host: "Vicky Sonaiya",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "12:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Amit Trivedi",
      Company: "BizVerse",
    },
    {
      id: 6,
      CheckinTime: "04-Jul-25 12:45 pm",
      Host: "Kishan Waghela",
      Purpose: "Sales Pitch",
      VisitType: "Walk-in",
      InviteTime: "12:30 pm",
      VisitStatus: "Check-out 01:10 pm",
      Guest: "Priya Nair",
      Company: "QuickReach",
    },
    {
      id: 7,
      CheckinTime: "",
      Host: "Nirav Purohit",
      Purpose: "Facility Visit",
      VisitType: "Invite",
      InviteTime: "01:30 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Harshad Desai",
      Company: "GreenLine Energy",
    },
    {
      id: 8,
      CheckinTime: "04-Jul-25 01:50 pm",
      Host: "Vishal Mishra",
      Purpose: "Investor Meetup",
      VisitType: "Walk-in",
      InviteTime: "01:45 pm",
      VisitStatus: "Guest-in",
      Guest: "Devika Reddy",
      Company: "CapitalGate",
    },
    {
      id: 9,
      CheckinTime: "",
      Host: "Kishan Waghela",
      Purpose: "Casual Visit",
      VisitType: "Invite",
      InviteTime: "02:00 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Faizan Khan",
      Company: "UrbanSpaces",
    },
    {
      id: 10,
      CheckinTime: "04-Jul-25 02:15 pm",
      Host: "Vicky Sonaiya",
      Purpose: "Client Review",
      VisitType: "Invite",
      InviteTime: "02:00 pm",
      VisitStatus: "Guest-in",
      Guest: "Rohan Mehta",
      Company: "Stellar Solutions",
    },
    {
      id: 11,
      CheckinTime: "04-Jul-25 02:50 pm",
      Host: "Kishan Waghela",
      Purpose: "Vendor Visit",
      VisitType: "Invite",
      InviteTime: "02:45 pm",
      VisitStatus: "Check-out 01:10 pm",
      Guest: "Karan Bhatia",
      Company: "Core Supplies",
    },
    {
      id: 12,
      CheckinTime: "04-Jul-25 03:00 pm",
      Host: "Vishal Mishra",
      Purpose: "Project Discussion",
      VisitType: "Walk-in",
      InviteTime: "03:00 pm",
      VisitStatus: "Guest-in",
      Guest: "Manasi Thakur",
      Company: "InnoTech",
    },
    {
      id: 13,
      CheckinTime: "04-Jul-25 03:35 pm",
      Host: "Kishan Waghela",
      Purpose: "Interview",
      VisitType: "Invite",
      InviteTime: "03:30 pm",
      VisitStatus: "Check-out 01:10 pm",
      Guest: "Ayesha Qureshi",
      Company: "CodeSpark",
    },
    {
      id: 14,
      CheckinTime: "04-Jul-25 03:50 pm",
      Host: "Nirav Purohit",
      Purpose: "Product Demo",
      VisitType: "Walk-in",
      InviteTime: "03:45 pm",
      VisitStatus: "Guest-in",
      Guest: "Ishaan Patel",
      Company: "TechNova",
    },
    {
      id: 15,
      CheckinTime: "04-Jul-25 04:10 pm",
      Host: "Vishal Mishra",
      Purpose: "Consulting Session",
      VisitType: "Invite",
      InviteTime: "04:00 pm",
      VisitStatus: "Check-out 01:10 pm",
      Guest: "Shruti Deshmukh",
      Company: "MindSquare",
    },
    {
      id: 16,
      CheckinTime: "04-Jul-25 04:30 pm",
      Host: "Nirav Purohit",
      Purpose: "Walkthrough",
      VisitType: "Walk-in",
      InviteTime: "04:30 pm",
      VisitStatus: "Guest-in",
      Guest: "Ravi Jindal",
      Company: "TechnoGrid",
    },
    {
      id: 17,
      CheckinTime: "04-Jul-25 04:45 pm",
      Host: "Vicky Sonaiya",
      Purpose: "Team Meeting",
      VisitType: "Invite",
      InviteTime: "04:30 pm",
      VisitStatus: "Guest-in",
      Guest: "Ananya Joshi",
      Company: "CloudNine",
    },
    {
      id: 18,
      CheckinTime: "",
      Host: "Kishan Waghela",
      Purpose: "Networking",
      VisitType: "Invite",
      InviteTime: "05:00 pm",
      VisitStatus: "Yet To Check-in",
      Guest: "Vikram Singh",
      Company: "NetLink",
    },
    {
      id: 19,
      CheckinTime: "04-Jul-25 05:10 pm",
      Host: "Vishal Mishra",
      Purpose: "Strategy Session",
      VisitType: "Walk-in",
      InviteTime: "05:00 pm",
      VisitStatus: "Guest-in",
      Guest: "Nandini Rao",
      Company: "Strategic Minds",
    },
    {
      id: 20,
      CheckinTime: "04-Jul-25 05:15 pm",
      Host: "Vishal Mishra",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      InviteTime: "05:00 pm",
      VisitStatus: "Guest-in",
      Guest: "Zaid Shaikh",
      Company: "Elevate Ventures",
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
      { header: "Invite Time", key: "inviteTime", width: 25 },
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
    a.download = "invited_guests.xlsx";
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
                <th>Invite Time</th>
                <th>Visit Status</th>
                <th>Guest</th>
                <th>Company</th>{" "}
              </tr>{" "}
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.CheckinTime}</td>
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
                            borderRadius: "50%",
                            // marginRight: "8px",
                            backgroundColor:
                              item.VisitStatus.toLowerCase().includes(
                                "guest-in"
                              )
                                ? "red"
                                : item.VisitStatus.toLowerCase().includes(
                                    "check-out"
                                  )
                                ? "green"
                                : item.VisitStatus.toLowerCase().includes(
                                    "yet to check-in"
                                  )
                                ? "gray"
                                : "transparent",
                          }}
                        ></span>
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

export default InvitedGuestsPage;
