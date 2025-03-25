import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
    // State hooks for interactive elements
    const [dateRange, setDateRange] = useState('Today');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    // Mock data for statistics
    const stats = [
        { id: 1, title: 'Total Invites', count: 523, change: 8.2, increasing: true },
        { id: 2, title: 'Check-ins', count: 384, change: 5.3, increasing: true },
        { id: 3, title: 'Pending', count: 87, change: 2.1, increasing: false },
        { id: 4, title: 'Cancelled', count: 52, change: 3.7, increasing: true }
    ];

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
                                <select
                                    className="form-select"
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                >
                                    <option>All Units</option>
                                    
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0">
                                <select
                                    className="form-select"
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                >
                                    <option>All Desks</option>
                                    
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0 ms-134">
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
