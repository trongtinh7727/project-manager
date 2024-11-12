import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { fetchCurrentUser, logout  } from './redux/slices/authSlice';
import { fetchWorkspaces } from './redux/slices/workspaceSlice';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from "./pages/dashboard";
import AuthPage from "./pages/auth";
import AppSidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";

import WorkspaceDetail from './pages/workspace/Workspace';


export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, error } = useSelector((state) => state.auth);
  const { workspaces } = useSelector((state) => state.workspace);
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('accessToken', token);
      dispatch(fetchCurrentUser());
      navigate('/');
    }
  }, [location, dispatch, navigate]);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchWorkspaces(user.id));
    }
  }, [user, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="app">
      {isSidebar && <AppSidebar workspaces={workspaces} />}
      <main className="content">
        {isSidebar && <Topbar setIsSidebar={setIsSidebar} onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/workspace/:id" element={<WorkspaceDetail />} />
        </Routes>
      </main>
    </div>
  );
}
