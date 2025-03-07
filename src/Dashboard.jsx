import React, { useState } from 'react';
import logoMain from '../src/assets/images/1Pass_Logo.svg'

const Dashboard = () => {
    // State for filters
    const [selectedProperty, setSelectedProperty] = useState('All Properties');
    const [dateRange, setDateRange] = useState('This Week');
    const [activeTab, setActiveTab] = useState('All');

    // Mock data for stats
    const stats = {
        totalInvites: { count: 523, change: 8.2, increasing: true },
        checkIns: { count: 384, change: 5.3, increasing: true },
        pending: { count: 87, change: 2.1, increasing: false },
        cancelled: { count: 52, change: 3.7, increasing: true }
    };

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded"><img src={logoMain} /></div>
                    <div className="ml-2 text-xl font-bold">1/Pass</div>
                </div>

                <nav className="flex-1">
                    <div className="px-4 py-3 bg-gray-700">
                        <div className="flex items-center">
                            <span className="mr-2">☐</span>
                            <span>Dashboard</span>
                        </div>
                    </div>

                    {['Visitors', 'Invites', 'Check-ins', 'Properties', 'Reports'].map(item => (
                        <div key={item} className="px-4 py-3 hover:bg-gray-700">
                            <div className="flex items-center">
                                <span className="mr-2">☐</span>
                                <span>{item}</span>
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="mt-auto">
                    {['Settings', 'Help & Support', 'Logout'].map(item => (
                        <div key={item} className="px-4 py-3 hover:bg-gray-700">
                            <div className="flex items-center">
                                <span className="mr-2">☐</span>
                                <span>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="border-b p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-2">☐</span>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                    </div>

                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <span className="absolute right-0 top-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                            <span>☐</span>
                        </div>
                        <span className="mx-2">☐</span>
                        <span className="mx-2">☐</span>
                        <div className="flex items-center ml-2">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">JD</div>
                            <div className="ml-2">
                                <div className="text-sm font-medium">John Doe</div>
                                <div className="text-xs text-gray-500">Campus Admin</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Area */}
                <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
                    {/* Filters */}
                    <div className="bg-white p-4 rounded shadow mb-4">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="flex flex-wrap items-center gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Select Property</label>
                                    <select
                                        className="border p-2 rounded w-64"
                                        value={selectedProperty}
                                        onChange={(e) => setSelectedProperty(e.target.value)}
                                    >
                                        <option>All Properties</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm mb-1">Date Range</label>
                                    <select
                                        className="border p-2 rounded w-64"
                                        value={dateRange}
                                        onChange={(e) => setDateRange(e.target.value)}
                                    >
                                        <option>This Week</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border p-2 rounded w-64"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                {['All', 'Pending', 'Checked-in', 'Cancelled', 'Expired'].map(tab => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-gray-800 text-white' : 'bg-white border'}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-2 mt-4 md:mt-0">
                                <button className="border px-4 py-2 rounded flex items-center">
                                    <span className="mr-2">☐</span> Filter
                                </button>
                                <button className="border px-4 py-2 rounded flex items-center">
                                    <span className="mr-2">☐</span> Sort
                                </button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
                                    <span className="mr-2">+</span> New Invite
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {Object.entries(stats).map(([key, data]) => {
                            const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                            return (
                                <div key={key} className="bg-white p-4 rounded shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-gray-600">{title}</h3>
                                        <span>☐</span>
                                    </div>
                                    <div className="text-3xl font-bold mb-2">{data.count}</div>
                                    <div className={`text-sm ${data.increasing ? 'text-green-500' : 'text-red-500'}`}>
                                        <span>{data.increasing ? '↑' : '↓'} {data.change}% vs last week</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Recent Section */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-4">Recent</h3>
                        {/* Add your recent items here */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;