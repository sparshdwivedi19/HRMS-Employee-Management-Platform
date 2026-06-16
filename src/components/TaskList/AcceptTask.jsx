import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, employeeId, taskIndex }) => {
  const { updateEmployeeTask } = useContext(AuthContext)

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
        <h4 className='text-base'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm'>
        {data.taskDescription}
      </p>
      <div className='flex justify-between mt-4'>
        <button
          onClick={() => updateEmployeeTask(employeeId, taskIndex, 'completed')}
          className='bg-green-500 py-1 px-2 text-sm'
        >
          Mark as Completed
        </button>
        <button
          onClick={() => updateEmployeeTask(employeeId, taskIndex, 'failed')}
          className='bg-red-500 py-1 px-2 text-sm'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}
 
export default AcceptTask
