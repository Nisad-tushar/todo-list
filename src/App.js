import Home from './Pages/Home/Home';
import RecycleBin from './Pages/RecycleBin/RecycleBin';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-slate-800 to-slate-900">
      <h1 className="text-3xl text-center font-outfit bg-gradient-to-r from-cyan-300 to-cyan-400  text-slate-800 font-semibold p-2 rounded-md inline ring-2 ring-slate-500 ">
        Daily Task Planner
      </h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recyclebin" element={<RecycleBin />} />
      </Routes>
    </div>
  );
}

export default App;
