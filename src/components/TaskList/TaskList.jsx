import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex justify-start items-center gap-5 flex-nowrap mt-3 py-5 w-full'>
      {data.tasks.map((elem , idx)=>{
        if(elem.active)
        {
          return <AcceptTask key={idx} data={elem} employeeId={data.id} taskIndex={idx} />
        }
        if(elem.newTask)
        {
         return <NewTask key={idx} data={elem} employeeId={data.id} taskIndex={idx} />
        }
        if(elem.completed)
        {
         return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed)
        {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
