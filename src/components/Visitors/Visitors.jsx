import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Visitors = () => {
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedDesk, setSelectedDesk] = useState('');
    const [dateRange, setDateRange] = useState('Today');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const stats = [
        { id: 1, title: 'Total Invites', count: 523, change: 8.2, increasing: true },
        { id: 2, title: 'Check-ins', count: 384, change: 5.3, increasing: true },
        { id: 3, title: 'Pending', count: 87, change: 2.1, increasing: false },
        { id: 4, title: 'Cancelled', count: 52, change: 3.7, increasing: true }
    ];

    const units = ['Unit A', 'Unit B', 'Unit C'];
    const desks = {
        'Unit A': ['Desk 1A', 'Desk 2A', 'Desk 3A'],
        'Unit B': ['Desk 1B', 'Desk 2B', 'Desk 3B'],
        'Unit C': ['Desk 1C', 'Desk 2C', 'Desk 3C'],
    };

    const handleUnitChange = (e) => {
        const selected = e.target.value;
        setSelectedUnit(selected);
        setSelectedDesk(desks[selected]?.[0] || '');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Main Content */}
            <div
                style={{
                    marginLeft: sidebarVisible ? '250px' : '0px',
                    flex: 1,
                    transition: 'margin-left 0.3s ease',
                    width: '100%'
                }}
            >
                {/* Main Dashboard Area */}
                <div className="container-fluid bg-light p-3">
                    {/* Filters */}
                    <div className="bg-white rounded p-3 shadow-sm mb-4">
                        <div className="row mb-3 align-items-end">
                            <div className="col-md-2 mb-2 mb-md-0">
                                <select className="form-select" value={selectedUnit} onChange={handleUnitChange}>
                                    <option value="">All Units</option>
                                    {units.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0">
                                <select className="form-select" value={selectedDesk} onChange={(e) => setSelectedDesk(e.target.value)}>
                                    <option value="">All Desks</option>
                                    {desks[selectedUnit]?.map((desk) => (
                                        <option key={desk} value={desk}>
                                            {desk}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0 ms-132">
                                <select
                                    className="form-select"
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                >
                                    <option>Today</option>
                                    <option>Yesterday</option>
                                    <option>This Week</option>
                                    <option>Last Month</option>
                                    <option>This Month</option>
                                    <option>Last Month</option>
                                    <option>Custom Range</option>
                                </select>
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
                                    <div
                                        className="small"
                                        style={{ color: stat.increasing ? '#28a745' : '#dc3545' }}
                                    >
                                        <i className={`bi bi-arrow-${stat.increasing ? 'up' : 'down'}`}></i> {stat.change}% vs last week
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent */}
                    <div className="bg-white rounded p-3 shadow-sm">
                        <h5 className="mb-3">Recent</h5>
                        {/* Recent content would go here */}
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

export default Visitors;
