import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  X,
  FileText,
  Image,
  ChevronDown,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import { allSections, getSectionsByPart } from '@/data/content';
import type { Section } from '@/data/types';

interface ExportButtonProps {
  className?: string;
}

interface PartGroup {
  id: number;
  title: string;
  sections: Section[];
  expanded: boolean;
  selected: boolean;
}

export function ExportButton(_props: ExportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'docx' | 'diagrams'>('docx');
  const [parts, setParts] = useState<PartGroup[]>(() => initializeParts());

  function initializeParts(): PartGroup[] {
    const partTitles: Record<number, string> = {
      1: 'PARTE I - Fundamentos SCI',
      2: 'PARTE II - Estrutura Organizacional',
      3: 'PARTE III - Contexto CBMMT',
      4: 'PARTE IV - Fluxo Operacional',
      5: 'PARTE V - Ciclo de Planejamento',
      6: 'PARTE VI - Desmobilização',
      7: 'PARTE VII - Formulários SCI',
      8: 'PARTE VIII - Requisitos Sistema',
      0: 'Recursos',
    };

    return [1, 2, 3, 4, 5, 6, 7, 8, 0].map(partNum => ({
      id: partNum,
      title: partTitles[partNum],
      sections: getSectionsByPart(partNum),
      expanded: false,
      selected: false,
    }));
  }

  const [selectedSections, setSelectedSections] = useState<Set<string>>(new Set());

  const togglePart = useCallback((partId: number) => {
    setParts(prev => prev.map(p =>
      p.id === partId ? { ...p, expanded: !p.expanded } : p
    ));
  }, []);

  const togglePartSelection = useCallback((partId: number) => {
    setParts(prev => {
      const part = prev.find(p => p.id === partId);
      if (!part) return prev;

      const newSelected = !part.selected;
      const sectionIds = part.sections.map(s => s.id);

      setSelectedSections(current => {
        const newSet = new Set(current);
        sectionIds.forEach(id => {
          if (newSelected) {
            newSet.add(id);
          } else {
            newSet.delete(id);
          }
        });
        return newSet;
      });

      return prev.map(p =>
        p.id === partId ? { ...p, selected: newSelected } : p
      );
    });
  }, []);

  const toggleSection = useCallback((sectionId: string, partId: number) => {
    setSelectedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }

      // Update part selection state
      const part = parts.find(p => p.id === partId);
      if (part) {
        const allSelected = part.sections.every(s => newSet.has(s.id));
        setParts(current => current.map(p =>
          p.id === partId ? { ...p, selected: allSelected } : p
        ));
      }

      return newSet;
    });
  }, [parts]);

  const selectAll = useCallback(() => {
    const allIds = allSections.map(s => s.id);
    setSelectedSections(new Set(allIds));
    setParts(prev => prev.map(p => ({ ...p, selected: true })));
  }, []);

  const clearAll = useCallback(() => {
    setSelectedSections(new Set());
    setParts(prev => prev.map(p => ({ ...p, selected: false })));
  }, []);

  const exportToDocx = useCallback(async () => {
    if (selectedSections.size === 0) return;

    setIsExporting(true);

    try {
      const sectionsToExport = allSections.filter(s => selectedSections.has(s.id));

      const children: (Paragraph | Table)[] = [
        // Cover
        new Paragraph({
          children: [
            new TextRun({
              text: 'SCI-ARGOS',
              bold: true,
              size: 72,
              color: 'DC2626',
            }),
          ],
          spacing: { after: 400 },
          alignment: 'center',
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Sistema de Comando de Incidentes',
              size: 48,
              color: '374151',
            }),
          ],
          spacing: { after: 200 },
          alignment: 'center',
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'CBMMT - Corpo de Bombeiros Militar do Mato Grosso',
              size: 28,
              color: '6B7280',
            }),
          ],
          spacing: { after: 800 },
          alignment: 'center',
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Exportado em: ${new Date().toLocaleDateString('pt-BR')}`,
              size: 24,
              color: '9CA3AF',
            }),
          ],
          spacing: { after: 400 },
          alignment: 'center',
        }),
        new Paragraph({
          pageBreakBefore: true,
          children: [],
        }),
      ];

      // Group by part
      const partGroups = new Map<number, Section[]>();
      sectionsToExport.forEach(section => {
        const existing = partGroups.get(section.part) || [];
        partGroups.set(section.part, [...existing, section]);
      });

      // Add content
      Array.from(partGroups.entries())
        .sort(([a], [b]) => a - b)
        .forEach(([partNum, sections]) => {
          const partTitle = parts.find(p => p.id === partNum)?.title || `Parte ${partNum}`;

          // Part header
          children.push(
            new Paragraph({
              text: partTitle,
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 },
            })
          );

          sections.forEach(section => {
            // Section title
            children.push(
              new Paragraph({
                text: section.title,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 300, after: 150 },
              })
            );

            // Parse markdown content
            const lines = section.content.split('\n');
            lines.forEach(line => {
              const trimmed = line.trim();

              if (!trimmed) {
                children.push(new Paragraph({ children: [] }));
                return;
              }

              // Headers
              if (trimmed.startsWith('# ')) {
                children.push(new Paragraph({
                  text: trimmed.substring(2),
                  heading: HeadingLevel.HEADING_1,
                  spacing: { before: 300, after: 150 },
                }));
              } else if (trimmed.startsWith('## ')) {
                children.push(new Paragraph({
                  text: trimmed.substring(3),
                  heading: HeadingLevel.HEADING_2,
                  spacing: { before: 250, after: 100 },
                }));
              } else if (trimmed.startsWith('### ')) {
                children.push(new Paragraph({
                  text: trimmed.substring(4),
                  heading: HeadingLevel.HEADING_3,
                  spacing: { before: 200, after: 100 },
                }));
              } else if (trimmed.startsWith('#### ')) {
                children.push(new Paragraph({
                  text: trimmed.substring(5),
                  heading: HeadingLevel.HEADING_4,
                  spacing: { before: 150, after: 100 },
                }));
              } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                // Bullet list
                children.push(new Paragraph({
                  text: trimmed.substring(2),
                  bullet: { level: 0 },
                }));
              } else if (/^\d+\.\s/.test(trimmed)) {
                // Numbered list
                const text = trimmed.replace(/^\d+\.\s/, '');
                children.push(new Paragraph({
                  text: text,
                  numbering: { reference: 'default-numbering', level: 0 },
                }));
              } else if (trimmed.startsWith('> ')) {
                // Blockquote
                children.push(new Paragraph({
                  children: [
                    new TextRun({
                      text: trimmed.substring(2),
                      italics: true,
                      color: '6B7280',
                    }),
                  ],
                  indent: { left: 720 },
                  border: {
                    left: { style: BorderStyle.SINGLE, size: 12, color: 'DC2626' },
                  },
                }));
              } else if (trimmed.startsWith('---')) {
                // Horizontal rule
                children.push(new Paragraph({
                  children: [],
                  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'E5E7EB' } },
                  spacing: { before: 200, after: 200 },
                }));
              } else if (trimmed.startsWith('|')) {
                // Skip table rows for now - complex parsing needed
              } else {
                // Regular paragraph
                // Handle bold and italic
                const textRuns: TextRun[] = [];
                let remaining = trimmed;

                // Simple bold/italic parsing
                const boldRegex = /\*\*(.+?)\*\*/g;
                let lastIndex = 0;
                let match;

                while ((match = boldRegex.exec(remaining)) !== null) {
                  if (match.index > lastIndex) {
                    textRuns.push(new TextRun({ text: remaining.slice(lastIndex, match.index) }));
                  }
                  textRuns.push(new TextRun({ text: match[1], bold: true }));
                  lastIndex = match.index + match[0].length;
                }

                if (lastIndex < remaining.length) {
                  textRuns.push(new TextRun({ text: remaining.slice(lastIndex) }));
                }

                if (textRuns.length === 0) {
                  textRuns.push(new TextRun({ text: trimmed }));
                }

                children.push(new Paragraph({
                  children: textRuns,
                  spacing: { after: 100 },
                }));
              }
            });

            // Add page break after each section
            children.push(new Paragraph({ pageBreakBefore: true, children: [] }));
          });
        });

      const doc = new Document({
        numbering: {
          config: [{
            reference: 'default-numbering',
            levels: [{
              level: 0,
              format: 'decimal',
              text: '%1.',
              alignment: 'start',
            }],
          }],
        },
        sections: [{
          properties: {},
          children: children,
        }],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, `SCI-ARGOS_${new Date().toISOString().split('T')[0]}.docx`);
    } catch (error) {
      console.error('Error exporting to DOCX:', error);
    } finally {
      setIsExporting(false);
    }
  }, [selectedSections, parts]);

  const exportDiagrams = useCallback(async (format: 'svg' | 'png') => {
    if (selectedSections.size === 0) return;

    setIsExporting(true);

    try {
      const sectionsToExport = allSections.filter(s => selectedSections.has(s.id));
      const diagrams: { title: string; id: string }[] = [];

      sectionsToExport.forEach(section => {
        section.diagrams?.forEach(diagram => {
          diagrams.push({ title: diagram.title, id: diagram.id });
        });
      });

      // Export each diagram
      for (const diagram of diagrams) {
        const svgElement = document.querySelector(`#mermaid-${diagram.id} svg`) as SVGElement;
        if (!svgElement) continue;

        if (format === 'svg') {
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const blob = new Blob([svgData], { type: 'image/svg+xml' });
          saveAs(blob, `${diagram.title.replace(/[^a-zA-Z0-9]/g, '_')}.svg`);
        } else {
          // PNG export using canvas
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const img = new window.Image();

          await new Promise<void>((resolve) => {
            img.onload = () => {
              canvas.width = img.width * 2;
              canvas.height = img.height * 2;
              ctx?.scale(2, 2);
              ctx?.drawImage(img, 0, 0);
              canvas.toBlob(blob => {
                if (blob) {
                  saveAs(blob, `${diagram.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`);
                }
                resolve();
              }, 'image/png');
            };
            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
          });
        }
      }
    } catch (error) {
      console.error('Error exporting diagrams:', error);
    } finally {
      setIsExporting(false);
    }
  }, [selectedSections]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="export-fab fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Exportar documentação"
      >
        <Download className="h-6 w-6" />
      </motion.button>

      {/* Export Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="export-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="export-modal-header flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="export-modal-title text-lg font-semibold">Exportar Documentação</h2>
                  <p className="export-modal-subtitle text-sm">Selecione as seções e o formato de exportação</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="export-modal-close p-2 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Export Type Tabs */}
              <div className="export-tabs flex border-b">
                <button
                  onClick={() => setExportType('docx')}
                  className={`export-tab flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium ${exportType === 'docx' ? 'active' : ''}`}
                >
                  <FileText className="h-4 w-4" />
                  Documento (DOCX)
                </button>
                <button
                  onClick={() => setExportType('diagrams')}
                  className={`export-tab flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium ${exportType === 'diagrams' ? 'active' : ''}`}
                >
                  <Image className="h-4 w-4" />
                  Diagramas (SVG/PNG)
                </button>
              </div>

              {/* Selection Actions */}
              <div className="export-actions flex items-center justify-between px-4 py-2 border-b">
                <span className="export-selection-count text-sm">
                  {selectedSections.size} seção(ões) selecionada(s)
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={selectAll}
                    className="export-action-btn text-sm px-3 py-1 rounded"
                  >
                    Selecionar tudo
                  </button>
                  <button
                    onClick={clearAll}
                    className="export-action-btn text-sm px-3 py-1 rounded"
                  >
                    Limpar
                  </button>
                </div>
              </div>

              {/* Section List */}
              <div className="export-list overflow-y-auto max-h-[40vh] p-2">
                {parts.map(part => (
                  <div key={part.id} className="mb-1">
                    <div className="export-part-header flex items-center gap-2 p-2 rounded-lg">
                      <button
                        onClick={() => togglePart(part.id)}
                        className="p-1"
                      >
                        {part.expanded ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      <label className="flex items-center gap-2 flex-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={part.selected}
                          onChange={() => togglePartSelection(part.id)}
                          className="export-checkbox w-4 h-4 rounded"
                        />
                        <span className="font-medium text-sm">{part.title}</span>
                        <span className="export-section-count text-xs">
                          ({part.sections.length})
                        </span>
                      </label>
                    </div>

                    <AnimatePresence>
                      {part.expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-8"
                        >
                          {part.sections.map(section => (
                            <label
                              key={section.id}
                              className="export-section-item flex items-center gap-2 p-2 rounded cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={selectedSections.has(section.id)}
                                onChange={() => toggleSection(section.id, part.id)}
                                className="export-checkbox w-4 h-4 rounded"
                              />
                              <span className="text-sm">{section.title}</span>
                              {section.diagrams && section.diagrams.length > 0 && (
                                <span className="export-diagram-badge text-xs px-1.5 py-0.5 rounded">
                                  {section.diagrams.length} diagrama(s)
                                </span>
                              )}
                            </label>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="export-footer flex items-center justify-end gap-3 p-4 border-t">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Cancelar
                </button>
                {exportType === 'docx' ? (
                  <button
                    onClick={exportToDocx}
                    disabled={selectedSections.size === 0 || isExporting}
                    className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 disabled:opacity-50"
                  >
                    {isExporting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    Exportar DOCX
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => exportDiagrams('svg')}
                      disabled={selectedSections.size === 0 || isExporting}
                      className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 disabled:opacity-50"
                    >
                      {isExporting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Download className="h-4 w-4" />
                      )}
                      SVG
                    </button>
                    <button
                      onClick={() => exportDiagrams('png')}
                      disabled={selectedSections.size === 0 || isExporting}
                      className="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 disabled:opacity-50"
                    >
                      {isExporting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Download className="h-4 w-4" />
                      )}
                      PNG
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
