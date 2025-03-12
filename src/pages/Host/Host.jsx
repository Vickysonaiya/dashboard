// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoMain from '../../assets/images/1Pass_Logo.svg';
import './dashboard.css';

const Dashboard = () => {
    const [activeNavItem, setActiveNavItem] = useState(1);
    const [activeFooterItem, setActiveFooterItem] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const navigate = useNavigate(); // Hook for navigation

    const navItems = [
        { id: 1, title: 'Dashboard', icon: 'bi-grid', path: '/' },
        { id: 2, title: 'Visitors', icon: 'bi-person', path: '/visitors' },
        { id: 3, title: 'Invites', icon: 'bi-envelope', path: '/invites' },
        { id: 4, title: 'Check-ins', icon: 'bi-check-square', path: '/checkins' },
    ];

    const handleNavItemClick = (id, path) => {
        setActiveNavItem(id);
        setActiveFooterItem(null);
        navigate(path); // Navigate to the corresponding path
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Sidebar */}
            <div className="bg-dark text-white"
                style={{ width: sidebarVisible ? '250px' : '0px', transition: 'width 0.3s ease' }}>
                <div className="d-flex align-items-center p-3">
                    <img src={logoMain} alt='1/Pass' className="w-10 h-10" />
                    <div className="fs-5 fw-bold ms-3">1/Pass</div>
                </div>

                <ul className="nav flex-column">
                    {navItems.map(item => (
                        <li key={item.id} className="nav-item">
                            <a className={`nav-link ${activeNavItem === item.id ? 'active' : ''} d-flex align-items-center`}
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavItemClick(item.id, item.path);
                                }}>
                                <i className={`${item.icon} me-2`}></i>
                                <span>{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div style={{ marginLeft: sidebarVisible ? '250px' : '0px', flex: 1 }}>
                <header className="border-bottom d-flex justify-content-between align-items-center p-3">
                    <h1 className="h4 mb-0">Dashboard</h1>
                </header>

                <div className="container-fluid bg-light p-3">
                    <div className="bg-white rounded p-3 shadow-sm mb-4">
                        <h5 className="mb-3">Welcome to the Dashboard</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
