import type { Section, Diagram } from '@/data/types';

// Diagrama: O que é o SCI
const diagramOQueESci: Diagram = {
  id: 'sci-overview',
  title: 'Visão Geral do SCI',
  type: 'flowchart',
  code: `flowchart TB
    subgraph SCI["SISTEMA DE COMANDO DE INCIDENTES"]
        direction TB
        CENTRO["SCI"]
    end

    subgraph PAD["PADRONIZACAO"]
        P1["Terminologia<br/>Comum"]
        P2["Processos<br/>Definidos"]
        P3["Formularios<br/>Padrao"]
    end

    subgraph MOD["MODULARIDADE"]
        M1["Expande conforme<br/>necessidade"]
        M2["Contrai quando<br/>simplifica"]
        M3["Adapta-se<br/>dinamicamente"]
    end

    subgraph INT["INTEGRACAO"]
        I1["Multiplas<br/>instituicoes"]
        I2["Comunicacao<br/>unificada"]
        I3["Recursos<br/>compartilhados"]
    end

    subgraph FLEX["FLEXIBILIDADE"]
        F1["Qualquer tipo<br/>de incidente"]
        F2["Qualquer<br/>magnitude"]
        F3["Qualquer<br/>jurisdicao"]
    end

    CENTRO --> PAD
    CENTRO --> MOD
    CENTRO --> INT
    CENTRO --> FLEX

    classDef centroStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef padStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef modStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef intStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef flexStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF

    class CENTRO centroStyle
    class P1,P2,P3 padStyle
    class M1,M2,M3 modStyle
    class I1,I2,I3 intStyle
    class F1,F2,F3 flexStyle`,
  description: 'Diagrama mostrando as principais características do Sistema de Comando de Incidentes'
};

// Diagrama: Linha do tempo do SCI
const diagramHistorico: Diagram = {
  id: 'sci-timeline',
  title: 'Evolução Histórica do SCI',
  type: 'timeline',
  code: `timeline
    title Historia do Sistema de Comando de Incidentes
    section EUA
      1970 : Incendios devastadores California
      1972 : Criacao do FIRESCOPE
      1980 : Adocao pelo USFS
      2001 : Ataques 11 de Setembro
      2004 : Criacao do NIMS
    section Brasil
      1990 : Acordo USFS-IBAMA
      1991 : Primeiros treinamentos
      2009 : PRONAFOGO e CIMAN
      2024 : Manuais SCI 100/200
      2025 : Manual SCI 300`,
  description: 'Linha do tempo da evolução do SCI desde sua criação até os dias atuais'
};

// Diagrama: Quando usar SCI
const diagramQuandoUsarSci: Diagram = {
  id: 'quando-usar-sci',
  title: 'Critérios para Ativação do SCI',
  type: 'flowchart',
  code: `flowchart TD
    A[Incidente Iniciado] --> B{Avaliacao de Criterios}

    B --> C{Complexidade?}
    C -->|Multiplas frentes| SIM[Ativar SCI]
    C -->|Frente unica| D{Duracao?}

    D -->|> 12 horas| SIM
    D -->|< 12 horas| E{Recursos?}

    E -->|4+ IRTs| SIM
    E -->|< 4 IRTs| F{Multiagencias?}

    F -->|Sim| SIM
    F -->|Nao| G{Visibilidade?}

    G -->|Alta| SIM
    G -->|Baixa| NAO[Nao Ativar]

    SIM --> H[Estabelecer Comando]
    NAO --> I[Resposta Convencional]

    style SIM fill:#059669,color:#fff
    style NAO fill:#6B7280,color:#fff
    style H fill:#DC2626,color:#fff`,
  description: 'Fluxograma de decisão para determinar quando ativar o SCI'
};

