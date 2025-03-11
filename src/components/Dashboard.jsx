import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoMain from '../assets/images/1Pass_Logo.svg'
import './dashboard.css'

const Dashboard = () => {
    // State hooks for interactive elements
    const [selectedProperty, setSelectedProperty] = useState('All Properties');
    const [dateRange, setDateRange] = useState('Today');
    const [activeTab, setActiveTab] = useState('All');
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeNavItem, setActiveNavItem] = useState(1);
    const [activeFooterItem, setActiveFooterItem] = useState(null);

    // Mock data for statistics
    const stats = [
        { id: 1, title: 'Total Invites', count: 523, change: 8.2, increasing: true },
        { id: 2, title: 'Check-ins', count: 384, change: 5.3, increasing: true },
        { id: 3, title: 'Pending', count: 87, change: 2.1, increasing: false },
        { id: 4, title: 'Cancelled', count: 52, change: 3.7, increasing: true }
    ];

    // Navigation items
    const navItems = [
        { id: 1, title: 'Dashboard', icon: 'bi-grid' },
        { id: 2, title: 'Visitors', icon: 'bi-person' },
        { id: 3, title: 'Invites', icon: 'bi-envelope' },
        { id: 4, title: 'Check-ins', icon: 'bi-check-square' },
    ];

    // Footer navigation items
    const footerNavItems = [
        { id: 1, title: 'Settings', icon: 'bi-gear' },
        { id: 2, title: 'Help & Support', icon: 'bi-question-circle' },
        { id: 3, title: 'Logout', icon: 'bi-box-arrow-right' }
    ];

    // Status tabs
    const statusTabs = ['All', 'Pending', 'Checked-in', 'Cancelled', 'Expired'];

    const handleNavItemClick = (id) => {
        setActiveNavItem(id);
        setActiveFooterItem(null);
    };

    const handleFooterItemClick = (id) => {
        setActiveFooterItem(id);
        setActiveNavItem(null);
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Sidebar */}
            <div
                className="bg-dark text-white"
                style={{
                    width: sidebarVisible ? '250px' : '0px',
                    minHeight: '100vh',
                    position: 'fixed',
                    transition: 'width 0.3s ease',
                    zIndex: 1000,
                    backgroundColor: '#1e3a38'
                }}
            >
                {/* Logo */}
                <div className="d-flex align-items-center p-3">
                    <div className="w-10 h-10 bg-gray-300 rounded"><img src={logoMain} alt='1/Pass' /></div>
                    <div className="fs-5 fw-bold ms-3">1/Pass</div>
                </div>

                {/* Navigation Menu */}
                <div>
                <ul className="nav flex-column ">
                    {navItems.map(item => (
                        <li key={item.id} className="nav-item">
                            <a
                                className={`nav-link ${activeNavItem === item.id ? 'active' : ''} d-flex align-items-center`}
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavItemClick(item.id);
                                }}
                                style={{
                                    backgroundColor: activeNavItem === item.id ? '#2c5451' : 'transparent',
                                    color: '#fff',
                                    padding: '0.8rem 1rem'
                                }}
                            >
                                <i className={`${item.icon} me-2`}></i>
                                <span>{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
                

                {/* Footer Navigation */}
                <div className="mt-auto navHeight">
                    <ul className="nav flex-column">
                        {footerNavItems.map(item => (
                            <li key={item.id} className="nav-item">
                                <a
                                    className="nav-link d-flex align-items-center"
                                    href="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleFooterItemClick(item.id);
                                    }}
                                    style={{
                                        backgroundColor: activeFooterItem === item.id ? '#2c5451' : 'transparent',
                                        color: '#fff',
                                        padding: '0.8rem 1rem'
                                    }}
                                >
                                    <i className={`${item.icon} me-2`}></i>
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            

            {/* Main Content */}
            <div
                style={{
                    marginLeft: sidebarVisible ? '250px' : '0px',
                    flex: 1,
                    transition: 'margin-left 0.3s ease',
                    width: '100%'
                }}
            >
                {/* Header */}
                <header className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex align-items-center">
                        <button
                            className="btn d-md-none me-2"
                            onClick={() => setSidebarVisible(!sidebarVisible)}
                        >
                            <i className="bi bi-list"></i>
                        </button>
                        <i className="bi bi-grid me-2"></i>
                        <h1 className="h4 mb-0">Dashboard</h1>
                    </div>

                    <div className="col-md-3 ms-11">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                            </div>

                    <div className="d-flex align-items-center">
                        <div className="position-relative me-3 badges">
                            <i className="bi bi-bell fs-5"></i>
                            <span
                                className="badge rounded-pill bg-danger"
                                style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px'
                                }}
                            >3</span>
                        </div>
                        <div className='badges'><span><i className="bi bi-gear fs-5 me-3"></i></span></div>
                        <div className='badges'><span><i className="bi bi-question-circle fs-5 me-3"></i></span></div>

                        <div className="d-flex align-items-center">
                            <div className='badges'
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1e3a38',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '8px',
                                    fontWeight: 'bold'
                                }}
                            >JD</div>
                            <div>
                                <div className="fw-medium badges">John Doe</div>
                                <div className="small text-muted badges">Campus Admin</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Area */}
                <div className="container-fluid bg-light p-3">
                    {/* Filters */}
                    <div className="bg-white rounded p-3 shadow-sm mb-4">
                        <div className="row mb-3 align-items-end">
                            <div className="col-md-2 mb-2 mb-md-0">
                                <label className="form-label">Select Property</label>
                                <select
                                    className="form-select"
                                    value={selectedProperty}
                                    onChange={(e) => setSelectedProperty(e.target.value)}
                                >
                                    <option>All Properties</option>
                                    <option>Building A</option>
                                    <option>Building B</option>
                                    <option>Building C</option>
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0">
                                <label className="form-label">Unit</label>
                                <select
                                    className="form-select"
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                >
                                    <option>All Unit</option>
                                    
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0">
                                <label className="form-label">Desk</label>
                                <select
                                    className="form-select"
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value)}
                                >
                                    <option>All Desk</option>
                                    
                                </select>
                            </div>
                            <div className="col-md-2 mb-2 mb-md-0 ms-89">
                                <label className="form-label">Date Range</label>
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
                            {/* <div className="col-md-3 ms-112">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="bi bi-search"></i>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                            </div> */}
                        </div>

                        <div className="row align-items-center">
                            <div className="col-md-7 mb-2 mb-md-0">
                                <div className="d-flex flex-wrap">
                                    {statusTabs.map(tab => (
                                        <div
                                            key={tab}
                                            className={`py-2 px-3 rounded me-2 mb-2 mb-md-0 cursor-pointer ${activeTab === tab ? 'bg-dark text-white' : 'border'}`}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="d-flex flex-wrap justify-content-md-end">
                                    <button className="btn btn-outline-secondary me-2 mb-2 mb-md-0">
                                        <i className="bi bi-funnel me-1"></i> Filter
                                    </button>
                                    <button className="btn btn-outline-secondary me-2 mb-2 mb-md-0">
                                        <i className="bi bi-sort-down me-1"></i> Sort
                                    </button>
                                    <button className="btn btn-dark">
                                        <i className="bi bi-plus me-1"></i> New Invite
                                    </button>
                                </div>
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
