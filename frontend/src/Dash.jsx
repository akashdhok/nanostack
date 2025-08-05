import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import './css/Dashboard.css';

const Dash = () => {
  const [activeTab, setActiveTab] = useState('All');

  const meetingData = [
    {
      id: 1,
      date: '01 May, 2025 at 2pm',
      status: 'Completed',
      type: 'Online',
      buyerName: 'Mango Private Limited',
      brand: 'Mango',
      dept: 'Design',
      title: 'Costing Discussion with Zara',
      meetingDate: '01 May, 2025'
    },
    {
      id: 2,
      date: '02 May, 2025 at 3pm',
      status: 'Upcoming',
      type: 'Offline',
      buyerName: 'Cherry Innovations',
      brand: 'Cherry',
      dept: 'Development',
      title: 'UI/UX Review',
      meetingDate: '02 May, 2025'
    },
    {
      id: 3,
      date: '03 May, 2025 at 10am',
      status: 'Follow-up',
      type: 'Offline',
      buyerName: 'Pineapple Inc.',
      brand: 'Pineapple',
      dept: 'Marketing',
      title: 'Campaign Strategy',
      meetingDate: '03 May, 2025'
    },
    {
      id: 4,
      date: '04 May, 2025 at 1pm',
      status: 'Re-scheduled',
      type: 'Offline',
      buyerName: 'Peach Corp.',
      brand: 'Peach',
      dept: 'Finance',
      title: 'Budget Review',
      meetingDate: '04 May, 2025'
    },
    {
      id: 5,
      date: '05 May, 2025 at 4pm',
      status: 'Overdue',
      type: 'Online',
      buyerName: 'Banana Solutions',
      brand: 'Banana',
      dept: 'Product',
      title: 'Feature Prioritization',
      meetingDate: '05 May, 2025'
    },
    {
      id: 6,
      date: '06 May, 2025 at 11am',
      status: 'In Progress',
      type: 'Online',
      buyerName: 'Coconut Group',
      brand: 'Coconut',
      dept: 'Support',
      title: 'Customer Feedback',
      meetingDate: '06 May, 2025'
    },
    {
      id: 7,
      date: '07 May, 2025 at 2pm',
      status: 'Ongoing',
      type: 'Online',
      buyerName: 'Lemon Technologies',
      brand: 'Lemon',
      dept: 'Sales',
      title: 'Sales Strategy',
      meetingDate: '07 May, 2025'
    },
    {
      id: 8,
      date: '08 May, 2025 at 9am',
      status: 'Completed',
      type: 'Offline',
      buyerName: 'Grapefruit LLC',
      brand: 'Grapefruit',
      dept: 'Research',
      title: 'Market Analysis',
      meetingDate: '08 May, 2025'
    },
    {
      id: 9,
      date: '09 May, 2025 at 3pm',
      status: 'Draft',
      type: 'Offline',
      buyerName: 'Kiwi Systems',
      brand: 'Kiwi',
      dept: 'HR',
      title: 'Employee Engagement',
      meetingDate: '09 May, 2025'
    },
    {
      id: 10,
      date: '10 May, 2025 at 5pm',
      status: 'Archived',
      type: 'Offline',
      buyerName: 'Orange Enterprises',
      brand: 'Orange',
      dept: 'Legal',
      title: 'Contract Review',
      meetingDate: '10 May, 2025'
    }
  ];

  const getStatusClass = (status) => {
    const statusMap = {
      'Completed': 'status-completed',
      'Upcoming': 'status-upcoming',
      'Follow-up': 'status-follow-up',
      'Re-scheduled': 'status-rescheduled',
      'Overdue': 'status-overdue',
      'In Progress': 'status-in-progress',
      'Ongoing': 'status-ongoing',
      'Draft': 'status-draft',
      'Archived': 'status-archived'
    };
    return statusMap[status] || 'status-default';
  };

  const getTypeClass = (type) => {
    return type === 'Online' ? 'type-online' : 'type-offline';
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearchChange = (e) => {
    // Add search functionality here
    console.log('Search:', e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    // Add filter functionality here
    console.log(`Filter ${filterType}:`, value);
  };

  return (
    <div className="dashboard-container">
      {/* Header Tabs */}
      <div className="tab-container">
        <div 
          className={`tab ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => handleTabClick('All')}
        >
          All <span className="tab-count">100</span>
        </div>
        <div 
          className={`tab ${activeTab === 'Draft' ? 'active' : ''}`}
          onClick={() => handleTabClick('Draft')}
        >
          Draft <span className="tab-count">50</span>
        </div>
        <div 
          className={`tab ${activeTab === 'Archive' ? 'active' : ''}`}
          onClick={() => handleTabClick('Archive')}
        >
          Archive <span className="tab-count">75</span>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-container">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search anything here..."
            className="search-input"
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('buyerName', e.target.value)}
          >
            <option>Buyer Name</option>
            <option>Mango Private Limited</option>
            <option>Cherry Innovations</option>
            <option>Pineapple Inc.</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('brand', e.target.value)}
          >
            <option>Brand</option>
            <option>Mango</option>
            <option>Cherry</option>
            <option>Pineapple</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('dept', e.target.value)}
          >
            <option>Dept</option>
            <option>Design</option>
            <option>Development</option>
            <option>Marketing</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('meetingType', e.target.value)}
          >
            <option>Meeting Type</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('participants', e.target.value)}
          >
            <option>Participants</option>
            <option>1-5</option>
            <option>6-10</option>
            <option>10+</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('meetingDate', e.target.value)}
          >
            <option>Meeting Date</option>
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This Week</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>

        <div className="filter-group">
          <select 
            className="filter-select"
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option>Status</option>
            <option>Completed</option>
            <option>Upcoming</option>
            <option>Overdue</option>
          </select>
          <ChevronDown size={16} className="chevron" />
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="checkbox-column">
                <input type="checkbox" className="checkbox" />
              </th>
              <th className="header-cell">
                Date & Time <ArrowUpDown size={14} className="sort-icon" />
              </th>
              <th className="header-cell">
                Status <ArrowUpDown size={14} className="sort-icon" />
              </th>
              <th className="header-cell">
                Type <ArrowUp size={14} className="sort-icon" />
              </th>
              <th className="header-cell">
                Buyer Name <ArrowDown size={14} className="sort-icon" />
              </th>
              <th className="header-cell">
                Brand <ArrowDown size={14} className="sort-icon" />
              </th>
              <th className="header-cell">
                Dept. <ArrowDown size={14} className="sort-icon" />
              </th>
              <th className="header-cell">
                Title <ArrowUpDown size={14} className="sort-icon" />
              </th>
              <th className="header-cell">Meeting Date</th>
              <th className="header-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {meetingData.map((meeting) => (
              <tr key={meeting.id} className="table-row">
                <td className="checkbox-column">
                  <input type="checkbox" className="checkbox" />
                </td>
                <td className="table-cell">{meeting.date}</td>
                <td className="table-cell">
                  <span className={`status-badge ${getStatusClass(meeting.status)}`}>
                    {meeting.status}
                    {meeting.status === 'Follow-up' && (
                      <span className="followup-badge">⚠ 3</span>
                    )}
                    {meeting.status === 'In Progress' && (
                      <span className="progress-badge">🔄 (1/3)</span>
                    )}
                  </span>
                </td>
                <td className="table-cell">
                  <span className={`type-badge ${getTypeClass(meeting.type)}`}>
                    {meeting.type}
                  </span>
                </td>
                <td className="table-cell">
                  <span className="underlined-text">{meeting.buyerName}</span>
                </td>
                <td className="table-cell">
                  <span className="underlined-text">{meeting.brand}</span>
                </td>
                <td className="table-cell">
                  <span className="underlined-text">{meeting.dept}</span>
                </td>
                <td className="table-cell">
                  <span className="underlined-text">{meeting.title}</span>
                </td>
                <td className="table-cell">{meeting.meetingDate}</td>
                <td className="table-cell">
                  <MoreHorizontal size={16} className="action-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dash;