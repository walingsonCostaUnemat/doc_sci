import { useState, useEffect, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { SearchModal } from './SearchModal';
import { ExportButton } from './ExportButton';
import { useSidebar } from '@/hooks/useSidebar';

export function Layout() {
  const { isOpen, isMobile, toggle, close } = useSidebar();
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchOpen = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const handleSearchClose = useCallback(() => {
    setSearchOpen(false);
  }, []);

  return (
    <div className="layout-container min-h-screen">
      <Header
        onMenuClick={toggle}
        onSearchClick={handleSearchOpen}
        sidebarOpen={isOpen}
      />

      <Sidebar
        isOpen={isOpen}
        onClose={close}
        isMobile={isMobile}
      />

      <main
        className={`main-content transition-all duration-300 ${
          isOpen && !isMobile ? 'lg:pl-72' : ''
        }`}
      >
        <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
          <Outlet />
        </div>
      </main>

      <SearchModal
        isOpen={searchOpen}
        onClose={handleSearchClose}
      />

      <ExportButton />
    </div>
  );
}
