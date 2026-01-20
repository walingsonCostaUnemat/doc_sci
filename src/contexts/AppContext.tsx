import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { Theme, ViewMode } from '@/data/types';

// ============================================================
// THEME MANAGEMENT
// ============================================================

const THEME_KEY = 'sci-argos-theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

function applyTheme(resolved: 'light' | 'dark') {
  if (resolved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// ============================================================
// VIEW MODE MANAGEMENT
// ============================================================

const VIEW_MODE_KEY = 'sci-argos-view-mode';

function getStoredViewMode(): ViewMode {
  if (typeof window === 'undefined') return 'text';
  const stored = localStorage.getItem(VIEW_MODE_KEY);
  if (stored === 'text' || stored === 'diagram') {
    return stored;
  }
  return 'text';
}

// ============================================================
// CONTEXT
// ============================================================

interface AppContextType {
  // Theme
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  // View Mode
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
  isTextMode: boolean;
  isDiagramMode: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Theme state
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    const stored = getStoredTheme();
    return stored === 'system' ? getSystemTheme() : stored;
  });

  // View mode state
  const [viewMode, setViewModeState] = useState<ViewMode>(() => getStoredViewMode());

  // Theme functions
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);

    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [resolvedTheme, setTheme]);

  // View mode functions
  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
    localStorage.setItem(VIEW_MODE_KEY, mode);
  }, []);

  const toggleViewMode = useCallback(() => {
    const newMode = viewMode === 'text' ? 'diagram' : 'text';
    setViewMode(newMode);
  }, [viewMode, setViewMode]);

  // Apply initial theme and listen for system changes
  useEffect(() => {
    const resolved = theme === 'system' ? getSystemTheme() : theme;
    applyTheme(resolved);
    setResolvedTheme(resolved);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const newResolved = e.matches ? 'dark' : 'light';
        setResolvedTheme(newResolved);
        applyTheme(newResolved);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const value: AppContextType = {
    // Theme
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    isDark: resolvedTheme === 'dark',
    // View Mode
    viewMode,
    setViewMode,
    toggleViewMode,
    isTextMode: viewMode === 'text',
    isDiagramMode: viewMode === 'diagram',
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

// Backward compatible hooks
export function useTheme() {
  const { theme, resolvedTheme, setTheme, toggleTheme, isDark } = useApp();
  return { theme, resolvedTheme, setTheme, toggleTheme, isDark };
}

export function useViewMode() {
  const { viewMode, setViewMode, toggleViewMode, isTextMode, isDiagramMode } = useApp();
  return { viewMode, setViewMode, toggleViewMode, isTextMode, isDiagramMode };
}
