import React from 'react';
import { Header } from '../Header';
import { Background } from '../three/Background';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleDarkMode: () => void;
}

export function Layout({ children, isDark, toggleDarkMode }: LayoutProps) {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Background Animation */}
      <Background />

      {/* Header with dark mode toggle */}
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Main content area */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}