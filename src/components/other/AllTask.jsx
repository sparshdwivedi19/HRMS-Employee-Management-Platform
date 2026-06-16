import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

 const authData = useContext(AuthContext)
  
  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 mt-5   rounded'>

      <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 bg-red-600'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 bg-red-600'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 bg-red-600'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 bg-red-600'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 bg-red-600'>Failed</h5>
      </div>

     <div className=' '>
      
      {authData.employees.map(function(elem,idx){

        return  <div key={idx} className='bg-black-400 py-2 px-4 mb-2 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>{elem.name}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskCount.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-gray-200'>{elem.taskCount.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed }</h5>
      </div>
      })}
     </div>

    </div>
  )
}

export default AllTask
