import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./checkin.css";
import { useFetchHostInvitesQuery } from "../../../api/apiSlice";

const CheckIn = () => {
  const { data, error, isLoading } = useFetchHostInvitesQuery();
  const [pendingArrivals, setPendingArrivals] = useState([]);
  const [recentCheckins, setRecentCheckins] = useState([]);
  const [failedCheckins, setFailedCheckins] = useState([]);
  const [dateRange, setDateRange] = useState("Today");
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [showPendingCheckins, setShowPendingCheckins] = useState(false);
  const [showRecentCheckins, setShowRecentCheckins] = useState(false);
  const [showFailedCheckins, setShowFailedCheckins] = useState(false);
  const [pendingArrivalsFilters, setPendingArrivalsFilters] = useState({
    timeWindow: "",
    host: "",
    visitPurpose: "",
  });
  const [recentCheckinsFilters, setRecentCheckinsFilters] = useState({
    timeWindow: "",
    ndaStatus: "",
    safetySopStatus: "",
  });
  const [failedCheckinsFilters, setFailedCheckinsFilters] = useState({
    timeWindow: "",
    ndaStatus: "",
    safetySopStatus: "",
  });

  useEffect(() => {
    // fetchPendingArrivals();
    fetchRecentCheckins();
    fetchFailedCheckins()
  }, []);

  const fetchRecentCheckins = async () => {
    // Fetch recent check-ins data from API or database
    const response = await fetch("/api/recent-checkins");
    const data = await response.json();
    setRecentCheckins(data);
  };
  const fetchFailedCheckins = async () => {
    // Fetch recent check-ins data from API or database
    const response = await fetch("/api/recent-checkins");
    const data = await response.json();
    setFailedCheckins(data);
  };

  const handlePendingArrivalsFilterChange = (e) => {
    const { name, value } = e.target;
    setPendingArrivalsFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleRecentCheckinsFilterChange = (e) => {
    const { name, value } = e.target;
    setRecentCheckinsFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleFailedCheckinsFilterChange = (e) => {
    const { name, value } = e.target;
    setFailedCheckinsFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleShowPendingCheckins = () => {
    setShowPendingCheckins(true);
    setShowRecentCheckins(false);
    setShowFailedCheckins(false);
  };
  const handleShowRecentCheckins = () => {
    setShowRecentCheckins(true);
    setShowPendingCheckins(false);
    setShowFailedCheckins(false);
  };
  const handleShowFailedCheckins = () => {
    setShowFailedCheckins(true);
    setShowPendingCheckins(false);
    setShowRecentCheckins(false);
  };

  const cardNavigation = (stat, e) => {
    if (stat.title === "Pending Arrivals") {
      handleShowPendingCheckins();
    } else if (stat.title === "Recent Check-ins") {
      handleShowRecentCheckins();
    } else if (stat.title === "Failed Check-ins") {
      handleShowFailedCheckins();
    }
  };

  const stats = [
    { id: 1, title: "Pending Arrivals", count: pendingArrivals.length, color: "Yellow", increase: true },
    { id: 2, title: "Recent Check-ins", count: recentCheckins.length, color: "Green", increase: true },
    { id: 3, title: "Failed Check-ins", count: failedCheckins.length, color: "Red", increase: false },
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

  useEffect(() => {
    if (data) {
      const now = new Date();
      const fourHoursAgo = new Date(now.getTime() - 4 * 60 * 60 * 1000);
      const filteredCheckins = (data.invitationDetails || []).filter(invite => {
        if (invite?.guests?.length > 0) {
          const checkInTime = new Date(invite.guests[0]?.CheckInTime);
          return checkInTime >= fourHoursAgo && checkInTime <= now;
        }
        return false;
      });
      setRecentCheckins(filteredCheckins);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        const guests = data.reduce((acc, current) => acc.concat(current.guests), []);
        setFailedCheckins(guests.invitationDetails || []);
      } else {
        setFailedCheckins(data.invitationDetails || []);
      }
    }
  }, [data]);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const formatDuration = (durationString) => {
    const [hours, minutes, seconds] = durationString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const hoursDisplay = Math.floor(totalMinutes / 60);
    const minutesDisplay = totalMinutes % 60;
    return `${hoursDisplay} hours ${minutesDisplay} minutes`;
  };

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
            <div className="row mb-1 align-items-end">
              <div className="col-md-2 mb-2 mb-md-0">
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
            </div>
          </div>
          {/* Stats Cards */}
          <div className="row mb-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="col-md-6 col-lg-3 mb-3"
                onClick={(e) => cardNavigation(stat, e)}
              >
                <div className="bg-white rounded p-3 shadow-sm h-100">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div
                      style={{
                        marginTop: "6px",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: stat.color,
                      }}
                    ></div>
                    <div className="text-muted ">{stat.title}</div>
                    <i className="bi bi-three-dots"></i>
                  </div>
                  <div className="h3 mb-2" style={{ color: stat.color }}>{stat.count}</div>
                  <div className="small" style={{ color: stat.increase ? '#28a745' : '#dc3545' }}>
                    <i className={`bi bi-arrow-${stat.increase ? 'up' : 'down'}`}></i> 10% vs last week
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* //pendingAcheckins data */}
          {showPendingCheckins && (
            <div>
              <h2>Pending Arrivals</h2>
              <div className="row mb-3 align-items-start">
                <div className="col-md-3 mb-2 mb-md-0">
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
                <div className="col-md-2 mb-2 mb-md-0 ms-10">
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
                          .some(
                            (prevArrival) =>
                              prevArrival.hostName === arrival.hostName,
                          )
                      ) {
                        return (
                          <option
                            key={arrival.hostName}
                            value={arrival.hostName}
                          >
                            {arrival.hostName}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
                <div className="col-md-3 mb-2 mb-md-0 ms-20">
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
                          .some(
                            (prevArrival) =>
                              prevArrival.visitPurpose === arrival.visitPurpose,
                          )
                      ) {
                        return (
                          <option
                            key={arrival.visitPurpose}
                            value={arrival.visitPurpose}
                          >
                            {arrival.visitPurpose}
                          </option>
                        );
                      }
                      return null;
                    })}
                  </select>
                </div>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Host Id</th>
                    <th>Unit Id</th>
                    <th>Start Time</th>
                    <th>Check-in Time</th>
                    <th>Check-out Time</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingArrivals
                    // .filter((arrival) => {
                    //   if (pendingArrivalsFilters.timeWindow) {
                    //     return (
                    //       arrival.expectedArrivalTime >=
                    //       pendingArrivalsFilters.timeWindow
                    //     );
                    //   }
                    //   if (pendingArrivalsFilters.host) {
                    //     return arrival.hostName === pendingArrivalsFilters.host;
                    //   }
                    //   if (pendingArrivalsFilters.visitPurpose) {
                    //     return (
                    //       arrival.visitPurpose ===
                    //       pendingArrivalsFilters.visitPurpose
                    //     );
                    //   }
                    //   if (customDateFrom && customDateTo) {
                    //     const arrivalDate = new Date(arrival.expectedArrivalTime);
                    //     const fromDate = new Date(customDateFrom);
                    //     const toDate = new Date(customDateTo);
                    //     return (
                    //       arrivalDate >= fromDate && arrivalDate <= toDate
                    //     );
                    //   }
                    //   if (dateRange === "Today") {
                    //     const today = new Date();
                    //     const formattedDate = today.toISOString().split('T')[0];
                    //     const arrivalDate = new Date(arrival.expectedArrivalTime);
                    //     const todayDate = new Date(formattedDate);
                    //     return (
                    //       arrivalDate.toDateString() === todayDate.toDateString()
                    //     );
                    //   }
                    //   if (dateRange === "Yesterday") {
                    //     const yesterday = new Date();
                    //     yesterday.setDate(yesterday.getDate() - 1);
                    //     const formattedDate = yesterday.toISOString().split('T')[0];
                    //     const arrivalDate = new Date(arrival.expectedArrivalTime);
                    //     const yesterdayDate = new Date(formattedDate);
                    //     return (
                    //       arrivalDate.toDateString() === yesterdayDate.toDateString()
                    //     );
                    //   }
                    //   return true;
                    // })
                    .map((arrival) => (
                      <tr>
                        <td>{arrival?.Invitation.HostId}</td>
                        <td>{arrival?.Invitation?.UnitId}</td>
                        <td>{formatDateTime(arrival?.Invitation?.StartTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckInTime)}</td>
                        <td>{formatDateTime(arrival?.guests[0]?.CheckoutTime)}</td>
                        <td>{formatDuration(arrival?.Invitation?.Duration)}</td>
                        {/* <td>{arrival.expectedArrivalTime}</td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          {/* //recentCheckins data */}
          {showRecentCheckins && (
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
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Host Id</th>
                    <th>Unit Id</th>
                    <th>Start Time</th>
                    <th>Check-in Time</th>
                    <th>Check-out Time</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCheckins
                    // .filter((checkin) => {
                    //   if (recentCheckinsFilters.timeWindow) {
                    //     return (
                    //       checkin.expectedArrivalTime >=
                    //       recentCheckinsFilters.timeWindow
                    //     );
                    //   }
                    //   if (recentCheckinsFilters.host) {
                    //     return checkin.hostName === recentCheckinsFilters.host;
                    //   }
                    //   if (customDateFrom && customDateTo) {
                    //     const checkinDate = new Date(checkin.expectedArrivalTime);
                    //     const fromDate = new Date(customDateFrom);
                    //     const toDate = new Date(customDateTo);
                    //     return (
                    //       checkinDate >= fromDate && checkinDate <= toDate

                    //     );
                    //   }
                    //   return true;
                    // })
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
          )}
          {/* //Failed Check-ins data */}
          {showFailedCheckins && (
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
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Host Id</th>
                    <th>Unit Id</th>
                    <th>Start Time</th>
                    <th>Check-in Time</th>
                    <th>Check-out Time</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {failedCheckins
                    // .filter((checkin) => {
                    //   if (failedCheckinsFilters.timeWindow) {
                    //     return (
                    //       checkin.expectedArrivalTime >=
                    //       failedCheckinsFilters.timeWindow
                    //     );
                    //   }
                    //   if (failedCheckinsFilters.host) {
                    //     return checkin.hostName === failedCheckinsFilters.host;
                    //   }
                    //   if (customDateFrom && customDateTo) {
                    //     const checkinDate = new Date(checkin.expectedArrivalTime);
                    //     const fromDate = new Date(customDateFrom);
                    //     const toDate = new Date(customDateTo);
                    //     return (
                    //       checkinDate >= fromDate && checkinDate <= toDate

                    //     );
                    //   }
                    //   return true;
                    // })
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
