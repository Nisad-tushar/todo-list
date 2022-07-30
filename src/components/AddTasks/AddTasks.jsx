import React, { useEffect, useState } from 'react';
import { MdTaskAlt, MdDelete } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import '../AddTask.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { taskActions } from '../../store/taskSlice';
const AddTasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);
  const [task, setTask] = useState('');
  const [field, setField] = useState(false);
  const [msg, setMsg] = useState('');
  const check = JSON.parse(localStorage.getItem('tasks')) || [];
  const [allTasks, setAllTasks] = useState(check);
  console.log(check);
  const dispatch = useDispatch();
  const taskHandler = (e) => {
    e.preventDefault();
    if (!task) {
      setField(true);
      setMsg('Sorry. Doing nothing , is not a task. Please add a real task.');
    } else {
      setAllTasks([...allTasks, { id: Math.random(), name: task }]);
      setTask('');
    }
  };

  useEffect(() => {
    task.length > 0 && setField(false);
  }, [task.length]);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);
  console.log(allTasks);
  const addTaskToRecycle = (id, name) => {
    dispatch(taskActions.addTasksToRecycle({ id, name }));
    setAllTasks(allTasks.filter((allTask) => allTask.id !== id));
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col">
        <div className=" relative">
          <form className="flex items-center gap-5">
            {' '}
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="h-[2rem] outline-none rounded-sm bg-slate-700 border border-teal-400  shadow-md shadow-teal-400 caret-teal-300 pl-2 text-cyan-200 tracking-wide"
            />
            <button
              onClick={taskHandler}
              className="taskButton relative group before:content-['Add_Task'] before:font-sans h-[2rem] w-[5rem] bg-gradient-to-tr from-teal-400 to-teal-500 font-outfit font-semibold tracking-wide p-1 cursor-pointer rounded-sm"
            >
              <p className="w-full h-full">
                <MdTaskAlt className="group-hover:w-full  group-hover:text-2xl text-center w-0  absolute " />
              </p>
            </button>
          </form>
          {field && (
            <p className=" absolute mt-2 text-red-600 font-outfit tracking-wide">
              {msg}
            </p>
          )}
        </div>
        <div className="w-full flex  flex-col items-center justify-center mt-5">
          <h1 className="text-center text-cyan-400 font-outfit md:text-4xl text-2xl">
            Tasks To Complete
          </h1>
          <div className="max-w-[70%]  flex flex-col items-center justify-center gap-2 rounded-sm">
            {allTasks.map((alltask) => {
              return (
                <div
                  key={alltask.id}
                  className="w-full   flex items-center justify-between bg-gradient-to-tr from-cyan-800 to-slate-900 p-2 border border-cyan-700 whitespace-pre-line break-words"
                >
                  <p className="capitalize font-outfit text-cyan-50 tracking-wide ">
                    {allTasks.indexOf(alltask) + 1} {alltask.name}
                  </p>
                  <TiDeleteOutline
                    onClick={() => addTaskToRecycle(alltask.id, alltask.name)}
                    className="text-red-500 text-3xl cursor-pointer hover:text-red-600"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
