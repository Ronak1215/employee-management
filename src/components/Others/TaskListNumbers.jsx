import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className="mt-10 flex justify-between gap-5 ">
      <div className="w-full flex md:justify-between gap-5">
        <div className="md:w-[100%] justify-between py-3 px-6 bg-red-400 rounded-xl">
          <h2 className="md:text-3xl font-semibold">{data.taskCounts.failed}</h2>
          <h3 className="md:text-xl font-medium">Failed Task</h3>
        </div>
        <div className="md:w-[100%] justify-between py-3 px-6 bg-blue-400 rounded-xl mt-5 md:mt-0">
          <h2 className="md:text-3xl font-semibold">{data.taskCounts.newTask}</h2>
          <h3 className="md:text-xl font-medium">New Task</h3>
        </div>
      </div>
      <div className="w-full md:flex md:justify-between gap-5">
        <div className="md:w-[100%] justify-between py-3 px-6 bg-green-400 rounded-xl">
          <h2 className="md:text-3xl font-semibold">{data.taskCounts.completed}</h2>
          <h3 className="text-sm md:text-xl font-medium">Completed Task</h3>
        </div>
        <div className="md:w-[100%] justify-between py-3 px-6 bg-yellow-400 rounded-xl mt-5 md:mt-0">
          <h2 className="md:text-3xl font-semibold text-black">{data.taskCounts.active}</h2>
          <h3 className="md:text-xl font-medium text-black">Accepted Task</h3>
        </div>
      </div>
      
    </div>
  );
};

export default TaskListNumbers;
