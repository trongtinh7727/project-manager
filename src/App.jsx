import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { fetchCurrentUser } from './redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from "./pages/dashboard";
import AuthPage from "./pages/auth";
import AppSidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";


export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, error } = useSelector((state) => state.auth);

  const [isSidebar, setIsSidebar] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(fetchCurrentUser());
    }
    else {
      navigate('/login');
    }
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      navigate('/login');
    }
  }, [error, navigate]);



  useEffect(() => {
    if ((location.pathname === '/login' || location.pathname === '/register') && user) {
      navigate('/');
    }
    setIsSidebar(location.pathname !== '/login' && location.pathname !== '/register');
  }, [location.pathname, user, navigate]);

  return (
    <div className="app">
      {isSidebar && <AppSidebar />}
      <main className="content">
        {isSidebar && <Topbar setIsSidebar={setIsSidebar} />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
        </Routes>
      </main>
    </div>
  );
}
