import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, ArrowRight } from 'lucide-react';
import Fuse from 'fuse.js';
import { navigation } from '@/data/navigation';

interface SearchItem {
  id: string;
  title: string;
  path: string;
  section: string;
}

// Build search index from navigation
const searchItems: SearchItem[] = navigation.flatMap(section =>
  section.items.length > 0
    ? section.items.map(item => ({
        id: item.id,
        title: item.title,
        path: item.path,
        section: section.title,
      }))
    : [{
        id: section.id,
        title: section.title,
        path: section.path,
        section: '',
      }]
);

const fuse = new Fuse(searchItems, {
  keys: ['title', 'section'],
  threshold: 0.3,
  includeScore: true,
});

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query).slice(0, 8);
      setResults(searchResults.map(r => r.item));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = useCallback((path: string) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex].path);
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [results, selectedIndex, handleSelect, onClose]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="search-modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="search-modal"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar na documentação..."
                className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none"
              />
              <button
                onClick={onClose}
                className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto p-2">
              {results.length > 0 ? (
                <ul>
                  {results.map((item, index) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSelect(item.path)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                          index === selectedIndex
                            ? 'bg-primary-50 text-primary-900 dark:bg-primary-900/30 dark:text-primary-100'
                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                      >
                        <FileText className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{item.title}</div>
                          {item.section && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              {item.section}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-400" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : query.trim() ? (
                <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                  <p>Nenhum resultado encontrado para "{query}"</p>
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                  <p>Digite para buscar na documentação</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 font-mono">↑↓</kbd>
                navegar
              </span>
              <span className="mx-2">|</span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 font-mono">↵</kbd>
                selecionar
              </span>
              <span className="mx-2">|</span>
              <span className="inline-flex items-center gap-1">
                <kbd className="rounded bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 font-mono">esc</kbd>
                fechar
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
