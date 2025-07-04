import React, { useState } from "react";

const ActiveGuestsPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Sample data (replace with your actual `data` prop or state)
  const data = [
    {
      id: 1,
      CheckinTime: "01-Jul-25 10:05 AM",
      Host: "Amit Patel",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Nikhil Desai",
      Company: "TechNova Inc.",
    },
    {
      id: 2,
      CheckinTime: "01-Jul-25 10:20 AM",
      Host: "Neha Kapoor",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Rajiv Malhotra",
      Company: "QuantumEdge",
    },
    {
      id: 3,
      CheckinTime: "01-Jul-25 10:45 AM",
      Host: "Sanjay Trivedi",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Preeti Sharma",
      Company: "CloudBridge",
    },
    {
      id: 4,
      CheckinTime: "01-Jul-25 11:00 AM",
      Host: "Divya Nair",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Aakash Iyer",
      Company: "Innovent Solutions",
    },
    {
      id: 5,
      CheckinTime: "01-Jul-25 11:25 AM",
      Host: "Ravi Joshi",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Sneha Mehta",
      Company: "BrightLink Pvt Ltd",
    },
    {
      id: 6,
      CheckinTime: "01-Jul-25 11:40 AM",
      Host: "Meera Shah",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Tushar Agarwal",
      Company: "Zenith InfoTech",
    },
    {
      id: 7,
      CheckinTime: "01-Jul-25 12:00 PM",
      Host: "Karan Verma",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Ritika Bansal",
      Company: "BlueOrbit",
    },
    {
      id: 8,
      CheckinTime: "01-Jul-25 12:15 PM",
      Host: "Ishita Ghosh",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Sameer Sheikh",
      Company: "DataScape Analytics",
    },
    {
      id: 9,
      CheckinTime: "01-Jul-25 12:30 PM",
      Host: "Arjun Mehta",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Lavanya Rao",
      Company: "NextGen Tech",
    },
    {
      id: 10,
      CheckinTime: "01-Jul-25 12:50 PM",
      Host: "Simran Kaur",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Manoj Jain",
      Company: "CoreVision",
    },
    {
      id: 11,
      CheckinTime: "01-Jul-25 01:05 PM",
      Host: "Rohit Bhatt",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Nidhi Saxena",
      Company: "Vertex Systems",
    },
    {
      id: 12,
      CheckinTime: "01-Jul-25 01:20 PM",
      Host: "Priya Dutta",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Kunal Sinha",
      Company: "MetaCore Pvt Ltd",
    },
    {
      id: 13,
      CheckinTime: "01-Jul-25 01:35 PM",
      Host: "Rahul Yadav",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Pooja Narang",
      Company: "CodeNova",
    },
    {
      id: 14,
      CheckinTime: "01-Jul-25 01:50 PM",
      Host: "Anjali Menon",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Deepak Pillai",
      Company: "CloudAxis",
    },
    {
      id: 15,
      CheckinTime: "01-Jul-25 02:05 PM",
      Host: "Mohit Choudhary",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Aarav Jain",
      Company: "TechPulse",
    },
    {
      id: 16,
      CheckinTime: "01-Jul-25 02:20 PM",
      Host: "Sonal Arora",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Siddharth Rao",
      Company: "Infobright Ltd.",
    },
    {
      id: 17,
      CheckinTime: "01-Jul-25 02:30 PM",
      Host: "Varun Sehgal",
      Purpose: "Business Proposal",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Priyanka Deshmukh",
      Company: "EdgeSpark",
    },
    {
      id: 18,
      CheckinTime: "01-Jul-25 02:40 PM",
      Host: "Tanvi Bhagat",
      Purpose: "Business Meeting",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Yash Thakkar",
      Company: "SmartSync Pvt Ltd",
    },
    {
      id: 19,
      CheckinTime: "01-Jul-25 02:50 PM",
      Host: "Vivek Rana",
      Purpose: "Interview",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Ananya Kulkarni",
      Company: "InnoTrack Systems",
    },
    {
      id: 20,
      CheckinTime: "01-Jul-25 03:00 PM",
      Host: "Shruti Rawal",
      Purpose: "Project Discussion",
      VisitType: "Invite",
      VisitStatus: "Guest-in",
      Guest: "Omkar Naik",
      Company: "DataSprout",
    },
  ];

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
          <h5 className="mb-3">Active Guests</h5>

          {/* Table Starts Here */}
          <table className="table table-striped mt-3">
            <thead
              style={{ backgroundColor: "#1B3631 !important", color: "white" }}
            >
              <tr>
                <th>Check-in Time</th>
                <th>Host</th>
                <th>Purpose</th>
                <th>Visit Type</th>
                <th>Visit Status</th>
                <th>Guest</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                let statusColor = "#6c757d"; // default gray
                if (item.VisitStatus.toLowerCase().includes("guest-in"))
                  statusColor = "#28a745";
                else if (item.VisitStatus.toLowerCase().includes("yet"))
                  statusColor = "#ffc107";
                else if (item.VisitStatus.toLowerCase().includes("check-out"))
                  statusColor = "#17a2b8";

                return (
                  <tr key={item.id}>
                    <td>{item.CheckinTime}</td>
                    <td>{item.Host}</td>
                    <td>{item.Purpose}</td>
                    <td>{item.VisitType}</td>
                    <td className="d-flex align-items-center gap-2">
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
