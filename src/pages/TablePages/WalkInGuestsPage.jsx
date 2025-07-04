import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import ExcelJS from "exceljs";
import "./TableData.css";

const WalkInGuestsPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const tableRef = useRef(null);
  const data = [
    {
      id: 1,
      CheckinTime: "04-Jul-25 09:15 am",
      Host: "Ankit Mehta",
      Purpose: "Interview",
      VisitType: "Walk-in",
      InviteTime: "09:00 am",
      VisitStatus: "Guest-in",
      Guest: "Rahul Verma",
      Company: "Global Tech Ltd",
    },
    {
      id: 2,
      CheckinTime: "04-Jul-25 09:45 am",
      Host: "Sneha Rathi",
      Purpose: "Sales Pitch",
      VisitType: "Walk-in",
      InviteTime: "10:00 am",
      VisitStatus: "Check-out 11:00 am",
      Guest: "Mehul Joshi",
      Company: "Vertex Solutions",
    },
    {
      id: 3,
      CheckinTime: "04-Jul-25 10:05 am",
      Host: "Manish Tiwari",
      Purpose: "Vendor Meeting",
      VisitType: "Walk-in",
      InviteTime: "10:15 am",
      VisitStatus: "Guest-in",
      Guest: "Priya Shah",
      Company: "Zeno Corp",
    },
    {
      id: 4,
      CheckinTime: "04-Jul-25 10:20 am",
      Host: "Divya Patel",
      Purpose: "Product Demo",
      VisitType: "Walk-in",
      InviteTime: "10:30 am",
      VisitStatus: "Check-out 11:45 am",
      Guest: "Alok Bansal",
      Company: "Netlynx Inc.",
    },
    {
      id: 5,
      CheckinTime: "04-Jul-25 11:00 am",
      Host: "Rahul Bhatia",
      Purpose: "Consultation",
      VisitType: "Walk-in",
      InviteTime: "11:15 am",
      VisitStatus: "Guest-in",
      Guest: "Sneha Kapoor",
      Company: "Pixxel Matrix",
    },
    {
      id: 6,
      CheckinTime: "04-Jul-25 11:20 am",
      Host: "Neha Rajput",
      Purpose: "Contract Signing",
      VisitType: "Walk-in",
      InviteTime: "11:30 am",
      VisitStatus: "Guest-in",
      Guest: "Deepak Chauhan",
      Company: "TeraByte Co.",
    },
    {
      id: 7,
      CheckinTime: "04-Jul-25 12:00 pm",
      Host: "Yash Desai",
      Purpose: "Collaboration Meeting",
      VisitType: "Walk-in",
      InviteTime: "12:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Anjali Rana",
      Company: "BrightMinds Ltd",
    },
    {
      id: 8,
      CheckinTime: "04-Jul-25 12:30 pm",
      Host: "Simran Kaur",
      Purpose: "IT Support Visit",
      VisitType: "Walk-in",
      InviteTime: "12:45 pm",
      VisitStatus: "Check-out 01:30 pm",
      Guest: "Mohit Sinha",
      Company: "VisionTech",
    },
    {
      id: 9,
      CheckinTime: "04-Jul-25 01:05 pm",
      Host: "Tarun Jha",
      Purpose: "Training Session",
      VisitType: "Walk-in",
      InviteTime: "01:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Kavya Mehta",
      Company: "Nimbus Ventures",
    },
    {
      id: 10,
      CheckinTime: "04-Jul-25 01:30 pm",
      Host: "Ritika Singh",
      Purpose: "Security Audit",
      VisitType: "Walk-in",
      InviteTime: "01:45 pm",
      VisitStatus: "Check-out 02:30 pm",
      Guest: "Nikhil Arora",
      Company: "InnoWave Pvt. Ltd.",
    },
    {
      id: 11,
      CheckinTime: "04-Jul-25 02:00 pm",
      Host: "Karan Sood",
      Purpose: "Site Inspection",
      VisitType: "Walk-in",
      InviteTime: "02:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Pooja Menon",
      Company: "Zenith Labs",
    },
    {
      id: 12,
      CheckinTime: "04-Jul-25 02:35 pm",
      Host: "Ishita Das",
      Purpose: "Policy Review",
      VisitType: "Walk-in",
      InviteTime: "02:45 pm",
      VisitStatus: "Guest-in",
      Guest: "Arjun Malhotra",
      Company: "NextGen AI",
    },
    {
      id: 13,
      CheckinTime: "04-Jul-25 03:00 pm",
      Host: "Aman Goyal",
      Purpose: "Annual Planning",
      VisitType: "Walk-in",
      InviteTime: "03:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Shivani Reddy",
      Company: "Cloudzest",
    },
    {
      id: 14,
      CheckinTime: "04-Jul-25 03:30 pm",
      Host: "Pallavi Trivedi",
      Purpose: "Service Maintenance",
      VisitType: "Walk-in",
      InviteTime: "03:45 pm",
      VisitStatus: "Check-out 04:45 pm",
      Guest: "Varun Saxena",
      Company: "LogicHub",
    },
    {
      id: 15,
      CheckinTime: "04-Jul-25 04:10 pm",
      Host: "Bhavesh Chauhan",
      Purpose: "Feedback Session",
      VisitType: "Walk-in",
      InviteTime: "04:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Tanvi Lamba",
      Company: "NovaGrid",
    },
    {
      id: 16,
      CheckinTime: "04-Jul-25 04:40 pm",
      Host: "Rachna Joshi",
      Purpose: "Performance Review",
      VisitType: "Walk-in",
      InviteTime: "04:45 pm",
      VisitStatus: "Guest-in",
      Guest: "Sagar Deshmukh",
      Company: "DataPulse",
    },
    {
      id: 17,
      CheckinTime: "04-Jul-25 05:00 pm",
      Host: "Prateek Bhardwaj",
      Purpose: "Product Feedback",
      VisitType: "Walk-in",
      InviteTime: "05:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Neeti Sharma",
      Company: "CodeRise Ltd",
    },
    {
      id: 18,
      CheckinTime: "04-Jul-25 05:30 pm",
      Host: "Ayesha Khan",
      Purpose: "Hiring Discussion",
      VisitType: "Walk-in",
      InviteTime: "05:45 pm",
      VisitStatus: "Check-out 06:15 pm",
      Guest: "Ravi Shetty",
      Company: "BlueSpark Technologies",
    },
    {
      id: 19,
      CheckinTime: "04-Jul-25 06:00 pm",
      Host: "Anirudh Jain",
      Purpose: "Business Proposal",
      VisitType: "Walk-in",
      InviteTime: "06:15 pm",
      VisitStatus: "Guest-in",
      Guest: "Snehal Tiwari",
      Company: "AlphaTrends",
    },
    {
      id: 20,
      CheckinTime: "04-Jul-25 06:30 pm",
      Host: "Sheetal Sharma",
      Purpose: "Project Discussion",
      VisitType: "Walk-in",
      InviteTime: "06:45 pm",
      VisitStatus: "Guest-in",
      Guest: "Devansh Kulkarni",
      Company: "Techverse Global",
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
  //   // Prepare worksheet
  //   const ws = XLSX.utils.json_to_sheet(
  //     data.map((item) => ({
  //       "Check-in Time": item.CheckinTime,
  //       Host: item.Host,
  //       Purpose: item.Purpose,
  //       "Visit Type": item.VisitType,
  //       "Invite Time": item.InviteTime,
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
    a.download = "walk_in_guests.xlsx";
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
            <h5>Walk-In Guests</h5>
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
                            // marginLeft: "8px",
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
                        ></span>{" "}
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

export default WalkInGuestsPage;