// Diagrama: 14 Princípios do SCI
const diagramPrincipios: Diagram = {
  id: 'principios-sci',
  title: '14 Princípios do SCI',
  type: 'flowchart',
  code: `flowchart TB
    subgraph TITULO["14 PRINCIPIOS DO SCI"]
        direction TB
    end

    subgraph ESTRUTURA["ESTRUTURA"]
        E1["1. Terminologia<br/>Comum"]
        E2["2. Organizacao<br/>Modular"]
        E3["3. Instalacoes<br/>Padronizadas"]
        E4["4. Cadeia de<br/>Comando"]
        E5["5. Unidade de<br/>Comando"]
    end

    subgraph PLANEJAMENTO["PLANEJAMENTO"]
        P1["6. Gerenciamento<br/>por Objetivos"]
        P2["7. Plano de Acao<br/>do Incidente"]
        P3["8. Amplitude<br/>de Controle"]
    end

    subgraph RECURSOS["RECURSOS"]
        R1["9. Gerenciamento<br/>Coordenado"]
        R2["10. Controle<br/>Efetivo"]
        R3["11. Mobilizacao"]
        R4["12. Desmobilizacao"]
    end

    subgraph INTEGRACAO["INTEGRACAO"]
        I1["13. Comunicacoes<br/>Integradas"]
        I2["14. Comando<br/>Unificado"]
    end

    TITULO --> ESTRUTURA
    TITULO --> PLANEJAMENTO
    TITULO --> RECURSOS
    TITULO --> INTEGRACAO

    classDef estStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef planStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef recStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef intStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF

    class E1,E2,E3,E4,E5 estStyle
    class P1,P2,P3 planStyle
    class R1,R2,R3,R4 recStyle
    class I1,I2 intStyle`,
  description: 'Os 14 princípios fundamentais do Sistema de Comando de Incidentes organizados por categoria'
};

// Diagrama: Estrutura modular
const diagramEstruturaModular: Diagram = {
  id: 'estrutura-modular',
  title: 'Expansão Modular do SCI',
  type: 'flowchart',
  code: `flowchart TB
    subgraph PEQUENO["Incidente Pequeno"]
        CI1[CI]
    end

    subgraph MEDIO["Incidente Medio"]
        CI2[CI]
        CI2 --> OSeg2[OSeg]
        CI2 --> SOp2[S. Operacoes]
        CI2 --> SLog2[S. Logistica]
    end

    subgraph GRANDE["Incidente Grande"]
        CI3[CI]
        CI3 --> OSeg3[OSeg]
        CI3 --> OIP3[OIP]
        CI3 --> OLig3[OLig]
        CI3 --> SOp3[S. Operacoes]
        CI3 --> SPlan3[S. Planejamento]
        CI3 --> SLog3[S. Logistica]
        CI3 --> SAdmin3[S. Admin/Fin]

        SOp3 --> DivN[Div. Norte]
        SOp3 --> DivS[Div. Sul]
        SOp3 --> GrMaq[Gr. Maquinas]
    end

    PEQUENO --> MEDIO
    MEDIO --> GRANDE

    style CI1 fill:#DC2626,color:#fff
    style CI2 fill:#DC2626,color:#fff
    style CI3 fill:#DC2626,color:#fff`,
  description: 'Demonstração de como a estrutura do SCI se expande conforme a complexidade do incidente'
};

