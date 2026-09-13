import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightColors, darkColors, Palette } from '../constants/theme';
import { getSettings, saveSettings, AppSettings } from '../utils/storage';

type ThemeContextValue = {
  colors: Palette;
  isDark: boolean;
  toggleDarkMode: () => void;
  settings: AppSettings;
  setNotification: (v: boolean) => void;
  loaded: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [notif, setNotif] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // Baca pengaturan tersimpan sekali saat app pertama dibuka
  useEffect(() => {
    (async () => {
      const settings = await getSettings();
      setIsDark(settings.darkMode);
      setNotif(settings.dailyNotification);
      setLoaded(true);
    })();
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      saveSettings({ darkMode: next, dailyNotification: notif });
      return next;
    });
  };

  const setNotification = (v: boolean) => {
    setNotif(v);
    saveSettings({ darkMode: isDark, dailyNotification: v });
  };

  const value: ThemeContextValue = {
    colors: isDark ? darkColors : lightColors,
    isDark,
    toggleDarkMode,
    settings: { darkMode: isDark, dailyNotification: notif },
    setNotification,
    loaded,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hook utama dipakai di setiap layar: const { colors } = useThemeColors();
export function useThemeColors() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeColors harus dipakai di dalam <ThemeProvider>');
  }
  return ctx;
}
