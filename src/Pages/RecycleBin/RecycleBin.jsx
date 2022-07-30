import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux/es/exports';
import taskSlice, { taskActions } from '../../store/taskSlice';
const RecycleBin = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(taskActions.deleteTask(id));
  };
  return (
    <div className="w-full flex items-center justify-center">
      {' '}
      <div className="max-w-[70%] flex flex-col  justify-center items-center gap-2 rounded-sm">
        {tasks.map((alltask) => {
          return (
            <div
              key={alltask.id}
              className="w-full   flex items-center justify-between bg-gradient-to-tr from-cyan-800 to-slate-900 p-2 border border-cyan-700 whitespace-pre-line break-words"
            >
              <p className="capitalize font-outfit text-cyan-50 tracking-wide ">
                {tasks.indexOf(alltask) + 1} {alltask.name}
              </p>
              <MdDelete
                onClick={() => deleteTask(alltask.id)}
                className="text-red-500 text-2xl cursor-pointer hover:text-red-600"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecycleBin;
