import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { PlansPage } from './pages/PlansPage';
import { PrivateRoute } from './components/PrivateRoute';
import { useDarkMode } from './hooks/useDarkMode';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useDarkMode();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          ) : (
            <Layout isDark={isDark} toggleDarkMode={toggleDarkMode}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/plans" element={<PlansPage />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute>
                      <DashboardPage />
                    </PrivateRoute>
                  } 
                />
              </Routes>
            </Layout>
          )}
        </AnimatePresence>
      </BrowserRouter>
    </AuthProvider>
  );
}