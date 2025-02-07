import React from 'react'
import { logout } from '../AUTH SERVICE/Logindetails'

const Logout = () => {
    const handlelogout = async()=> {
        await logout()
        alert('Logged out successfully!')
    }
  return (
    <div>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout