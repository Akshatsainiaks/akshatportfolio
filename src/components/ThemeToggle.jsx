import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains('light')
  );

  const toggleTheme = () => {
    const next = !light;
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch {
      // storage unavailable — theme still applies for this visit
    }
    setLight(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      title={light ? 'Dark mode' : 'Light mode'}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 active:scale-90 cursor-pointer"
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
};

export default ThemeToggle;
