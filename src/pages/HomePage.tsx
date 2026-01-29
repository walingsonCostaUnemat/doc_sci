import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Building2,
  Shield,
  Settings,
  RefreshCw,
  DoorOpen,
  ClipboardList,
  Code,
  ArrowRight,
  FileText,
  Users,
  Target
} from 'lucide-react';

const sections = [
  {
    id: 'parte-i',
    title: 'PARTE I',
    subtitle: 'Fundamentos SCI',
    description: 'O que é o SCI, histórico, conceitos, 14 princípios e características do sistema.',
    icon: BookOpen,
    path: '/parte-i/o-que-e-sci',
    color: 'bg-blue-500',
  },
  {
    id: 'parte-ii',
    title: 'PARTE II',
    subtitle: 'Estrutura Organizacional',
    description: 'Estrutura de Resposta: Comando, Seções de Operações, Planejamento, Logística e Admin.',
    icon: Building2,
    path: '/parte-ii/visao-geral-eor',
    color: 'bg-green-500',
  },
  {
    id: 'parte-iii',
    title: 'PARTE III',
    subtitle: 'Contexto CBMMT',
    description: 'Estrutura do CBMMT, POTIF 2025, integração SCI e níveis de complexidade.',
    icon: Shield,
    path: '/parte-iii/estrutura-cbmmt',
    color: 'bg-red-500',
  },
  {
    id: 'parte-iv',
    title: 'PARTE IV',
    subtitle: 'Fluxo Operacional',
    description: 'As 7 fases: ativação, estabelecimento, reunião tática, PAI, operações e transições.',
    icon: Settings,
    path: '/parte-iv/ativacao-sci',
    color: 'bg-orange-500',
  },
  {
    id: 'parte-v',
    title: 'PARTE V',
    subtitle: 'Ciclo de Planejamento',
    description: 'As 14 fases do Ciclo P: entendimento, planejamento, preparação e execução.',
    icon: RefreshCw,
    path: '/parte-v/visao-geral-ciclo-p',
    color: 'bg-purple-500',
  },
  {
    id: 'parte-vi',
    title: 'PARTE VI',
    subtitle: 'Desmobilização',
    description: 'Planejamento, fases, check-out de recursos, encerramento e AAR.',
    icon: DoorOpen,
    path: '/parte-vi/conceitos-desmobilizacao',
    color: 'bg-teal-500',
  },
  {
    id: 'parte-vii',
    title: 'PARTE VII',
    subtitle: 'Formulários SCI',
    description: 'Os 24 formulários SCI organizados por categoria com guia rápido.',
    icon: ClipboardList,
    path: '/parte-vii/visao-geral-formularios',
    color: 'bg-indigo-500',
  },
  {
    id: 'parte-viii',
    title: 'PARTE VIII',
    subtitle: 'Requisitos Sistema',
    description: '30 requisitos funcionais, 13 não-funcionais, modelo de dados e roadmap.',
    icon: Code,
    path: '/parte-viii/visao-geral-sistema',
    color: 'bg-pink-500',
  },
];

const stats = [
  { label: 'Tópicos', value: '95+', icon: FileText },
  { label: 'Formulários', value: '24', icon: ClipboardList },
  { label: 'Requisitos', value: '43', icon: Target },
  { label: 'Comissão', value: '11', icon: Users },
];

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="hero-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
          <Shield className="h-4 w-4" />
          CBMMT - Corpo de Bombeiros Militar do Mato Grosso
        </div>

        <h1 className="hero-title text-4xl font-bold tracking-tight sm:text-5xl">
          Sistema de Comando de
          <span className="text-primary-500"> Incidentes</span>
        </h1>

        <p className="hero-description mt-4 text-lg max-w-2xl mx-auto">
          Documentação completa do módulo SCI integrado à Plataforma ARGOS.
          Guia de referência para operações de resposta a incidentes florestais.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/parte-i/o-que-e-sci"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium"
          >
            Começar a leitura
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/recursos/galeria-diagramas"
            className="btn-outline inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium"
          >
            Ver diagramas
          </Link>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card rounded-lg p-4 text-center shadow-sm border"
          >
            <stat.icon className="h-6 w-6 mx-auto text-primary-500 mb-2" />
            <div className="stat-value text-2xl font-bold">
              {stat.value}
            </div>
            <div className="stat-label text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.section>

      {/* Sections Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="section-heading text-2xl font-bold mb-6">
          Conteúdo da Documentação
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={section.path}
                className="section-card group flex gap-4 rounded-lg p-4 shadow-sm border"
              >
                <div className={`${section.color} rounded-lg p-3 h-fit`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="section-card-label text-xs font-semibold uppercase tracking-wide">
                      {section.title}
                    </span>
                  </div>
                  <h3 className="section-card-title font-semibold">
                    {section.subtitle}
                  </h3>
                  <p className="section-card-description mt-1 text-sm line-clamp-2">
                    {section.description}
                  </p>
                </div>
                <ArrowRight className="section-card-arrow h-5 w-5 flex-shrink-0 mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="quick-links rounded-lg p-6"
      >
        <h2 className="quick-links-title text-lg font-semibold mb-4">
          Acesso Rápido
        </h2>
        <div className="grid gap-2 sm:grid-cols-3">
          <Link
            to="/parte-i/principios"
            className="quick-link rounded-md px-3 py-2 text-sm"
          >
            14 Princípios do SCI
          </Link>
          <Link
            to="/parte-v/visao-geral-ciclo-p"
            className="quick-link rounded-md px-3 py-2 text-sm"
          >
            Ciclo de Planejamento
          </Link>
          <Link
            to="/parte-vii/formularios-cbmmt"
            className="quick-link rounded-md px-3 py-2 text-sm"
          >
            Formulários CBMMT
          </Link>
          <Link
            to="/parte-iii/cenarios-niveis"
            className="quick-link rounded-md px-3 py-2 text-sm"
          >
            Níveis de Complexidade
          </Link>
          <Link
            to="/parte-viii/requisitos-funcionais"
            className="quick-link rounded-md px-3 py-2 text-sm"
          >
            30 Requisitos Funcionais
          </Link>
          <Link
            to="/recursos/glossario"
            className="quick-link rounded-md px-3 py-2 text-sm"
          >
            Glossário de Termos
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
