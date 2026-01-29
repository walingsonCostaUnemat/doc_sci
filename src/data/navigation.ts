import type { NavigationSection, NavigationItem } from './types';

export const navigation: NavigationSection[] = [
  {
    id: 'home',
    title: 'Início',
    icon: 'Home',
    path: '/',
    items: [],
  },
  {
    id: 'parte-i',
    title: 'PARTE I - Fundamentos SCI',
    icon: 'BookOpen',
    path: '/parte-i',
    items: [
      { id: '11', title: '1.1 O Que é o SCI', path: '/parte-i/o-que-e-sci' },
      { id: '12', title: '1.2 Histórico e Evolução', path: '/parte-i/historico' },
      { id: '13', title: '1.3 Conceitos Fundamentais', path: '/parte-i/conceitos' },
      { id: '14', title: '1.4 Princípios do SCI', path: '/parte-i/principios' },
      { id: '15', title: '1.5 Características do SCI', path: '/parte-i/caracteristicas' },
    ],
  },
  {
    id: 'parte-ii',
    title: 'PARTE II - Estrutura Organizacional',
    icon: 'Building2',
    path: '/parte-ii',
    items: [
      { id: '21', title: '2.1 Visão Geral da EOR', path: '/parte-ii/visao-geral-eor' },
      { id: '22', title: '2.2 Comando', path: '/parte-ii/comando' },
      { id: '23', title: '2.3 Staff do Comando', path: '/parte-ii/staff-comando' },
      { id: '24', title: '2.4 Seção de Operações', path: '/parte-ii/secao-operacoes' },
      { id: '25', title: '2.5 Seção de Planejamento', path: '/parte-ii/secao-planejamento' },
      { id: '26', title: '2.6 Seção de Logística', path: '/parte-ii/secao-logistica' },
      { id: '27', title: '2.7 Seção Admin/Finanças', path: '/parte-ii/secao-admin' },
      { id: '28', title: '2.8 Amplitude de Controle', path: '/parte-ii/amplitude-controle' },
    ],
  },
  {
    id: 'parte-iii',
    title: 'PARTE III - Contexto CBMMT',
    icon: 'Shield',
    path: '/parte-iii',
    items: [
      { id: '31', title: '3.1 Estrutura CBMMT', path: '/parte-iii/estrutura-cbmmt' },
      { id: '32', title: '3.2 Operações Incêndio Florestal', path: '/parte-iii/operacoes-incendio' },
      { id: '33', title: '3.3 Integração SCI-CBMMT', path: '/parte-iii/integracao-sci' },
      { id: '34', title: '3.4 POTIF 2025', path: '/parte-iii/potif-2025' },
      { id: '35', title: '3.5 Cenários Operacionais', path: '/parte-iii/cenarios-niveis' },
    ],
  },
  {
    id: 'parte-iv',
    title: 'PARTE IV - Fluxo Operacional',
    icon: 'Settings',
    path: '/parte-iv',
    items: [
      { id: '41', title: '4.1 Ativação do SCI', path: '/parte-iv/ativacao-sci' },
      { id: '42', title: '4.2 Estabelecimento Inicial', path: '/parte-iv/estabelecimento' },
      { id: '43', title: '4.3 Primeira Reunião Tática', path: '/parte-iv/reuniao-tatica' },
      { id: '44', title: '4.4 Primeiro PAI', path: '/parte-iv/primeiro-pai' },
      { id: '45', title: '4.5 Operações Sustentadas', path: '/parte-iv/operacoes-sustentadas' },
      { id: '46', title: '4.6 Escalada de Recursos', path: '/parte-iv/escalada-recursos' },
      { id: '47', title: '4.7 Transições de Comando', path: '/parte-iv/transicoes-comando' },
    ],
  },
  {
    id: 'parte-v',
    title: 'PARTE V - Ciclo de Planejamento',
    icon: 'RefreshCw',
    path: '/parte-v',
    items: [
      { id: '51', title: '5.1 Visão Geral Ciclo P', path: '/parte-v/visao-geral-ciclo-p' },
      { id: '52', title: '5.2 Estabelecimento de Objetivos', path: '/parte-v/estabelecimento-objetivos' },
      { id: '53', title: '5.3 Reunião Tática', path: '/parte-v/reuniao-tatica' },
      { id: '54', title: '5.4 Reunião de Planejamento', path: '/parte-v/reuniao-planejamento' },
      { id: '55', title: '5.5 Preparação do PAI', path: '/parte-v/preparacao-pai' },
      { id: '56', title: '5.6 Briefing Operacional', path: '/parte-v/briefing-operacional' },
      { id: '57', title: '5.7 Execução e Avaliação', path: '/parte-v/execucao-avaliacao' },
    ],
  },
  {
    id: 'parte-vi',
    title: 'PARTE VI - Desmobilização',
    icon: 'DoorOpen',
    path: '/parte-vi',
    items: [
      { id: '61', title: '6.1 Conceitos de Desmobilização', path: '/parte-vi/conceitos-desmobilizacao' },
      { id: '62', title: '6.2 Responsabilidades', path: '/parte-vi/responsabilidades-desmob' },
      { id: '63', title: '6.3 Plano de Desmobilização', path: '/parte-vi/plano-desmobilizacao' },
      { id: '64', title: '6.4 Formulário SCI 221', path: '/parte-vi/formulario-sci-221' },
      { id: '65', title: '6.5 Encerramento do Incidente', path: '/parte-vi/encerramento-incidente' },
      { id: '66', title: '6.6 Reuniões e AAR', path: '/parte-vi/reunioes-encerramento' },
    ],
  },
  {
    id: 'parte-vii',
    title: 'PARTE VII - Formulários SCI',
    icon: 'ClipboardList',
    path: '/parte-vii',
    items: [
      { id: '71', title: '7.1 Visão Geral (24 Formulários)', path: '/parte-vii/visao-geral-formularios' },
      { id: '72', title: '7.2 Formulários do PAI', path: '/parte-vii/formularios-pai' },
      { id: '73', title: '7.3 Comunicação e Segurança', path: '/parte-vii/formularios-comunicacao' },
      { id: '74', title: '7.4 Formulários Operacionais', path: '/parte-vii/formularios-operacionais' },
      { id: '75', title: '7.5 Formulários Administrativos', path: '/parte-vii/formularios-administrativos' },
      { id: '76', title: '7.6 Formulários CBMMT', path: '/parte-vii/formularios-cbmmt' },
    ],
  },
  {
    id: 'parte-viii',
    title: 'PARTE VIII - Requisitos Sistema',
    icon: 'Code',
    path: '/parte-viii',
    items: [
      { id: '81', title: '8.1 Visão Geral do Sistema', path: '/parte-viii/visao-geral-sistema' },
      { id: '82', title: '8.2 Requisitos Funcionais (30)', path: '/parte-viii/requisitos-funcionais' },
      { id: '83', title: '8.3 Requisitos Não-Funcionais (13)', path: '/parte-viii/requisitos-nao-funcionais' },
      { id: '84', title: '8.4 Roadmap (4 Fases)', path: '/parte-viii/roadmap-implementacao' },
      { id: '85', title: '8.5 Modelo de Dados', path: '/parte-viii/modelo-dados' },
      { id: '86', title: '8.6 Critérios de Aceitação', path: '/parte-viii/criterios-aceitacao' },
    ],
  },
  {
    id: 'recursos',
    title: 'Recursos',
    icon: 'BarChart3',
    path: '/recursos',
    items: [
      { id: 'glossario', title: 'Glossário de Termos', path: '/recursos/glossario' },
      { id: 'referencias', title: 'Referências e Bibliografia', path: '/recursos/referencias' },
      { id: 'galeria-diagramas', title: 'Galeria de Diagramas', path: '/recursos/galeria-diagramas' },
    ],
  },
];

export function getNavigationByPath(path: string): NavigationSection | undefined {
  return navigation.find(section =>
    section.path === path ||
    section.items.some(item => item.path === path)
  );
}

export function getBreadcrumbs(path: string): { label: string; path: string }[] {
  const breadcrumbs: { label: string; path: string }[] = [
    { label: 'Início', path: '/' }
  ];

  for (const section of navigation) {
    if (section.path === path) {
      breadcrumbs.push({ label: section.title, path: section.path });
      break;
    }

    for (const item of section.items) {
      if (item.path === path) {
        breadcrumbs.push({ label: section.title, path: section.path });
        breadcrumbs.push({ label: item.title, path: item.path });
        break;
      }
    }
  }

  return breadcrumbs;
}

export function getAdjacentSections(path: string): { prev?: NavigationItem; next?: NavigationItem } {
  const allItems: NavigationItem[] = [];

  for (const section of navigation) {
    if (section.items.length === 0) {
      allItems.push({ id: section.id, title: section.title, path: section.path });
    } else {
      for (const item of section.items) {
        allItems.push(item);
      }
    }
  }

  const currentIndex = allItems.findIndex(item => item.path === path);

  return {
    prev: currentIndex > 0 ? allItems[currentIndex - 1] : undefined,
    next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : undefined,
  };
}
