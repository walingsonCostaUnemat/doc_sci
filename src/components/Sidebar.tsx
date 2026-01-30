import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  Building2,
  Shield,
  Settings,
  RefreshCw,
  DoorOpen,
  ClipboardList,
  Code,
  BarChart3,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/data/navigation';
import type { NavigationSection } from '@/data/types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  BookOpen,
  Building2,
  Shield,
  Settings,
  RefreshCw,
  DoorOpen,
  ClipboardList,
  Code,
  BarChart3,
  FileText,
};

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || FileText;
}

function SidebarSection({ section }: { section: NavigationSection }) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(() => {
    return location.pathname.startsWith(section.path) || section.path === '/';
  });

  const Icon = getIcon(section.icon);
  const hasChildren = section.items.length > 0;
  const isActive = location.pathname === section.path ||
    section.items.some(item => location.pathname === item.path);

  if (!hasChildren) {
    return (
      <NavLink
        to={section.path}
        className={({ isActive }) =>
          `sidebar-link ${isActive ? 'active' : ''}`
        }
      >
        <Icon className="h-4 w-4 flex-shrink-0" />
        <span className="truncate">{section.title}</span>
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`sidebar-link w-full justify-between ${isActive ? 'sidebar-section-active' : ''}`}
      >
        <span className="flex items-center gap-2 truncate">
          <Icon className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">{section.title}</span>
        </span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 flex-shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="sidebar-items ml-4 mt-1 space-y-1 border-l pl-3">
              {section.items.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link text-sm ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="truncate">{item.title}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar({ isOpen, onClose, isMobile }: SidebarProps) {
  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin p-4">
        <div className="space-y-2">
          {navigation.map((section) => (
            <SidebarSection key={section.id} section={section} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer border-t p-4">
        <div className="text-xs">
          <p className="font-medium">CBMMT - Corpo de Bombeiros</p>
          <p>Militar do Mato Grosso</p>
          <p className="mt-2">SCI-ARGOS v2.0.0</p>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
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
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="sidebar-container fixed inset-y-0 left-0 z-50 w-72 border-r lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <aside
      className={`sidebar-container hidden lg:block fixed inset-y-0 left-0 z-30 w-72 border-r pt-16 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {sidebarContent}
    </aside>
  );
}
