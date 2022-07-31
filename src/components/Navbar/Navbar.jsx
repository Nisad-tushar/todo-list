import React from 'react';
import { ImBin } from 'react-icons/im';
import { AiOutlineHome } from 'react-icons/ai';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const addedTasks = useSelector((state) => state.tasks.addedTasks);
  return (
    <div className="flex items-center gap-4 mb-10">
      <NavLink
        to={'/recyclebin'}
        className="flex flex-col items-center gap-1 hover:bg-gray-600 bg-opacity-50 cursor-pointer p-1 rounded-md"
      >
        <p className=" text-red-500 text-2xl text-semibold ">{tasks?.length}</p>
        <ImBin className="text-cyan-300 text-3xl" />
        <p className="text-red-500 font-outfit font-semibold tracking-wide">
          Recycle Bin
        </p>
      </NavLink>{' '}
      <NavLink
        to={'/'}
        className="flex flex-col items-center gap-1 hover:bg-gray-600 bg-opacity-50 cursor-pointer p-1 rounded-md px-5"
      >
        {' '}
        <p className=" text-red-500 text-2xl text-semibold ">
          {addedTasks.length}
        </p>
        <AiOutlineHome className="text-cyan-300 text-3xl" />
        <p className="text-cyan-400 font-outfit font-semibold tracking-widest">
          Tasks
        </p>
      </NavLink>
    </div>
  );
};

export default Navbar;
