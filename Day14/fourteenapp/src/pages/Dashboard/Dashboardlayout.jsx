import React from 'react'

function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <nav>
        <Link to="analytics">Statistics</Link>
        <Link to="settings">Settings</Link>
      </nav>
    </div>
  )
}

export default DashboardLayout
