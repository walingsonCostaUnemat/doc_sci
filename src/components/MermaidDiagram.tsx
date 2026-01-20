import { useEffect, useRef, useState, useCallback } from 'react';
import mermaid from 'mermaid';
import { ZoomIn, ZoomOut, Maximize2, Minimize2, Download, RotateCcw, X } from 'lucide-react';
import { useTheme } from '@/contexts/AppContext';

interface MermaidDiagramProps {
  code: string;
  title?: string;
  id?: string;
}

// Configuracao base do Mermaid
const baseMermaidConfig = {
  startOnLoad: false,
  flowchart: {
    htmlLabels: true,
    curve: 'basis' as const,
    nodeSpacing: 50,
    rankSpacing: 50,
    padding: 15,
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    actorFontSize: 14,
    noteFontSize: 12,
    messageFontSize: 14,
  },
  mindmap: {
    padding: 20,
    maxNodeWidth: 200,
  },
};

// Tema claro
const lightThemeVariables = {
  primaryColor: '#DC2626',
  primaryTextColor: '#FFFFFF',
  primaryBorderColor: '#991B1B',
  secondaryColor: '#059669',
  secondaryTextColor: '#FFFFFF',
  secondaryBorderColor: '#047857',
  tertiaryColor: '#F3F4F6',
  tertiaryTextColor: '#1F2937',
  tertiaryBorderColor: '#D1D5DB',
  lineColor: '#4B5563',
  textColor: '#1F2937',
  mainBkg: '#FFFFFF',
  nodeBkg: '#F9FAFB',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  fontSize: '14px',
  nodeTextColor: '#1F2937',
  mindmapBackgroundColor: '#FEF2F2',
};

// Tema escuro
const darkThemeVariables = {
  primaryColor: '#DC2626',
  primaryTextColor: '#FFFFFF',
  primaryBorderColor: '#F87171',
  secondaryColor: '#10B981',
  secondaryTextColor: '#FFFFFF',
  secondaryBorderColor: '#34D399',
  tertiaryColor: '#374151',
  tertiaryTextColor: '#F9FAFB',
  tertiaryBorderColor: '#4B5563',
  lineColor: '#9CA3AF',
  textColor: '#F9FAFB',
  mainBkg: '#1F2937',
  nodeBkg: '#374151',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  fontSize: '14px',
  nodeTextColor: '#F9FAFB',
  mindmapBackgroundColor: '#450A0A',
};

export function MermaidDiagram({ code, title, id }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const { isDark } = useTheme();

  const diagramId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        // Reinicializa mermaid com o tema correto
        mermaid.initialize({
          ...baseMermaidConfig,
          theme: 'base',
          themeVariables: isDark ? darkThemeVariables : lightThemeVariables,
        });

        // Limpa o cache do mermaid para evitar conflitos de ID
        const uniqueId = `${diagramId}-${Date.now()}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, code);
        setSvg(renderedSvg);
        setError(null);
      } catch (err) {
        console.error('Mermaid render error:', err);
        setError('Erro ao renderizar diagrama');
      }
    };

    if (code) {
      renderDiagram();
    }
  }, [code, diagramId, isDark]);

  // Escape key para sair do fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const handleZoomIn = useCallback(() => {
    setScale((s) => Math.min(s + 0.25, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((s) => Math.max(s - 0.25, 0.25));
  }, []);

  const handleReset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleFullscreen = useCallback(() => {
    setIsFullscreen((f) => !f);
    if (!isFullscreen) {
      handleReset();
    }
  }, [isFullscreen, handleReset]);

  const handleDownload = useCallback(() => {
    if (!svg) return;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'diagram'}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [svg, title]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  }, [position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.max(0.25, Math.min(4, s + delta)));
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-center">
        <p className="text-red-600 dark:text-red-400">{error}</p>
        <pre className="mt-2 text-xs text-left overflow-auto max-h-32 bg-red-100 dark:bg-red-900/30 p-2 rounded">
          {code}
        </pre>
      </div>
    );
  }

  // Toolbar component
  const Toolbar = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-1.5 ${className}`}>
      <button
        onClick={handleZoomOut}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
        title="Diminuir zoom (scroll down)"
      >
        <ZoomOut className="h-5 w-5" />
      </button>
      <span className="px-3 text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[4rem] text-center tabular-nums">
        {Math.round(scale * 100)}%
      </span>
      <button
        onClick={handleZoomIn}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
        title="Aumentar zoom (scroll up)"
      >
        <ZoomIn className="h-5 w-5" />
      </button>
      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
      <button
        onClick={handleReset}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
        title="Resetar visualizacao"
      >
        <RotateCcw className="h-5 w-5" />
      </button>
      <button
        onClick={handleFullscreen}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
        title={isFullscreen ? 'Sair da tela cheia (ESC)' : 'Tela cheia'}
      >
        {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
      </button>
      <button
        onClick={handleDownload}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
        title="Download SVG"
      >
        <Download className="h-5 w-5" />
      </button>
    </div>
  );

  // Fullscreen mode
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white dark:bg-gray-900 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center gap-4">
            {title && (
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Arraste para mover | Scroll para zoom | ESC para sair
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Toolbar />
            <button
              onClick={handleFullscreen}
              className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
              title="Fechar (ESC)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Diagram area - ocupa todo o espaco restante */}
        <div
          ref={containerRef}
          className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            }}
          >
            {svg ? (
              <div
                className="mermaid-svg p-8 [&_svg]:max-w-none [&_svg]:h-auto"
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            ) : (
              <div className="animate-pulse flex items-center justify-center">
                <div className="h-64 w-96 bg-gray-200 dark:bg-gray-700 rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Normal mode
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      {/* Toolbar */}
      <div className="absolute top-3 right-3 z-10">
        <Toolbar />
      </div>

      {/* Title */}
      {title && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow">
            {title}
          </span>
        </div>
      )}

      {/* SVG Container */}
      <div
        className="min-h-[400px] p-8 pt-16 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div
          className="flex items-center justify-center"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          {svg ? (
            <div
              className="mermaid-svg [&_svg]:max-w-full [&_svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : (
            <div className="animate-pulse flex items-center justify-center">
              <div className="h-48 w-80 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
