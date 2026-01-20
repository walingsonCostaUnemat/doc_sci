import { useState, useCallback, useEffect } from 'react';

const SIDEBAR_KEY = 'sci-argos-sidebar';

function getStoredSidebarState(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem(SIDEBAR_KEY);
  return stored !== 'false';
}

export function useSidebar() {
  const [isOpen, setIsOpenState] = useState(() => getStoredSidebarState());
  const [isMobile, setIsMobile] = useState(false);

  const setIsOpen = useCallback((open: boolean) => {
    setIsOpenState(open);
    localStorage.setItem(SIDEBAR_KEY, String(open));
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsOpenState(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return {
    isOpen,
    isMobile,
    setIsOpen,
    toggle,
    open,
    close,
  };
}
