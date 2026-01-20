import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbs } from '@/data/navigation';

export function Breadcrumb() {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const isFirst = index === 0;

          return (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400 dark:text-gray-500" />
              )}
              {isLast ? (
                <span className="font-medium text-gray-900 dark:text-white">
                  {isFirst ? <Home className="h-4 w-4" /> : crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {isFirst ? <Home className="h-4 w-4" /> : crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
