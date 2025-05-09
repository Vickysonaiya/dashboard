import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./checkin.css";
import { useFetchHostInvitesQuery } from "../../../api/apiSlice";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { utils, writeFile } from "xlsx";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckIn = () => {
  const { data, error, isLoading } = useFetchHostInvitesQuery();
  const [pendingArrivals, setPendingArrivals] = useState([]);
  // const [recentCheckins, setRecentCheckins] = useState([]);
  // const [failedCheckins, setFailedCheckins] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [showPendingCheckins, setShowPendingCheckins] = useState(false);
  // const [showRecentCheckins, setShowRecentCheckins] = useState(false);
  // const [showFailedCheckins, setShowFailedCheckins] = useState(false);
  const [pendingArrivalsFilters, setPendingArrivalsFilters] = useState({
    timeWindow: "",
    host: "",
    visitPurpose: "",
  });
  // const [recentCheckinsFilters, setRecentCheckinsFilters] = useState({
  //   timeWindow: "",
  //   ndaStatus: "",
  //   safetySopStatus: "",
  // });
  // const [failedCheckinsFilters, setFailedCheckinsFilters] = useState({
  //   timeWindow: "",
  //   ndaStatus: "",
  //   safetySopStatus: "",
  // });

  // useEffect(() => {
  //   // fetchPendingArrivals();
  //   fetchRecentCheckins();
  //   fetchFailedCheckins()
  // }, []);

  // const fetchRecentCheckins = async () => {
  //   // Fetch recent check-ins data from API or database
  //   const response = await fetch("/api/recent-checkins");
  //   const data = await response.json();
  //   setRecentCheckins(data);
  // };
  // const fetchFailedCheckins = async () => {
  //   // Fetch recent check-ins data from API or database
  //   const response = await fetch("/api/recent-checkins");
  //   const data = await response.json();
  //   setFailedCheckins(data);
  // };

  const handlePendingArrivalsFilterChange = (e) => {
    const { name, value } = e.target;
    setPendingArrivalsFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // const handleRecentCheckinsFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setRecentCheckinsFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: value,
  //   }));
  // };
  // const handleFailedCheckinsFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFailedCheckinsFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: value,
  //   }));
  // };
  const handleShowPendingCheckins = () => {
    setShowPendingCheckins(true);
    // setShowRecentCheckins(false);
    // setShowFailedCheckins(false);
  };
  // const handleShowRecentCheckins = () => {
  //   setShowRecentCheckins(true);
  //   setShowPendingCheckins(false);
  //   setShowFailedCheckins(false);
  // };
  // const handleShowFailedCheckins = () => {
  //   setShowFailedCheckins(true);
  //   setShowPendingCheckins(false);
  //   setShowRecentCheckins(false);
  // };

  const cardNavigation = (stat, e) => {
    if (stat.title === "Pending Arrivals") {
      handleShowPendingCheckins();
    }
    // else if (stat.title === "Recent Check-ins") {
    //   handleShowRecentCheckins();
    // } else if (stat.title === "Failed Check-ins") {
    //   handleShowFailedCheckins();
    // }
  };

  const stats = [
    { id: 1, title: "Pending Arrivals", count: pendingArrivals.length, increase: true },
    // { id: 2, title: "Recent Check-ins", count: recentCheckins.length, increase: true },
    // { id: 3, title: "Failed Check-ins", count: failedCheckins.length, increase: false },
  ];

  const handleDateChange = (e) => {
    const selectedValue = e.target.value;
    setDateRange(selectedValue);
    if (selectedValue === "Today") {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setCustomDateFrom(formattedDate);
      setCustomDateTo(formattedDate);
      setShowCalendar(false);
    } else if (selectedValue === "Yesterday") {
      const yesterday = new Date(new Date().getTime() - 86400000);
      const formattedDate = yesterday.toISOString().split('T')[0];
      setCustomDateFrom(formattedDate);
      setCustomDateTo(formattedDate);
      setShowCalendar(false);
    } else if (selectedValue === "Custom Range") {
      setShowCalendar(true);
      setCustomDateFrom("");
      setCustomDateTo("");
    } else {
      setShowCalendar(false);
      setCustomDateFrom("");
      setCustomDateTo("");
    }
  };

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        const guests = data.reduce((acc, current) => acc.concat(current.guests), []);
        setPendingArrivals(guests.invitationDetails || []);
      } else {
        setPendingArrivals(data.invitationDetails || []);
      }
    }
  }, [data]);

  // useEffect(() => {
  //   if (data) {
  //     const now = new Date();
  //     const fourHoursAgo = new Date(now.getTime() - 36 * 60 * 60 * 1000);
  //     const filteredCheckins = (data.invitationDetails || []).filter(invite => {
  //       if (invite?.guests?.length > 0) {
  //         const checkInTime = new Date(invite.guests[0]?.CheckInTime);
  //         return checkInTime >= fourHoursAgo && checkInTime <= now;
  //       }
  //       return false;
  //     });
  //     setRecentCheckins(filteredCheckins);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (data) {
  //     if (Array.isArray(data)) {
  //       const guests = data.reduce((acc, current) => acc.concat(current.guests), []);
  //       setFailedCheckins(guests.invitationDetails || []);
  //     } else {
  //       setFailedCheckins(data.invitationDetails || []);
  //     }
  //   }
  // }, [data]);

  const formatDateTime = (isoString) => {
    if (!isoString) return '—';
    const date = new Date(isoString);
    if (isNaN(date)) return 'Invalid Date';

    return date.toLocaleString('en-IN', {
      // weekday: 'short',    // e.g., "Fri"
      // year: 'numeric',
      // month: 'short',      // e.g., "May"
      // day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true         // Use 12-hour format with AM/PM
    });
  };

  const getActualDuration = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return '—';
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    if (isNaN(start) || isNaN(end)) return 'Invalid';

    const diffMs = end - start;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} hrs`;
  };

  const formatDuration = (durationString) => {
    const [hours, minutes] = durationString.split(':').map(Number);
    const totalMinutes = (hours || 0) * 60 + (minutes || 0);
    const hoursDisplay = Math.floor(totalMinutes / 60);
    const minutesDisplay = totalMinutes % 60;

    if (hoursDisplay > 0 && minutesDisplay > 0) {
      return `${hoursDisplay} hours ${minutesDisplay} minutes`;
    } else if (hoursDisplay > 0) {
      return `${hoursDisplay} hours`;
    } else if (minutesDisplay > 0) {
      return `${minutesDisplay} minutes`;
    } else {
      return '0 minutes';
    }
  };

  const exportInvitationsToPDF = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    doc.setFontSize(16);
    doc.text("Invitation List", 14, 20);

    const allInvites = [...pendingArrivals,
      // ...recentCheckins, 
      // ...failedCheckins
    ];

    const tableColumn = [
      "Guest Name",
      "Host",
      "Unit",
      "Start",
      "Check-in",
      "Check-out",
      "Duration",
      "Status",
    ];

    const tableRows = allInvites.map((invite) => {
      const guest = invite?.guests?.[0] || {};
      return [
        guest.name || "N/A",
        invite?.Invitation?.HostId || "N/A",
        invite?.Invitation?.UnitId || "N/A",
        formatDateTime(invite?.Invitation?.StartTime),
        formatDateTime(guest?.CheckInTime),
        formatDateTime(guest?.CheckoutTime),
        formatDuration(invite?.Invitation?.Duration),
        guest?.status || "Pending",
      ];
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: "striped",
      styles: { fontSize: 8, cellPadding: 2 },
    });

    doc.save("invitation_list.pdf");
  };

  const exportInvitationsToExcel = () => {
    const allInvites = [...pendingArrivals];

    const data = allInvites.map((invite) => {
      const guest = invite?.guests?.[0] || {};
      return {
        "Guest Name": guest.name || "N/A",
        "Host": invite?.Invitation?.HostId || "N/A",
        "Unit": invite?.Invitation?.UnitId || "N/A",
        "Start": formatDateTime(invite?.Invitation?.StartTime),
        "Check-in": formatDateTime(guest?.CheckInTime),
        "Check-out": formatDateTime(guest?.CheckoutTime),
        "Duration": formatDuration(invite?.Invitation?.Duration),
        "Status": guest?.status || "Pending",
      };
    });

    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Invitations");

    writeFile(workbook, "invitation_list.xlsx");
  };

  // const exportRecentCheckinsPDF = () => {
  //   const filteredRecentCheckins = recentCheckins;
  //   if (!filteredRecentCheckins || filteredRecentCheckins.length === 0) {
  //     alert("No recent check-in data to export.");
  //     return;
  //   }

  //   const doc = new jsPDF();
  //   doc.text("Recent Check-ins", 14, 10);

  //   const tableColumn = [
  //     "Guest Name",
  //     "Host",
  //     "Unit",
  //     "Start",
  //     "Check-in",
  //     "Check-out",
  //     "Duration",
  //     "Status",
  //   ];

  //   const tableRows = filteredRecentCheckins.map((invite) => {
  //     const guest = invite?.guests?.[0] || {};
  //     return [
  //       guest.name || "N/A",
  //       invite?.Invitation?.HostId || "N/A",
  //       invite?.Invitation?.UnitId || "N/A",
  //       formatDateTime(invite?.Invitation?.StartTime),
  //       formatDateTime(guest?.CheckInTime),
  //       formatDateTime(guest?.CheckoutTime),
  //       formatDuration(invite?.Invitation?.Duration),
  //       guest?.status || "N/A",
  //     ];
  //   });

  //   autoTable(doc, {
  //     head: [tableColumn],
  //     body: tableRows,
  //     startY: 20,
  //     theme: "striped",
  //     styles: { fontSize: 8, cellPadding: 2 },
  //   });

  //   doc.save("Recent_Checkins.pdf");
  // };

  // const exportFailedCheckinsPDF = () => {
  //   const filteredFailedCheckins = failedCheckins;
  //   if (!filteredFailedCheckins || filteredFailedCheckins.length === 0) {
  //     alert("No failed check-in data to export.");
  //     return;
  //   }

  //   const doc = new jsPDF();
  //   doc.text("Failed Check-ins", 14, 10);

  //   const tableColumn = [
  //     "Guest Name",
  //     "Host",
  //     "Unit",
  //     "Start",
  //     "Check-in",
  //     "Check-out",
  //     "Duration",
  //     "Reason",
  //   ];

  //   const tableRows = filteredFailedCheckins.map((invite) => {
  //     const guest = invite?.guests?.[0] || {};
  //     return [
  //       guest.name || "N/A",
  //       invite?.Invitation?.HostId || "N/A",
  //       invite?.Invitation?.UnitId || "N/A",
  //       formatDateTime(invite?.Invitation?.StartTime),
  //       formatDateTime(guest?.CheckInTime),
  //       formatDateTime(guest?.CheckoutTime),
  //       formatDuration(invite?.Invitation?.Duration),
  //       invite?.failureReason || "N/A",
  //     ];
  //   });

  //   autoTable(doc, {
  //     head: [tableColumn],
  //     body: tableRows,
  //     startY: 20,
  //     theme: "striped",
  //     styles: { fontSize: 8, cellPadding: 2 },
  //   });

  //   doc.save("Failed_Checkins.pdf");
  // };

  return (
    <div style={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
      {/* Main Content */}
      <div
        style={{
          marginLeft: sidebarVisible ? "250px" : "0px",
          flex: 1,
          transition: "margin-left 0.3s ease",
          width: "100%",
        }}
      >
        {/* Main Dashboard Area */}
        <div className="container-fluid bg-light p-3">
          {/* Filters */}
          <div className="bg-white rounded p-4 shadow-sm mb-4">
            <div className="row g-2 align-items-end">
              {/* <div className="col-md-2 mb-2 mb-md-0">
                <select
                  className="form-select"
                  value={dateRange}
                  onChange={handleDateChange}
                >
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Custom Range</option>
                </select>
              </div> */}
              {/* From Date */}
              <div className="col-md-2">
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => {
                    setFromDate(date);
                    if (toDate && date > toDate) {
                      setToDate(null);
                    }
                  }}
                  selectsStart
                  startDate={fromDate}
                  endDate={toDate}
                  maxDate={toDate}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="From date"
                  className="form-control"
                />
              </div>

              {/* To Date */}
              <div className="col-md-2">
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  selectsEnd
                  startDate={fromDate}
                  endDate={toDate}
                  minDate={fromDate}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="To date"
                  className="form-control"
                />
              </div>
              {dateRange === "Today" && (
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    value={new Date().toISOString().split('T')[0]}
                    readOnly
                  />
                </div>
              )}
              {dateRange === "Yesterday" && (
                <div className="col-md-2">
                  <input
                    type="text"
                    className="form-control"
                    value={new Date(new Date().getTime() - 86400000).toISOString().split('T')[0]}
                    readOnly
                  />
                </div>
              )}
              {showCalendar && (
                <div className="row">
                  <div className="col-md-2">
                    <label>From:</label>
                    <input
                      type="date"
                      className="form-control"
                      value={customDateFrom}
                      onChange={(e) => setCustomDateFrom(e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label>To:</label>
                    <input
                      type="date"
                      className="form-control"
                      value={customDateTo}
                      onChange={(e) => setCustomDateTo(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Host Dropdown */}
              <div className="col-md-2">
                <select
                  className="form-select"
                  name="host"
                  value={pendingArrivalsFilters.host}
                  onChange={handlePendingArrivalsFilterChange}
                >
                  <option value="">Select Host</option>
                  {pendingArrivals?.map((arrival, index) => {
                    if (!pendingArrivals.slice(0, index).some(prev => prev.hostName === arrival.hostName)) {
                      return (
                        <option key={arrival.hostName} value={arrival.hostName}>
                          {arrival.hostName}
                        </option>
                      );
                    }
                    return null;
                  })}
                </select>
              </div>

              {/* Visit Purpose Dropdown */}
              <div className="col-md-3">
                <select
                  className="form-select"
                  name="visitPurpose"
                  value={pendingArrivalsFilters.visitPurpose}
                  onChange={handlePendingArrivalsFilterChange}
                >
                  <option value="">Select Visit Purpose</option>
                  {pendingArrivals?.map((arrival, index) => {
                    if (!pendingArrivals.slice(0, index).some(prev => prev.visitPurpose === arrival.visitPurpose)) {
                      return (
                        <option key={arrival.visitPurpose} value={arrival.visitPurpose}>
                          {arrival.visitPurpose}
                        </option>
                      );
                    }
                    return null;
                  })}
                </select>
              </div>

              {/* Export Dropdown */}
              <div className="col-md-2">
                <Dropdown as={ButtonGroup} className="w-100">
                  <Dropdown.Toggle className="w-100 btn btn-primary" id="dropdown-basic">
                    Export
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    <Dropdown.Item onClick={exportInvitationsToPDF}>Export as PDF</Dropdown.Item>
                    <Dropdown.Item onClick={exportInvitationsToExcel}>Export as Excel</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

            </div>
          </div>
          {/* Stats Cards */}
          <div className="row mb-4">
            {stats.map(stat => (
              <div key={stat.id} className="col-md-6 col-lg-3 mb-3" onClick={(e) => cardNavigation(stat, e)}>
                <div className="bg-white rounded p-3 shadow-sm h-100">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="text-muted d-flex align-items-center">
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#FFC107", // Yellow
                          borderRadius: "50%",
                          display: "inline-block",
                          marginRight: "8px"
                        }}
                      ></span>
                      {stat.title}
                    </div>
                    <i className="bi bi-three-dots"></i>
                  </div>
                  <div className="h3 mb-2">{stat.count}</div>
                  <div className="small" style={{ color: stat.increase ? '#28a745' : '#dc3545' }}>
                    <i className={`bi bi-arrow-${stat.increase ? 'up' : 'down'}`}></i>10% vs last week
                    {/* If you want percentage, you can include one here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* //pendingAcheckins data */}
          {showPendingCheckins && (
            <div>
              <h2>Pending Arrivals</h2>
              {/* <div className="row mb-3 align-items-start"> */}
              {/* <div className="col-md-3 mb-2 mb-md-0">
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
                </div> */}
              {/* <div className="col-md-2 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    name="host"
                    value={pendingArrivalsFilters.host}
                    onChange={handlePendingArrivalsFilterChange}
                  >
                    <option value="">Select Host</option>
                    {pendingArrivals?.map((arrival, index) => {
                      if (
                        !pendingArrivals
                          .slice(0, index)
                          .some((prev) => prev.hostName === arrival.hostName)
                      ) {
                        return (
                          <option key={arrival.hostName} value={arrival.hostName}>
                            {arrival.hostName}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div> */}

              {/* <div className="col-md-3 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    name="visitPurpose"
                    value={pendingArrivalsFilters.visitPurpose}
                    onChange={handlePendingArrivalsFilterChange}
                  >
                    <option value="">Select Visit Purpose</option>
                    {pendingArrivals?.map((arrival, index) => {
                      if (
                        !pendingArrivals
                          .slice(0, index)
                          .some((prev) => prev.visitPurpose === arrival.visitPurpose)
                      ) {
                        return (
                          <option key={arrival.visitPurpose} value={arrival.visitPurpose}>
                            {arrival.visitPurpose}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div> */}
              {/* <div className="col-md-2 mb-2 mb-md-0">
                  <button
                    className="btn w-100"
                    onClick={exportInvitationsToPDF}
                  >
                    Export PDF
                  </button>
                </div> */}
              {/* </div> */}
              <table className="table table-striped mt-4">
                <thead>
                  <tr>
                    <th>Unit</th>
                    <th>Host</th>
                    <th>Planned Start</th>
                    <th>Planned Duration</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Actual Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingArrivals
                    .map((arrival) => (
                      <tr>
                        <td>{arrival?.Invitation?.UnitId}</td>
                        <td>{arrival?.Invitation.HostId}</td>
                        <td>{formatDateTime(arrival?.Invitation?.StartTime)}</td>
                        <td>{formatDuration(arrival?.Invitation?.Duration)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckInTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckoutTime)}</td>
                        <td>
                          {getActualDuration(
                            arrival?.guests[0]?.CheckInTime,
                            arrival?.guests[0]?.CheckoutTime
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          {/* //recentCheckins data */}
          {/* {showRecentCheckins && (
            <div>
              <h2>Recent Check-ins (last 4 Hours)</h2>
              <div className="row mb-3 align-items-start">
                <div className="col-md-3 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    name="timeWindow"
                    value={recentCheckinsFilters.timeWindow}
                    onChange={handleFailedCheckinsFilterChange}
                  >
                    <option value="">Select Time Window</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="thisWeek">This Week</option>
                  </select>
                </div>
                <div className="col-md-2 mb-2 mb-md-0 ms-10">
                  <select
                    className="form-select"
                    name="host"
                    value={recentCheckinsFilters.host}
                    onChange={handleRecentCheckinsFilterChange}
                  >
                    <option value="">Select Host</option>
                    {recentCheckins.map((checkin, index) => {
                      if (
                        !recentCheckins
                          .slice(0, index)
                          .some(
                            (prevCheckin) =>
                              prevCheckin.hostName === checkin.hostName,
                          )
                      ) {
                        return (
                          <option
                            key={checkin.hostName}
                            value={checkin.hostName}
                          >
                            {checkin.hostName}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
                <div className="col-md-2 mb-2 mb-md-0">
                  <button
                    className="btn w-100"
                    onClick={exportRecentCheckinsPDF}
                  >
                    Export PDF
                  </button>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Host</th>
                    <th>Unit</th>
                    <th>Start</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCheckins
                    .map((arrival) => (
                      <tr>
                        <td>{arrival?.Invitation.HostId}</td>
                        <td>{arrival?.Invitation?.UnitId}</td>
                        <td>{formatDateTime(arrival?.Invitation?.StartTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckInTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckoutTime)}</td>
                        <td>{formatDuration(arrival?.Invitation?.Duration)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )} */}
          {/* //Failed Check-ins data */}
          {/* {showFailedCheckins && (
            <div>
              <h2>Failed Check-ins</h2>
              <div className="row mb-3 align-items-start">
                <div className="col-md-3 mb-2 mb-md-0">
                  <select
                    className="form-select"
                    name="timeWindow"
                    value={failedCheckinsFilters.timeWindow}
                    onChange={handleRecentCheckinsFilterChange}
                  >
                    <option value="">Select Time Window</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="thisWeek">This Week</option>
                  </select>
                </div>
                <div className="col-md-2 mb-2 mb-md-0 ms-10">
                  <select
                    className="form-select"
                    name="host"
                    value={failedCheckinsFilters.host}
                    onChange={handleRecentCheckinsFilterChange}
                  >
                    <option value="">Select Host</option>
                    {failedCheckins.map((checkin, index) => {
                      if (
                        !failedCheckins
                          .slice(0, index)
                          .some(
                            (prevCheckin) =>
                              prevCheckin.hostName === checkin.hostName,
                          )
                      ) {
                        return (
                          <option
                            key={checkin.hostName}
                            value={checkin.hostName}
                          >
                            {checkin.hostName}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
                <div className="col-md-2 mb-2 mb-md-0">
                  <button
                    className="btn w-100"
                    onClick={exportFailedCheckinsPDF}
                  >
                    Export PDF
                  </button>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Host</th>
                    <th>Unit</th>
                    <th>Start</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {failedCheckins
                    .map((arrival) => (
                      <tr>
                        <td>{arrival?.Invitation.HostId}</td>
                        <td>{arrival?.Invitation?.UnitId}</td>
                        <td>{formatDateTime(arrival?.Invitation?.StartTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckInTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckoutTime)}</td>
                        <td>{formatDuration(arrival?.Invitation?.Duration)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
