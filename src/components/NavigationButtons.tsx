import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAdjacentSections } from '@/data/navigation';

export function NavigationButtons() {
  const location = useLocation();
  const { prev, next } = getAdjacentSections(location.pathname);

  if (!prev && !next) {
    return null;
  }

  return (
    <div className="mt-12 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-6">
      {prev ? (
        <Link
          to={prev.path}
          className="group flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <div className="text-left">
            <div className="text-xs uppercase tracking-wide">Anterior</div>
            <div className="font-medium text-gray-900 dark:text-white">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.path}
          className="group flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-right"
        >
          <div>
            <div className="text-xs uppercase tracking-wide">Proximo</div>
            <div className="font-medium text-gray-900 dark:text-white">{next.title}</div>
          </div>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
