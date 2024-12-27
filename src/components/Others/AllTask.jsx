import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div  className='bg-[#1C1C1C] mt-5 p-6 rounded'>
      <div className='flex justify-between  mb-2 py-2 px-4 bg-[#2C2C2C] rounded text-[10px] sm:text-base items-center'>
        <h2 className='w-1/5 text-xs'>Employee Name</h2>
        <h2 className='w-1/5 text-center'>New Task</h2>
        <h2 className='w-1/5 text-center'>Active Task</h2>
        <h2 className='w-1/5 text-center'>Completed</h2>
        <h2 className='w-1/5 text-center'>Failed</h2>
      </div>
      <div id='tasks' className=''>
        {userData.employees.map((elem,index)=>{
          return <div key={index} className='border-2 border-emerald-500 mb-2 px-4 py-2 flex justify-between rounded text-[10px] md:text-[12px] sm:text-base items-center'>
              <h2 className='w-1/5'>{elem.firstName}</h2>
              <h2 className='w-1/5 text-center'>{elem.taskCounts.newTask}</h2>
              <h2 className='w-1/5 text-center'>{elem.taskCounts.active}</h2>
              <h2 className='w-1/5 text-center'>{elem.taskCounts.completed}</h2>
              <h2 className='w-1/5 text-center'>{elem.taskCounts.failed}</h2>
            </div>
        })}
      </div>
    </div>
  )
}

export default AllTask
