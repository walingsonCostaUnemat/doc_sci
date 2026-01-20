import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NavigationButtons } from '@/components/NavigationButtons';
import { MermaidDiagram } from '@/components/MermaidDiagram';
import { DiagramGallery } from '@/components/DiagramGallery';
import { useViewMode } from '@/contexts/AppContext';
import { getSectionBySlug, getAllDiagrams } from '@/data/content';
import { FileText, Construction, BookOpen, GitBranch, LayoutGrid } from 'lucide-react';

export function SectionPage() {
  const { sectionId } = useParams();
  const location = useLocation();
  const { viewMode } = useViewMode();

  // Buscar conteudo real da secao
  const section = sectionId ? getSectionBySlug(sectionId) : undefined;

  // Se nao encontrar conteudo, mostrar placeholder
  if (!section) {
    return <PlaceholderContent sectionId={sectionId} location={location.pathname} />;
  }

  // Verificar se é a galeria de diagramas
  const isGalleryPage = section.slug === 'galeria-diagramas';
  const partLabel = section.part === 0 ? 'Recursos' : `Parte ${section.part}`;

  // Para a galeria, obter TODOS os diagramas do sistema
  const allDiagrams = isGalleryPage ? getAllDiagrams() : section.diagrams;
  const diagramCount = allDiagrams?.length || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <Breadcrumb />

      <header className="section-header pb-4 border-b">
        <div className="section-badge flex items-center gap-2 text-sm font-medium mb-3">
          {isGalleryPage ? (
            <LayoutGrid className="h-4 w-4" />
          ) : (
            <BookOpen className="h-4 w-4" />
          )}
          <span className="uppercase tracking-wide">{partLabel}</span>
        </div>
        <h1 className="section-title text-3xl lg:text-4xl font-bold leading-tight">
          {section.title}
        </h1>
      </header>

      {/* Indicador de modo e diagramas */}
      {diagramCount > 0 && (
        <div className="mode-indicator flex items-center gap-3 text-sm rounded-lg px-4 py-2">
          <FileText className="h-4 w-4" />
          <span className="font-medium">Modo: {viewMode === 'text' ? 'Texto' : 'Diagrama'}</span>
          <span className="mode-separator">|</span>
          <GitBranch className="h-4 w-4" />
          <span>{diagramCount} diagrama(s) disponivel(is)</span>
        </div>
      )}

      {viewMode === 'text' ? (
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {section.content}
          </ReactMarkdown>
        </article>
      ) : (
        <div className="space-y-8">
          {allDiagrams && allDiagrams.length > 0 ? (
            isGalleryPage || allDiagrams.length >= 3 ? (
              // Usar galeria para página de galeria ou seções com muitos diagramas
              <DiagramGallery
                diagrams={allDiagrams}
                title={isGalleryPage ? 'Galeria de Diagramas SCI' : `Diagramas - ${section.title}`}
              />
            ) : (
              // Exibição individual para poucas seções
              allDiagrams.map((diagram) => (
                <div key={diagram.id} className="space-y-3">
                  {diagram.description && (
                    <p className="diagram-description text-sm rounded-lg px-4 py-2">
                      {diagram.description}
                    </p>
                  )}
                  <MermaidDiagram
                    code={diagram.code}
                    title={diagram.title}
                    id={diagram.id}
                  />
                </div>
              ))
            )
          ) : (
            <div className="empty-state rounded-lg border-2 border-dashed p-12 text-center">
              <Construction className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="empty-state-title text-xl font-semibold mb-2">
                Nenhum diagrama disponivel
              </h3>
              <p className="empty-state-text">
                Esta secao ainda nao possui diagramas.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="section-footer pt-8 border-t">
        <NavigationButtons />
      </div>
    </motion.div>
  );
}

function PlaceholderContent({ sectionId, location }: { sectionId?: string; location: string }) {
  const title = sectionId
    ? sectionId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Secao';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <Breadcrumb />

      <header className="section-header pb-4 border-b">
        <h1 className="section-title text-3xl lg:text-4xl font-bold">
          {title}
        </h1>
      </header>

      <div className="empty-state rounded-lg border-2 border-dashed p-12 text-center">
        <Construction className="h-16 w-16 mx-auto mb-4 opacity-50" />
        <h3 className="empty-state-title text-xl font-semibold mb-2">
          Conteudo em desenvolvimento
        </h3>
        <p className="empty-state-text mb-4">
          O conteudo desta secao sera disponibilizado em breve.
        </p>
        <p className="empty-state-route text-xs font-mono">
          Rota: {location}
        </p>
      </div>

      <div className="section-footer pt-8 border-t">
        <NavigationButtons />
      </div>
    </motion.div>
  );
}
