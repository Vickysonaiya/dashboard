import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedDesk, setSelectedDesk] = useState('');
    const [dateRange, setDateRange] = useState('Today');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    // Define units and desks mapping
    const units = ['Unit A', 'Unit B', 'Unit C'];
    const desks = {
        'Unit A': ['Desk 1A', 'Desk 2A', 'Desk 3A'],
        'Unit B': ['Desk 1B', 'Desk 2B', 'Desk 3B'],
        'Unit C': ['Desk 1C', 'Desk 2C', 'Desk 3C'],
    };

    // Handle unit selection
    const handleUnitChange = (e) => {
        const selected = e.target.value;
        setSelectedUnit(selected);
        
        // Auto-select the first available desk for the chosen unit
        setSelectedDesk(desks[selected]?.[0] || '');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Main Content */}
            <div style={{ marginLeft: sidebarVisible ? '250px' : '0px', flex: 1, transition: 'margin-left 0.3s ease' }}>
                <div className="container-fluid bg-light p-3">
                    {/* Filters */}
                    <div className="bg-white rounded p-3 shadow-sm mb-4">
                        <div className="row mb-3 align-items-end">
                            {/* Unit Selection */}
                            <div className="col-md-4">
                                <label className="form-label">Select Unit</label>
                                <select className="form-select" value={selectedUnit} onChange={handleUnitChange}>
                                    <option value="">All Units</option>
                                    {units.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Desk Selection (auto-updated) */}
                            <div className="col-md-4">
                                <label className="form-label">Select Desk</label>
                                <select className="form-select" value={selectedDesk} onChange={(e) => setSelectedDesk(e.target.value)}>
                                    <option value="">All Desks</option>
                                    {desks[selectedUnit]?.map((desk) => (
                                        <option key={desk} value={desk}>
                                            {desk}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Date Range Selection */}
                            <div className="col-md-4">
                                <label className="form-label">Date Range</label>
                                <select className="form-select" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                                    <option>Today</option>
                                    <option>Yesterday</option>
                                    <option>This Week</option>
                                    <option>Last Month</option>
                                    <option>This Month</option>
                                    <option>Custom Range</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
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
