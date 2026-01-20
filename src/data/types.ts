// Navigation types
export interface NavigationItem {
  id: string;
  title: string;
  icon?: string;
  path: string;
  children?: NavigationItem[];
}

export interface NavigationSection {
  id: string;
  title: string;
  icon: string;
  path: string;
  items: NavigationItem[];
}

// Content types
export interface Section {
  id: string;
  title: string;
  slug: string;
  part: number;
  order?: number;
  content: string;
  diagrams?: Diagram[];
  toc?: TableOfContentsItem[];
}

export interface Diagram {
  id: string;
  title: string;
  type: 'flowchart' | 'sequence' | 'gantt' | 'mindmap' | 'erDiagram' | 'stateDiagram' | 'graph' | 'pie' | 'timeline';
  code: string;
  description?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  children?: TableOfContentsItem[];
}

// Search types
export interface SearchResult {
  id: string;
  title: string;
  path: string;
  content: string;
  matchedText: string;
  score: number;
}

export interface SearchIndex {
  id: string;
  title: string;
  path: string;
  content: string;
  part: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

export type ViewMode = 'text' | 'diagram';

// App state types
export interface AppState {
  theme: Theme;
  viewMode: ViewMode;
  sidebarOpen: boolean;
  searchOpen: boolean;
  favorites: string[];
  readSections: string[];
}

// Breadcrumb types
export interface BreadcrumbItem {
  label: string;
  path: string;
}

// PDF Export types
export interface PDFExportOptions {
  type: 'section' | 'part' | 'full';
  sectionId?: string;
  partId?: string;
  includeTableOfContents: boolean;
  includeCover: boolean;
}
