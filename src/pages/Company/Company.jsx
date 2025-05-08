import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useFetchHostInvitesQuery } from '../../api/apiSlice';

const Dashboard = () => {
    const { data, error, isLoading } = useFetchHostInvitesQuery();
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedDesk, setSelectedDesk] = useState('');
    const [dateRange, setDateRange] = useState('Today');
    const [customDateFrom, setCustomDateFrom] = useState("");
    const [customDateTo, setCustomDateTo] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [stats, setStats] = useState([
        { id: 1, title: 'Total Invites', count: 0, change: 0, increasing: true },
        { id: 2, title: 'Check-ins', count: 0, change: 0, increasing: true },
        { id: 3, title: 'Pending', count: 0, change: 0, increasing: false },
        { id: 4, title: 'Cancelled', count: 0, change: 0, increasing: true }
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
                    title: 'Check-ins',
                    count: filteredCheckedIn,
                    change: checkedIn ? ((filteredCheckedIn / checkedIn) * 100).toFixed(1) : 0,
                    increasing: true
                },
                {
                    id: 3,
                    title: 'Pending',
                    count: filteredPending,
                    change: pending ? ((filteredPending / pending) * 100).toFixed(1) : 0,
                    increasing: false
                },
                {
                    id: 4,
                    title: 'Cancelled',
                    count: filteredCancelled,
                    change: cancelled ? ((filteredCancelled / cancelled) * 100).toFixed(1) : 0,
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
                        <div className="row align-items-center">
                            <div className="col-md-2 mb-2">
                                <label className="form-label">Unit</label>
                                <select className="form-select" value={selectedUnit} onChange={handleUnitChange}>
                                    <option value="">All Units</option>
                                    {predefinedUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-2 mb-2">
                                <label className="form-label">Desk</label>
                                <select
                                    className="form-select"
                                    value={selectedDesk}
                                    onChange={(e) => setSelectedDesk(e.target.value)}
                                >
                                    <option value="">All Desks</option>
                                    {predefinedDesks[selectedUnit]?.map((desk) => (
                                        <option key={desk} value={desk}>
                                            {desk}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-2 mb-2">
                                <label className="form-label">Date Range</label>
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
                            {(dateRange === "Today" || dateRange === "Yesterday") && (
                                <div className="col-md-2 mb-2">
                                    <label className="form-label">Selected Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        readOnly
                                        value={
                                            dateRange === "Today"
                                                ? new Date().toISOString().split('T')[0]
                                                : new Date(new Date().getTime() - 86400000).toISOString().split('T')[0]
                                        }
                                    />
                                </div>
                            )}
                        </div>

                        {showCalendar && (
                            <div className="row mt-3">
                                <div className="col-md-2">
                                    <label className="form-label">From:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={customDateFrom}
                                        onChange={(e) => setCustomDateFrom(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">To:</label>
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
                    <div className="bg-white rounded p-3 shadow-sm">
                        <h5 className="mb-3">Dashboard Content</h5>
                        <p>Selected Unit: <strong>{selectedUnit || "All Units"}</strong></p>
                        <p>Selected Desk: <strong>{selectedDesk || "All Desks"}</strong></p>
                        <p>Selected Date: <strong>{dateRange || "Today"}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
