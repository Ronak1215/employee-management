import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const TaskListNumbers = ({ data }) => {
  const [userData] = useContext(AuthContext)
  const [counts, setCounts] = useState(data.taskCounts)

  useEffect(() => {
    if (userData) {
      const currentEmployee = userData.find(emp => emp.id === data.id)
      if (currentEmployee) {
        setCounts(currentEmployee.taskCounts)
      }
    }
  }, [userData, data.id])

  return (
    <div className='flex screen mt-10 overflow-x-auto gap-5'>
      <div className='md:flex w-full gap-5'>
        <div className='rounded-xl py-3 px-6 p-10 w-full bg-blue-400'>
          <h2 className='text-2xl font-semibold'>{counts.newTask}</h2>
          <h3 className='sm:text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-3 px-6 p-10 w-full mt-5 md:mt-0 bg-green-400'>
          <h2 className='text-2xl font-semibold'>{counts.completed}</h2>
          <h3 className='text-[14px] sm:text-xl font-medium'>Completed Task</h3>
        </div>
      </div>
      <div className='md:flex w-full gap-5'>
        <div className='rounded-xl py-3 px-6 p-10 w-full bg-yellow-300'>
          <h2 className='text-2xl text-black font-semibold'>{counts.active}</h2>
          <h3 className='sm:ext-xl font-medium text-black'>Active Task</h3>
        </div>
        <div className='rounded-xl py-3 px-6 p-10 w-full mt-5 md:mt-0 bg-red-400'>
          <h2 className='text-2xl font-semibold'>{counts.failed}</h2>
          <h3 className='sm:text-xl font-medium'>Failed Task</h3>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumbers