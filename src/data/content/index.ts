import type { Section, Diagram } from '@/data/types';
import { parteISections, parteISectionMap } from './parte-i';
import { parteIISections, parteIISectionMap } from './parte-ii';
import { parteIIISections, parteIIISectionMap } from './parte-iii';
import { parteIVSections, parteIVSectionMap } from './parte-iv';
import { parteVSections, parteVSectionMap } from './parte-v';
import { parteVISections, parteVISectionMap } from './parte-vi';
import { parteVIISections, parteVIISectionMap } from './parte-vii';
import { parteVIIISections, parteVIIISectionMap } from './parte-viii';
import { recursosSections, recursosSectionMap } from './recursos';

// Exportar todas as secoes
export const allSections: Section[] = [
  ...parteISections,
  ...parteIISections,
  ...parteIIISections,
  ...parteIVSections,
  ...parteVSections,
  ...parteVISections,
  ...parteVIISections,
  ...parteVIIISections,
  ...recursosSections,
];

// Mapa global de slug para secao (todas as partes)
export const sectionMap: Record<string, Section> = {
  ...parteISectionMap,
  ...parteIISectionMap,
  ...parteIIISectionMap,
  ...parteIVSectionMap,
  ...parteVSectionMap,
  ...parteVISectionMap,
  ...parteVIISectionMap,
  ...parteVIIISectionMap,
  ...recursosSectionMap,
};

// Funcao para buscar secao por slug
export function getSectionBySlug(slug: string): Section | undefined {
  return sectionMap[slug];
}

// Funcao para buscar secoes por parte
export function getSectionsByPart(part: number): Section[] {
  return allSections.filter(section => section.part === part);
}

// Funcao para obter todos os diagramas de todas as secoes
export function getAllDiagrams(): Diagram[] {
  const diagrams: Diagram[] = [];
  const seenIds = new Set<string>();

  allSections.forEach(section => {
    if (section.diagrams) {
      section.diagrams.forEach(diagram => {
        // Evitar duplicatas
        if (!seenIds.has(diagram.id)) {
          seenIds.add(diagram.id);
          diagrams.push(diagram);
        }
      });
    }
  });

  return diagrams;
}

// Re-exportar secoes por parte
export { parteISections, parteISectionMap } from './parte-i';
export { parteIISections, parteIISectionMap } from './parte-ii';
export { parteIIISections, parteIIISectionMap } from './parte-iii';
export { parteIVSections, parteIVSectionMap } from './parte-iv';
export { parteVSections, parteVSectionMap } from './parte-v';
export { parteVISections, parteVISectionMap } from './parte-vi';
export { parteVIISections, parteVIISectionMap } from './parte-vii';
export { parteVIIISections, parteVIIISectionMap } from './parte-viii';
export { recursosSections, recursosSectionMap } from './recursos';
