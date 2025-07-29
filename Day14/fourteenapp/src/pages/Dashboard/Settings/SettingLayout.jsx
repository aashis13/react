import React from 'react'
import {outlet, Link} from 'react-router-dom'

function SettingLayout() {
  return (
    <div>
      <h1>Settings</h1>
      <nav>
        <Link to="admin">User</Link>
        <Link to="account">Account</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default SettingLayout;