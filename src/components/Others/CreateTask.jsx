import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [newTask, setNewTask] = useState({})

  const submitTask = (e) => {
    e.preventDefault();

    setNewTask({taskTitle, taskDate, category, taskDescription, active: false, newTask: true,failed: false , completed: false});

    const data = userData.employees;  

    data.forEach((elem)=>{
      if(elem.firstName === assignTo){
        elem.tasks.push(newTask);
        elem.taskCounts.newTask += 1;
        console.log(elem);
    }})
    // setTaskTitle('');
    // setTaskDate('');
    // setAssignTo('');
    // setCategory('');
    // setTaskDescription('');  
  }
  return (
    <div className="mt-5">
        <form onSubmit={submitTask} className="bg-[#1C1C1C] p-6 flex flex-col md:flex-row gap-3 md:gap-20 rounded md:justify-center md:items-start">
          <div className="flex flex-col gap-3 md:w-1/2">
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 text-lg">
                Task Title
              </h3>
              <input
                className="bg-transparent border-2 border-gray-400 w-full p-2 rounded-lg outline-none"
                type="text"
                placeholder="Make a UI Design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 text-lg">Date</h3>
              <input
                className="bg-transparent border-2 border-gray-400 w-full p-2 rounded-lg outline-none"
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 text-lg">
                Assign To
              </h3>
              <input
                className="bg-transparent border-2 border-gray-400 w-full p-2 rounded-lg outline-none"
                type="text"
                placeholder="Employee Name"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}  
              />
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 text-lg">
                Category
              </h3>
              <input
                className="bg-transparent border-2 border-gray-400 w-full p-2 rounded-lg outline-none"
                type="text"
                placeholder="Design, Development, etc..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-1/2">
            <div>
              <h3 className="text-gray-400 font-semibold mb-2 text-lg">
                Description
              </h3>
              <textarea
                className="bg-transparent border-2 border-gray-400 w-full p-2 rounded-lg outline-none"
                id=""
                rows="10"
                cols="30"
                type="textarea"
                placeholder="Detailed Diescription of task (Max 500 words)"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
            <button className="bg-emerald-600 w-full p-2 rounded-lg text-xl font-semibold py-2">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
