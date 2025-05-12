import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useFetchHostInvitesQuery } from '../../api/apiSlice';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
    const { data, error, isLoading } = useFetchHostInvitesQuery();
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedDesk, setSelectedDesk] = useState('');
    // const [dateRange, setDateRange] = useState('Today');
    const [dateRange, setDateRange] = useState([null, null]);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [customDateFrom, setCustomDateFrom] = useState("");
    const [customDateTo, setCustomDateTo] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [stats, setStats] = useState([
        { id: 1, title: 'Total Invites', count: 0, change: 0, increasing: true },
        { id: 2, title: 'Active visitors', count: 0, change: 0, increasing: true },
        { id: 3, title: 'Check-ins', count: 0, change: 0, increasing: true },
        { id: 4, title: 'Yet to checkin', count: 0, change: 0, increasing: false },
    ]);

    const predefinedUnits = ['Unit A', 'Unit B', 'Unit C'];
    const predefinedDesks = {
        'Unit A': ['Desk 1A', 'Desk 2A', 'Desk 3A'],
        'Unit B': ['Desk 1B', 'Desk 2B', 'Desk 3B'],
        'Unit C': ['Desk 1C', 'Desk 2C', 'Desk 3C'],
    };

    // Extract invitations from the data
    const invitations = data?.invitationDetails || [];

    // Extract unique units from the data
    const units = [...new Set(invitations
        .map(invite => invite?.Invitation?.UnitId)
        .filter(Boolean))
    ].sort();

    // Create desks object based on units
    const dynamicDesks = units.reduce((acc, unit) => {
        acc[unit] = [...new Set(invitations
            .filter(invite => invite?.Invitation?.UnitId === unit)
            .map(invite => invite?.Invitation?.DeskId)
            .filter(Boolean))
        ];
        return acc;
    }, {});

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
            // Get invitations array
            let filteredInvitations = invitations;

            // Apply unit and desk filters
            if (selectedUnit) {
                filteredInvitations = filteredInvitations.filter(invite =>
                    invite?.Invitation?.UnitId === selectedUnit
                );
            }
            if (selectedDesk) {
                filteredInvitations = filteredInvitations.filter(invite =>
                    invite?.Invitation?.DeskId === selectedDesk
                );
            }

            // Calculate total counts
            const totalInvites = invitations.length;
            const checkedIn = invitations.filter(invite =>
                invite?.guests?.some(guest => guest.CheckInTime)
            ).length;
            const pending = invitations.filter(invite =>
                !invite?.guests?.some(guest => guest.CheckInTime || guest.CheckoutTime)
            ).length;
            const cancelled = invitations.filter(invite =>
                invite?.Invitation?.Status === 'CANCELLED'
            ).length;

            // Calculate filtered counts
            const filteredTotal = filteredInvitations.length;
            const filteredCheckedIn = filteredInvitations.filter(invite =>
                invite?.guests?.some(guest => guest.CheckInTime)
            ).length;
            const filteredPending = filteredInvitations.filter(invite =>
                !invite?.guests?.some(guest => guest.CheckInTime || guest.CheckoutTime)
            ).length;
            const filteredCancelled = filteredInvitations.filter(invite =>
                invite?.Invitation?.Status === 'CANCELLED'
            ).length;

            // Update stats
            setStats([
                {
                    id: 1,
                    title: 'Total Invites',
                    count: filteredTotal,
                    change: totalInvites ? ((filteredTotal - totalInvites) / totalInvites * 100).toFixed(1) : 0,
                    increasing: filteredTotal >= totalInvites
                },
                {
                    id: 2,
                    title: 'Active visitors',
                    count: filteredCancelled || 12,
                    change: cancelled ? ((filteredCancelled / cancelled) * 100).toFixed(1) : 0,
                    increasing: false
                },
                {
                    id: 3,
                    title: 'Check-ins',
                    count: filteredCheckedIn,
                    change: checkedIn ? ((filteredCheckedIn / checkedIn) * 100).toFixed(1) : 0,
                    increasing: true
                },
                {
                    id: 4,
                    title: 'Yet to checkin',
                    count: filteredPending,
                    change: pending ? ((filteredPending / pending) * 100).toFixed(1) : 0,
                    increasing: false
                }
            ]);
        }
    }, [data, selectedUnit, selectedDesk]);

    const handleUnitChange = (e) => {
        const selected = e.target.value;
        setSelectedUnit(selected);
        setSelectedDesk('');
    };

    if (isLoading) {
        return <div className="text-center p-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-center p-5 text-danger">Error loading data</div>;
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
            <div style={{
                marginLeft: sidebarVisible ? '250px' : '0px',
                flex: 1,
                transition: 'margin-left 0.3s ease',
                width: '100%'
            }}>
                <div className="container-fluid bg-light p-3">
                    {/* Filters */}
                    <div className="bg-white rounded p-3 shadow-sm mb-4">
                        <div className="row align-items-end g-2">
                            {/* Unit */}
                            <div className="col-md-2">
                                <label className="form-label"><b>Unit</b></label>
                                <select className="form-select" value={selectedUnit} onChange={handleUnitChange}>
                                    <option value="">All Units</option>
                                    {predefinedUnits.map((unit) => (
                                        <option key={unit} value={unit}>{unit}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Desk */}
                            <div className="col-md-2">
                                <label className="form-label"><b>Desk</b></label>
                                <select
                                    className="form-select"
                                    value={selectedDesk}
                                    onChange={(e) => setSelectedDesk(e.target.value)}
                                >
                                    <option value="">All Desks</option>
                                    {predefinedDesks[selectedUnit]?.map((desk) => (
                                        <option key={desk} value={desk}>{desk}</option>
                                    ))}
                                </select>
                            </div>

                            {/* From Date */}
                            <div className="col-md-2">
                                <label className="form-label"><b>From date</b></label>
                                <DatePicker
                                    selected={fromDate}
                                    onChange={(date) => {
                                        setFromDate(date);
                                        if (toDate && date > toDate) setToDate(null);
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
                                <label className="form-label"><b>To date</b></label>
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
                            <div className="col-md-2 d-flex align-items-end">
                                <button
                                    className="btn btn-outline-secondary w-100"
                                    onClick={() => {
                                        setFromDate(null);
                                        setToDate(null);
                                    }}
                                >
                                    Clear Dates
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Stats Cards */}
                    <div className="row mb-4">
                        {stats.map(stat => (
                            <div key={stat.id} className="col-md-6 col-lg-3 mb-3">
                                <div className="bg-white rounded p-3 shadow-sm h-100">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div className="text-muted">{stat.title}</div>
                                        <i className="bi bi-three-dots"></i>
                                    </div>
                                    <div className="h3 mb-2">{stat.count}</div>
                                    <div className="small" style={{ color: stat.increasing ? '#28a745' : '#dc3545' }}>
                                        <i className={`bi bi-arrow-${stat.increasing ? 'up' : 'down'}`}></i>
                                        {Math.abs(stat.change)}% vs last week
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
