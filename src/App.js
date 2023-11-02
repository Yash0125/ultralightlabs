import React, { useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import Stages from "./components/Stages";
import General from "./components/General";
import Activity from "./components/Activity";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="flex">
      {isSidebar && (
        <Sidebar />
      )}
      <div className={`flex-1 ${isSidebar ? '' : 'ml-0'}`}>
        <Navbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        <div className="lg:flex content">
          <div className="lg:w-2/3">
            <Stages />
          </div>
          <div className="lg:w-1/3">
            <div className="right-side">
              <General />
              <Activity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
