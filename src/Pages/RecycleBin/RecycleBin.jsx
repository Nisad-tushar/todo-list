import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete, MdRestore } from 'react-icons/md';
import { useDispatch } from 'react-redux/es/exports';
import { taskActions } from '../../store/taskSlice';
const RecycleBin = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(taskActions.deleteTask(id));
  };
  const addTask = (name, id) => {
    dispatch(taskActions.addTasks({ name, id }));
    dispatch(taskActions.deleteTask(id));
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      {' '}
      <h1 className="text-2xl text-cyan-300">Recycle Bin </h1>
      <div className="max-w-[70%] flex flex-col  justify-center items-center gap-2 rounded-sm">
        {tasks.map((alltask) => {
          return (
            <div
              key={alltask.id}
              className="w-full  sm:min-w-[20rem] min-w-[10rem] flex items-center justify-between bg-gradient-to-tr from-cyan-800 to-slate-900 p-2 border border-cyan-700 whitespace-pre-line break-words"
            >
              <p className="capitalize font-outfit text-cyan-50 tracking-wide ">
                {tasks.indexOf(alltask) + 1}{' '}
                <span className="ml-5">{alltask.name}</span>
              </p>
              <div className="flex gap-2">
                <MdRestore
                  onClick={() => addTask(alltask.name, alltask.id)}
                  className="text-green-500 text-2xl cursor-pointer hover:text-green-600 hover:animate-spin"
                />
                <MdDelete
                  onClick={() => deleteTask(alltask.id)}
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-600"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecycleBin;
