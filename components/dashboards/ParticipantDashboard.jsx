'use client';
import React from 'react';
import './ParticipantDashboard.css';
export default function ParticipantDashboard({ userId, role }) {
  return (
    <div className="participant-dashboard">
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <p className="welcome-text">Welcome back, {userId}!</p>
      </div>
      
      <div className="dashboard-content">
        <p>Loading your dashboard...</p>
      </div>
    </div>
  );
}