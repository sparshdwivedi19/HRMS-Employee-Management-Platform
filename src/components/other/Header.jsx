import React from 'react'

const Header = ({ data }) => {
  const name = data && data.name ? data.name : (() => {
    try {
      const logged = localStorage.getItem('loggedInUser')
      if (logged) {
        const parsed = JSON.parse(logged)
        if (parsed.role === 'employee' && parsed.data && parsed.data.name) return parsed.data.name
      }
    } catch (e) {}
    return 'Admin'
  })()

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{name}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
 