export const oQueESci: Section = {
  id: 'o-que-e-sci',
  title: 'O Que é o Sistema de Comando de Incidentes',
  slug: 'o-que-e-sci',
  part: 1,
  content: `## O que é o Sistema de Comando de Incidentes

O Sistema de Comando de Incidentes (SCI) é uma **ferramenta de gerenciamento padronizada** para todos os tipos de incidentes, permitindo adotar uma estrutura organizacional integrada que:

### Características Principais

- **Padroniza** processos de gerenciamento
- **Funciona** independente da natureza ou magnitude do incidente
- **Aplica-se** a incidentes únicos ou múltiplos simultâneos
- **Integra** múltiplas jurisdições e instituições
- **Adapta-se** dinamicamente à complexidade

### Definição Formal

> "Sistema de gerenciamento de incidentes padronizado que permite ao usuário adotar uma estrutura organizacional integrada para suprir as complexidades e demandas de incidentes únicos ou múltiplos, independente das barreiras jurisdicionais."

### O que o SCI NÃO é

- Sistema hierárquico rígido militar
- Processo burocrático que atrasa resposta
- Substituição de protocolos existentes
- Aplicável apenas a grandes incidentes
- Exclusivo para incêndios florestais

### O que o SCI É

- Ferramenta flexível e modular
- Estrutura que acelera coordenação
- Complemento aos protocolos existentes
- Escalonável desde pequenos até grandes incidentes
- Aplicável a qualquer tipo de emergência

### Benefícios Imediatos

1. **Comando único e claro** em incidentes complexos
2. **Estrutura modular** que se adapta à magnitude do incidente
3. **Processos padronizados** de planejamento e execução
4. **Comunicações integradas** entre todas as partes
5. **Rastreamento efetivo** de recursos humanos e materiais
6. **Documentação completa** de ações e decisões
7. **Segurança** como prioridade máxima

---

### O SCI no CBMMT

O Corpo de Bombeiros Militar do Mato Grosso (CBMMT) adota o SCI como ferramenta principal de gestão de incidentes, com foco especial na **resposta a incêndios florestais**, dado o contexto ambiental do estado.

**Por que o SCI é essencial para o CBMMT:**

- O Mato Grosso abrange três biomas críticos: **Amazônia, Cerrado e Pantanal**
- As Temporadas de Incêndio Florestal (TIF) exigem coordenação de **múltiplas agências** (ICMBio, IBAMA, SEMA, Defesa Civil, Forças Armadas)
- Incidentes de grande porte demandam **Comando Unificado** interinstitucional
- A dispersão geográfica das unidades exige **padronização de procedimentos**

**Aplicação específica em incêndio florestal:**

O SCI é aplicado pelo CBMMT de forma integrada ao **Plano Operativo de Temporada de Incêndio Florestal (POTIF)**, que estabelece:

- Níveis de resposta escalonados (1 a 4) com ativação progressiva de recursos
- Estrutura de Salas de Situação (SSC/SSD) para monitoramento e coordenação
- Integração com a plataforma **ARGOS** para gestão operacional digital
- Mobilização de Instalações de Resposta Tática (IRTs) em áreas estratégicas
- Protocolos de detecção, classificação e resposta rápida a focos de calor

> **NOTA:** Embora o foco principal no CBMMT seja incêndio florestal, o SCI é aplicável a qualquer tipo de incidente atendido pela corporação, incluindo operações de busca e salvamento, desastres naturais e apoio à defesa civil.`,
  diagrams: [diagramOQueESci],
};

export const historico: Section = {
  id: 'historico',
  title: 'Histórico e Evolução do SCI',
  slug: 'historico',
  part: 1,
  content: `## Origem e História do SCI

### Década de 1970 - Nascimento na Califórnia

Em 1970, uma série de **incêndios florestais devastadores** na Califórnia (EUA) resultou em:
- 16 mortes
- Destruição de centenas de residências

A análise posterior identificou problemas graves:
- Falta de coordenação entre agências
- Comunicações incompatíveis
- Estrutura organizacional confusa
- Planejamento inadequado
- Uso ineficiente de recursos

### FIRESCOPE (1972)

O Congresso Americano criou o programa **FIRESCOPE** (Firefighting Resources of California Organized for Potential Emergencies) para desenvolver um sistema que resolvesse estes problemas.

**Resultado:** Nasceu o Incident Command System (ICS), testado e refinado em incêndios reais durante a década de 1970.

### Expansão Nacional (1980-2000)

- Adotado pelo Serviço Florestal dos EUA (USFS)
- Expandido para outros tipos de incidentes (furacões, terremotos, desastres)
- Integrado à resposta de emergência nacional

### Pós 11 de Setembro (2001-2004)

Após os ataques às Torres Gêmeas em Nova York, o governo americano reconheceu a necessidade de padronização nacional:

| Ano | Marco |
|-----|-------|
| 2003 | Criação do Department of Homeland Security (DHS) |
| 2004 | Criação do National Incident Management System (NIMS) |
| 2004 | SCI/ICS incorporado ao NIMS como estrutura padrão |

### Aplicação no Brasil

**Primeiros Passos (1990-2000):**
- 1990: Acordo de Cooperação Técnica USFS-IBAMA
- 1991: Primeiros treinamentos no Brasil

**Implementação Gradual (2000-2010):**

| Instituição | Nomenclatura |
|-------------|--------------|
| CBMDF | SCI (Sistema de Comando de Incidentes) |
| Defesa Civil | SCO (Sistema de Comando em Operações) |
| CBMSP | SICOE (Sistema de Comando em Operações de Emergência) |
| Setor Privado | ICS ou IMS |

**Padronização Nacional (2020-Presente):**
- 2024: Manual SCI 100 - Introdução ao Sistema de Comando de Incidentes
- 2024: Manual SCI 200 - Curso Básico para Resposta Inicial
- 2025: Manual SCI 300 - Curso Intermediário para Incidentes em Expansão`,
  diagrams: [diagramHistorico],
};

