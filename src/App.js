import React, { useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="flex">
      {isSidebar && (
        <Sidebar />
      )}
      <div className={`flex-1 ${isSidebar ? '' : 'ml-0'}`}>
        <Navbar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      </div>
    </div>
  );
}

export default App;
