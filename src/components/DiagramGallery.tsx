import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2
} from 'lucide-react';
import { MermaidDiagram } from './MermaidDiagram';
import { saveAs } from 'file-saver';
import type { Diagram } from '@/data/types';

interface DiagramGalleryProps {
  diagrams: Diagram[];
  title?: string;
}

export function DiagramGallery({ diagrams, title = 'Galeria de Diagramas' }: DiagramGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const currentDiagram = diagrams[currentIndex];

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : diagrams.length - 1));
  }, [diagrams.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev < diagrams.length - 1 ? prev + 1 : 0));
  }, [diagrams.length]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Scroll thumbnail into view when index changes
  useEffect(() => {
    if (thumbnailsRef.current) {
      const thumbnail = thumbnailsRef.current.children[currentIndex] as HTMLElement;
      if (thumbnail) {
        thumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, isFullscreen]);

  const downloadDiagram = useCallback(async (format: 'svg' | 'png') => {
    const svgElement = document.querySelector(`#gallery-diagram-${currentDiagram.id} svg`) as SVGElement;
    if (!svgElement) return;

    const filename = currentDiagram.title.replace(/[^a-zA-Z0-9]/g, '_');

    if (format === 'svg') {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      saveAs(blob, `${filename}.svg`);
    } else {
      // PNG export using canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const img = new window.Image();

      img.onload = () => {
        canvas.width = img.width * 2;
        canvas.height = img.height * 2;
        ctx?.scale(2, 2);
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob(blob => {
          if (blob) {
            saveAs(blob, `${filename}.png`);
          }
        }, 'image/png');
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    }
  }, [currentDiagram]);

  if (diagrams.length === 0) {
    return null;
  }

  return (
    <>
      <div className="diagram-gallery overflow-hidden">
        {/* Header */}
        <div className="diagram-gallery-header flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="diagram-gallery-title font-semibold">{title}</h3>
            <p className="diagram-gallery-counter text-sm">
              {currentIndex + 1} de {diagrams.length}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(true)}
              className="diagram-gallery-nav-btn p-2 rounded-lg"
              title="Tela cheia"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => downloadDiagram('svg')}
              className="diagram-gallery-nav-btn p-2 rounded-lg"
              title="Download SVG"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={() => downloadDiagram('png')}
              className="diagram-gallery-download-btn px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1"
              title="Download PNG"
            >
              <Download className="h-4 w-4" />
              PNG
            </button>
          </div>
        </div>

        {/* Main Viewer */}
        <div className="diagram-gallery-viewer relative p-4">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="diagram-gallery-nav-btn absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg"
            aria-label="Diagrama anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            className="diagram-gallery-nav-btn absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg"
            aria-label="Próximo diagrama"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Diagram Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDiagram.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <div id={`gallery-diagram-${currentDiagram.id}`} className="w-full">
                <MermaidDiagram
                  code={currentDiagram.code}
                  title={currentDiagram.title}
                  id={`gallery-${currentDiagram.id}`}
                />
              </div>
              {currentDiagram.description && (
                <p className="diagram-description mt-4 text-sm text-center max-w-2xl px-4 py-2 rounded-lg">
                  {currentDiagram.description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="diagram-thumbnails-container border-t p-3">
          <div
            ref={thumbnailsRef}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin"
          >
            {diagrams.map((diagram, index) => (
              <button
                key={diagram.id}
                onClick={() => goToIndex(index)}
                className={`diagram-thumbnail flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden p-2 ${
                  index === currentIndex ? 'active' : ''
                }`}
                title={diagram.title}
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <span className="diagram-thumbnail-title text-center line-clamp-2">
                    {diagram.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full h-full max-w-[95vw] max-h-[95vh] p-8 flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Fullscreen Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-white text-xl font-semibold">{currentDiagram.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {currentIndex + 1} de {diagrams.length}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => downloadDiagram('svg')}
                    className="px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 text-sm flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    SVG
                  </button>
                  <button
                    onClick={() => downloadDiagram('png')}
                    className="px-3 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 text-sm flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    PNG
                  </button>
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
                  >
                    <span className="sr-only">Fechar</span>
                    ✕
                  </button>
                </div>
              </div>

              {/* Fullscreen Viewer */}
              <div className="flex-1 relative bg-white rounded-lg overflow-auto">
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div id={`fullscreen-diagram-${currentDiagram.id}`} className="p-8">
                  <MermaidDiagram
                    code={currentDiagram.code}
                    title=""
                    id={`fullscreen-${currentDiagram.id}`}
                  />
                </div>
              </div>

              {/* Fullscreen Thumbnails */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {diagrams.map((diagram, index) => (
                  <button
                    key={diagram.id}
                    onClick={() => goToIndex(index)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm transition-colors ${
                      index === currentIndex
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {index + 1}. {diagram.title.length > 20 ? diagram.title.substring(0, 20) + '...' : diagram.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
