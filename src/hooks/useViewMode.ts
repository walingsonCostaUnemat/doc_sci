import { useState, useCallback } from 'react';
import type { ViewMode } from '@/data/types';

const VIEW_MODE_KEY = 'sci-argos-view-mode';

function getStoredViewMode(): ViewMode {
  if (typeof window === 'undefined') return 'text';
  const stored = localStorage.getItem(VIEW_MODE_KEY);
  if (stored === 'text' || stored === 'diagram') {
    return stored;
  }
  return 'text';
}

export function useViewMode() {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => getStoredViewMode());

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
    localStorage.setItem(VIEW_MODE_KEY, mode);
  }, []);

  const toggleViewMode = useCallback(() => {
    const newMode = viewMode === 'text' ? 'diagram' : 'text';
    setViewMode(newMode);
  }, [viewMode, setViewMode]);

  return {
    viewMode,
    setViewMode,
    toggleViewMode,
    isTextMode: viewMode === 'text',
    isDiagramMode: viewMode === 'diagram',
  };
}