export const conceitos: Section = {
  id: 'conceitos',
  title: 'Conceitos Fundamentais',
  slug: 'conceitos',
  part: 1,
  content: `## Conceitos Fundamentais do SCI

### Terminologia Comum

O SCI utiliza **termos padronizados** para funções organizacionais, instalações, recursos e procedimentos.

| Termo Correto | Não Usar |
|---------------|----------|
| Comandante do Incidente | Coordenador, Chefe |
| Posto de Comando | Base, Quartel-general |
| Seção de Operações | Equipe tática |
| Período Operacional | Turno, Plantão |

**Benefícios:**
- Elimina confusões de comunicação
- Facilita integração entre instituições
- Acelera transferência de comando
- Permite documentação clara

### Período Operacional

O **período operacional** é o intervalo de tempo planejado para execução do Plano de Ação do Incidente (PAI).

- Duração típica: **12 horas**
- Pode variar conforme necessidade operacional
- Define ciclo de planejamento e execução

### Instalações Padronizadas

| Instalação | Função |
|------------|--------|
| **Posto de Comando (PC)** | Localização do CI e staff, centro de decisões |
| **Base** | Recursos entre atribuições, alimentação, suprimentos |
| **Acampamento** | Repouso prolongado, dormitório |
| **Área de Espera** | Recursos disponíveis aguardando designação |
| **Helibase/Heliponto** | Apoio a operações aéreas |

### Status de Recursos

Todo recurso no incidente possui um **status** definido:

1. **Disponível** - Pronto para atribuição imediata
2. **Designado** - Em atividade específica
3. **Fora de Serviço** - Indisponível (manutenção, descanso)

### Check-in e Check-out

**Check-in:** Processo formal de registro ao chegar no incidente
- Identifica o recurso
- Registra capacidades
- Atribui status inicial

**Check-out:** Processo formal de liberação do incidente
- Registra horas trabalhadas
- Devolve equipamentos
- Finaliza participação`,
  diagrams: [diagramQuandoUsarSci],
};

export const principios: Section = {
  id: 'principios',
  title: 'Os 14 Princípios do SCI',
  slug: 'principios',
  part: 1,
  content: `## Os 14 Princípios Fundamentais do SCI

O SCI fundamenta-se em **14 características de gerenciamento** estabelecidas pelo NIMS (National Incident Management System). Estes princípios garantem coordenação efetiva independente da natureza ou magnitude do incidente.

### 1. Terminologia Comum
Uso de termos padronizados para funções, instalações, recursos e procedimentos.

### 2. Organização Modular
Estrutura que se expande ou contrai conforme a necessidade do incidente.

### 3. Gerenciamento por Objetivos
Toda ação é orientada por objetivos claros, específicos e mensuráveis (SMART).

### 4. Plano de Ação do Incidente (PAI)
Documento formal que consolida objetivos, estratégias, táticas, organização e recursos.

### 5. Amplitude de Controle
Número adequado de subordinados por supervisor (3-7, ideal 5).

### 6. Instalações Padronizadas
Locais pré-definidos com funções específicas (PC, Base, Acampamento, Área de Espera).

### 7. Gerenciamento Coordenado de Recursos
Sistema único de rastreamento, alocação e utilização de todos os recursos.

### 8. Comunicações Integradas
Plano de comunicação que integra todos os participantes com protocolos interoperáveis.

### 9. Estabelecimento e Transferência de Comando
Processo formal de assumir, manter e transferir comando do incidente.

### 10. Comando Unificado
Múltiplas instituições com jurisdição compartilham comando do incidente.

### 11. Cadeia de Comando
Linha ordenada de autoridade e supervisão do topo ao campo.

### 12. Unidade de Comando
Cada pessoa reporta-se a apenas um supervisor direto.

### 13. Controle Efetivo de Recursos
Recursos posicionados, movidos e liberados de forma estratégica.

### 14. Mobilização e Desmobilização
Processos ordenados de trazer e liberar recursos do incidente.

---

### Objetivos SMART

Todo objetivo no SCI deve ser:

| Letra | Significado | Exemplo |
|-------|-------------|---------|
| **S** | Específico | "Conter flanco norte" |
| **M** | Mensurável | "Linha de 2km construída" |
| **A** | Atingível | Recursos disponíveis |
| **R** | Relevante | Prioridade operacional |
| **T** | Temporal | "Até as 18:00" |

**Exemplo de objetivo RUIM:**
> "Combater o fogo"

**Exemplo de objetivo BOM:**
> "Conter avanço do fogo no flanco norte até as 18:00 usando linha de controle na estrada MT-100"`,
  diagrams: [diagramPrincipios],
};

