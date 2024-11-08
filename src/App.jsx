import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AppSidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import { useState } from "react";

export default function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
      <AppSidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
