import {
  Menu,
  Search,
  Sun,
  Moon,
  FileText,
  BarChart3,
  X
} from 'lucide-react';
import { useTheme, useViewMode } from '@/contexts/AppContext';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  sidebarOpen: boolean;
}

export function Header({ onMenuClick, onSearchClick, sidebarOpen }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <header className="header-container sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="flex h-16 items-center gap-4 px-4 lg:px-6">
        {/* Menu button */}
        <button
          onClick={onMenuClick}
          className="header-menu-btn inline-flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white font-bold text-sm">
            SCI
          </div>
          <div className="hidden sm:block">
            <h1 className="header-title text-lg font-semibold">
              SCI-ARGOS
            </h1>
            <p className="header-subtitle text-xs">
              Documentation Hub
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search button */}
        <button
          onClick={onSearchClick}
          className="header-search-btn inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="header-kbd hidden rounded px-1.5 py-0.5 text-xs font-medium sm:inline">
            Ctrl+K
          </kbd>
        </button>

        {/* View mode toggle */}
        <div className="header-toggle-group flex items-center rounded-lg border p-1">
          <button
            onClick={() => viewMode !== 'text' && toggleViewMode()}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
              viewMode === 'text'
                ? 'bg-primary-500 text-white'
                : 'header-toggle-btn'
            }`}
            aria-label="Modo texto"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Texto</span>
          </button>
          <button
            onClick={() => viewMode !== 'diagram' && toggleViewMode()}
            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
              viewMode === 'diagram'
                ? 'bg-primary-500 text-white'
                : 'header-toggle-btn'
            }`}
            aria-label="Modo diagrama"
          >
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Diagrama</span>
          </button>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="header-theme-btn inline-flex items-center justify-center rounded-md p-2"
          aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