export const caracteristicas: Section = {
  id: 'caracteristicas',
  title: 'Características do SCI',
  slug: 'caracteristicas',
  part: 1,
  content: `## Características Operacionais do SCI

### Organização Modular

O SCI permite **expansão gradual** conforme a complexidade do incidente aumenta.

**Princípio:** "Ativa apenas o necessário, quando necessário"

#### Incidente Pequeno
\`\`\`
CI (sozinho, acumula todas funções)
\`\`\`

#### Incidente Médio
\`\`\`
CI
├── OSeg
├── Seção de Operações
└── Seção de Logística
\`\`\`

#### Incidente Grande
\`\`\`
CI
├── OSeg
├── OIP
├── OLig
├── Seção de Operações
│   ├── Divisão Norte
│   ├── Divisão Sul
│   └── Grupo de Máquinas
├── Seção de Planejamento
├── Seção de Logística
└── Seção de Administração/Finanças
\`\`\`

### Amplitude de Controle

**Regra:** 3 a 7 subordinados por supervisor (ideal: 5)

**Quando exceder 7 subordinados:**
- Criar nível intermediário (Ramo, Divisão, Grupo)
- Delegar autoridade
- Redistribuir recursos

### Cadeia de Comando

Exemplo de cadeia de comando completa:

\`\`\`
CI → CSOp → Supervisor Divisão → Líder Equipe → Combatente
\`\`\`

**Benefícios:**
- Autoridade clara
- Fluxo de informação organizado
- Responsabilidades definidas

### Unidade de Comando

**Princípio:** "Um subordinado, um supervisor"

**Evita:**
- Conflito de ordens
- Confusão de responsabilidades
- Sobrecarga de subordinados

### Comunicações Integradas

**Níveis de Comunicação:**

| Nível | Função |
|-------|--------|
| **Tático** | Entre combatentes em campo |
| **Comando** | Entre CI e chefes de seção |
| **Coordenação** | Com Salas de Situação |
| **Aéreo** | Com aeronaves |

### Comando Unificado

Aplicado quando múltiplas instituições têm **jurisdição compartilhada**.

**Exemplo:** Incêndio em UC federal que atinge terras estaduais
- CI ICMBio + CI CBMMT
- Objetivos definidos conjuntamente
- Estrutura única de operações, planejamento, logística

**Benefícios:**
- Respeita autoridades legais
- Evita conflitos de comando
- Otimiza recursos
- Apresenta resposta unificada`,
  diagrams: [diagramEstruturaModular],
};

// Exportar todas as seções da Parte I
export const parteISections: Section[] = [
  oQueESci,
  historico,
  conceitos,
  principios,
  caracteristicas,
];

// Mapa de slug para seção
export const parteISectionMap: Record<string, Section> = {
  'o-que-e-sci': oQueESci,
  'historico': historico,
  'conceitos': conceitos,
  'principios': principios,
  'caracteristicas': caracteristicas,
};
