import React from 'react';
import AddTasks from '../../components/AddTasks/AddTasks';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-slate-800 to-slate-900 flex flex-col items-center gap-5">
      <AddTasks />
    </div>
  );
};

export default Home;
