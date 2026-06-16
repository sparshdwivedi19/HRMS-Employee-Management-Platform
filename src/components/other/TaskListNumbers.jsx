import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className=' flex justify-between gap-5 mt-10 screen'>
      <div className='w-[45%] rounded-xl px-9 py-6 bg-red-400'>
        <h2 className='text-3xl font-medium'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-semibold '>New Task</h3>
      </div>
      <div className=' w-[45%] rounded-xl px-9 py-6 bg-blue-400'>
        <h2 className='text-3xl font-medium'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-semibold '>Active</h3>
      </div>
      <div className=' w-[45%] rounded-xl px-9 py-6 bg-green-400'>
        <h2 className='text-3xl font-medium'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-semibold '>Completed</h3>
      </div>
      <div className=' w-[45%] rounded-xl px-9 py-6 bg-yellow-400'>
        <h2 className='text-3xl font-medium'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-semibold '>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
