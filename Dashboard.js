import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

export default function Dashboard({ token }) {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>Token: {token}</p>
    </div>
  );
}

Dashboard.propTypes = {
  token: PropTypes.string.isRequired
};