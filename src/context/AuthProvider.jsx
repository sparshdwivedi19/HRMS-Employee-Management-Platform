import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [userData , setUserData] = useState({ employees: [], admin: [] })

  const loadLocalData = () => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }

  const syncLoggedInUser = (updatedEmployees) => {
    try {
      const logged = localStorage.getItem('loggedInUser')
      if (!logged) return
      const parsed = JSON.parse(logged)
      if (parsed.role === 'employee' && parsed.data?.email) {
        const employee = updatedEmployees.find((e) => e.email === parsed.data.email)
        if (employee) {
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        }
      }
    } catch (e) {
      // ignore parse errors
    }
  }

  const updateEmployeeTask = (employeeId, taskIndex, action) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = employees.find((item) => item.id === employeeId)
    if (!employee || employee.tasks.length <= taskIndex) return

    const task = employee.tasks[taskIndex]
    const counts = employee.taskCount
    const oldStatus = {
      newTask: task.newTask,
      active: task.active,
      completed: task.completed,
      failed: task.failed,
    }

    const resetStatus = () => {
      task.newTask = false
      task.active = false
      task.completed = false
      task.failed = false
    }

    const decrementOld = () => {
      if (oldStatus.newTask) counts.newTask = Math.max(0, counts.newTask - 1)
      if (oldStatus.active) counts.active = Math.max(0, counts.active - 1)
      if (oldStatus.completed) counts.completed = Math.max(0, counts.completed - 1)
      if (oldStatus.failed) counts.failed = Math.max(0, counts.failed - 1)
    }

    decrementOld()
    resetStatus()

    if (action === 'accepted') {
      task.active = true
      counts.active += 1
    } else if (action === 'completed') {
      task.completed = true
      counts.completed += 1
    } else if (action === 'failed') {
      task.failed = true
      counts.failed += 1
    }

    localStorage.setItem('employees', JSON.stringify(employees))
    syncLoggedInUser(employees)
    setUserData({ employees, admin: userData.admin })
  }

  useEffect(() => {
    setLocalStorage()
    loadLocalData()
  }, [])

  return (
    <div>
      <AuthContext.Provider value={{ ...userData, updateEmployeeTask }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
