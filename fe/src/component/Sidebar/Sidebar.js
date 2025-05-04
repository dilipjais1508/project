import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <label><input type="checkbox" /> CUSTOMIZABLE</label>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">IDEAL FOR</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">OCCASION</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">WORK</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">FABRIC</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">SEGMENT</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">SUITABLE FOR</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">RAW MATERIALS</div>
        <div className="sidebar-option">All</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-title">PATTERN</div>
        <div className="sidebar-option">All</div>
      </div>
    </div>
  );
};

export default Sidebar; 