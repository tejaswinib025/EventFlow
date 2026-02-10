'use client';
import React from 'react';
import DashboardWidget from './shared/DashboardWidget';
import './ParticipantDashboard.css';
export default function ParticipantDashboard({ userId, role }) {
return (
  <div className="participant-dashboard">
    <div className="dashboard-header">
      <h1>My Dashboard</h1>
      <p className="welcome-text">Welcome back, {userId}!</p>
    </div>
    <div className="dashboard-grid">
      <DashboardWidget title="My Events">
        <div className="widget-stats">
          <p><strong>Registered Events:</strong> <span>[Placeholder]</span></p>
          <p><strong>Attended:</strong> <span>[Placeholder]</span></p>
          <p><strong>Upcoming:</strong> <span>[Placeholder]</span></p>
        </div>
      </DashboardWidget>
      <DashboardWidget title="My Schedule">
        <div className="widget-stats">
          <p><strong>Today's Events:</strong> <span>[Placeholder]</span></p>
          <p><strong>This Week:</strong> <span>[Placeholder]</span></p>
          <p><strong>Next Event:</strong> <span>[Placeholder]</span></p>
        </div>
      </DashboardWidget>
      <DashboardWidget title="Notifications">
        <div className="notification-list">
          <p className="notification-item">• New event available [Placeholder]</p>
          <p className="notification-item">• Event reminder [Placeholder]</p>
          <p className="notification-item">• Schedule updated [Placeholder]</p>
        </div>
      </DashboardWidget>
      <DashboardWidget title="Quick Actions">
        <div className="action-buttons">
          <button className="action-btn">Browse Events</button>
          <button className="action-btn">View Schedule</button>
          <button className="action-btn">My Profile</button>
        </div>
      </DashboardWidget>
    </div>
  </div>
  );
}