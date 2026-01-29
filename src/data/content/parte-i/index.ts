import type { Section, Diagram } from '@/data/types';

// Diagrama: O que é o SCI
const diagramOQueESci: Diagram = {
  id: 'sci-overview',
  title: 'Visao Geral do SCI',
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
  description: 'Diagrama mostrando as principais caracteristicas do Sistema de Comando de Incidentes'
};

// Diagrama: Linha do tempo do SCI
const diagramHistorico: Diagram = {
  id: 'sci-timeline',
  title: 'Evolucao Historica do SCI',
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
  description: 'Linha do tempo da evolucao do SCI desde sua criacao ate os dias atuais'
};

// Diagrama: Quando usar SCI
const diagramQuandoUsarSci: Diagram = {
  id: 'quando-usar-sci',
  title: 'Criterios para Ativacao do SCI',
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
  description: 'Fluxograma de decisao para determinar quando ativar o SCI'
};

// Diagrama: 14 Principios do SCI
const diagramPrincipios: Diagram = {
  id: 'principios-sci',
  title: '14 Principios do SCI',
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
  description: 'Os 14 principios fundamentais do Sistema de Comando de Incidentes organizados por categoria'
};

// Diagrama: Estrutura modular
const diagramEstruturaModular: Diagram = {
  id: 'estrutura-modular',
  title: 'Expansao Modular do SCI',
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
  description: 'Demonstracao de como a estrutura do SCI se expande conforme a complexidade do incidente'
};

export const oQueESci: Section = {
  id: 'o-que-e-sci',
  title: 'O Que e o Sistema de Comando de Incidentes',
  slug: 'o-que-e-sci',
  part: 1,
  content: `## O que e o Sistema de Comando de Incidentes

O Sistema de Comando de Incidentes (SCI) e uma **ferramenta de gerenciamento padronizada** para todos os tipos de incidentes, permitindo adotar uma estrutura organizacional integrada que:

### Caracteristicas Principais

- **Padroniza** processos de gerenciamento
- **Funciona** independente da natureza ou magnitude do incidente
- **Aplica-se** a incidentes unicos ou multiplos simultaneos
- **Integra** multiplas jurisdicoes e instituicoes
- **Adapta-se** dinamicamente a complexidade

### Definicao Formal

> "Sistema de gerenciamento de incidentes padronizado que permite ao usuario adotar uma estrutura organizacional integrada para suprir as complexidades e demandas de incidentes unicos ou multiplos, independente das barreiras jurisdicionais."

### O que o SCI NAO e

- Sistema hierarquico rigido militar
- Processo burocratico que atrasa resposta
- Substituicao de protocolos existentes
- Aplicavel apenas a grandes incidentes
- Exclusivo para incendios florestais

### O que o SCI E

- Ferramenta flexivel e modular
- Estrutura que acelera coordenacao
- Complemento aos protocolos existentes
- Escalavel desde pequenos ate grandes incidentes
- Aplicavel a qualquer tipo de emergencia

### Beneficios Imediatos

1. **Comando unico e claro** em incidentes complexos
2. **Estrutura modular** que se adapta a magnitude do incidente
3. **Processos padronizados** de planejamento e execucao
4. **Comunicacoes integradas** entre todas as partes
5. **Rastreamento efetivo** de recursos humanos e materiais
6. **Documentacao completa** de acoes e decisoes
7. **Seguranca** como prioridade maxima

---

### O SCI no CBMMT

O Corpo de Bombeiros Militar do Mato Grosso (CBMMT) adota o SCI como ferramenta principal de gestao de incidentes, com foco especial na **resposta a incendios florestais**, dado o contexto ambiental do estado.

**Por que o SCI e essencial para o CBMMT:**

- O Mato Grosso abrange tres biomas criticos: **Amazonia, Cerrado e Pantanal**
- As Temporadas de Incendio Florestal (TIF) exigem coordenacao de **multiplas agencias** (ICMBio, IBAMA, SEMA, Defesa Civil, Forcas Armadas)
- Incidentes de grande porte demandam **Comando Unificado** interinstitucional
- A dispersao geografica das unidades exige **padronizacao de procedimentos**

**Aplicacao especifica em incendio florestal:**

O SCI e aplicado pelo CBMMT de forma integrada ao **Plano Operativo de Temporada de Incendio Florestal (POTIF)**, que estabelece:

- Niveis de resposta escalonados (1 a 4) com ativacao progressiva de recursos
- Estrutura de Salas de Situacao (SSC/SSD) para monitoramento e coordenacao
- Integracao com a plataforma **ARGOS** para gestao operacional digital
- Mobilizacao de Instalacoes de Resposta Tatica (IRTs) em areas estrategicas
- Protocolos de deteccao, classificacao e resposta rapida a focos de calor

> **NOTA:** Embora o foco principal no CBMMT seja incendio florestal, o SCI e aplicavel a qualquer tipo de incidente atendido pela corporacao, incluindo operacoes de busca e salvamento, desastres naturais e apoio a defesa civil.`,
  diagrams: [diagramOQueESci],
};

export const historico: Section = {
  id: 'historico',
  title: 'Historico e Evolucao do SCI',
  slug: 'historico',
  part: 1,
  content: `## Origem e Historia do SCI

### Decada de 1970 - Nascimento na California

Em 1970, uma serie de **incendios florestais devastadores** na California (EUA) resultou em:
- 16 mortes
- Destruicao de centenas de residencias

A analise posterior identificou problemas graves:
- Falta de coordenacao entre agencias
- Comunicacoes incompativeis
- Estrutura organizacional confusa
- Planejamento inadequado
- Uso ineficiente de recursos

### FIRESCOPE (1972)

O Congresso Americano criou o programa **FIRESCOPE** (Firefighting Resources of California Organized for Potential Emergencies) para desenvolver um sistema que resolvesse estes problemas.

**Resultado:** Nasceu o Incident Command System (ICS), testado e refinado em incendios reais durante a decada de 1970.

### Expansao Nacional (1980-2000)

- Adotado pelo Servico Florestal dos EUA (USFS)
- Expandido para outros tipos de incidentes (furacoes, terremotos, desastres)
- Integrado a resposta de emergencia nacional

### Pos 11 de Setembro (2001-2004)

Apos os ataques as Torres Gemeas em Nova York, o governo americano reconheceu a necessidade de padronizacao nacional:

| Ano | Marco |
|-----|-------|
| 2003 | Criacao do Department of Homeland Security (DHS) |
| 2004 | Criacao do National Incident Management System (NIMS) |
| 2004 | SCI/ICS incorporado ao NIMS como estrutura padrao |

### Aplicacao no Brasil

**Primeiros Passos (1990-2000):**
- 1990: Acordo de Cooperacao Tecnica USFS-IBAMA
- 1991: Primeiros treinamentos no Brasil

**Implementacao Gradual (2000-2010):**

| Instituicao | Nomenclatura |
|-------------|--------------|
| CBMDF | SCI (Sistema de Comando de Incidentes) |
| Defesa Civil | SCO (Sistema de Comando em Operacoes) |
| CBMSP | SICOE (Sistema de Comando em Operacoes de Emergencia) |
| Setor Privado | ICS ou IMS |

**Padronizacao Nacional (2020-Presente):**
- 2024: Manual SCI 100 - Introducao ao Sistema de Comando de Incidentes
- 2024: Manual SCI 200 - Curso Basico para Resposta Inicial
- 2025: Manual SCI 300 - Curso Intermediario para Incidentes em Expansao`,
  diagrams: [diagramHistorico],
};

export const conceitos: Section = {
  id: 'conceitos',
  title: 'Conceitos Fundamentais',
  slug: 'conceitos',
  part: 1,
  content: `## Conceitos Fundamentais do SCI

### Terminologia Comum

O SCI utiliza **termos padronizados** para funcoes organizacionais, instalacoes, recursos e procedimentos.

| Termo Correto | Nao Usar |
|---------------|----------|
| Comandante do Incidente | Coordenador, Chefe |
| Posto de Comando | Base, Quartel-general |
| Secao de Operacoes | Equipe tatica |
| Periodo Operacional | Turno, Plantao |

**Beneficios:**
- Elimina confusoes de comunicacao
- Facilita integracao entre instituicoes
- Acelera transferencia de comando
- Permite documentacao clara

### Periodo Operacional

O **periodo operacional** e o intervalo de tempo planejado para execucao do Plano de Acao do Incidente (PAI).

- Duracao tipica: **12 horas**
- Pode variar conforme necessidade operacional
- Define ciclo de planejamento e execucao

### Instalacoes Padronizadas

| Instalacao | Funcao |
|------------|--------|
| **Posto de Comando (PC)** | Localizacao do CI e staff, centro de decisoes |
| **Base** | Recursos entre atribuicoes, alimentacao, suprimentos |
| **Acampamento** | Repouso prolongado, dormitorio |
| **Area de Espera** | Recursos disponiveis aguardando designacao |
| **Helibase/Heliponto** | Apoio a operacoes aereas |

### Status de Recursos

Todo recurso no incidente possui um **status** definido:

1. **Disponivel** - Pronto para atribuicao imediata
2. **Designado** - Em atividade especifica
3. **Fora de Servico** - Indisponivel (manutencao, descanso)

### Check-in e Check-out

**Check-in:** Processo formal de registro ao chegar no incidente
- Identifica o recurso
- Registra capacidades
- Atribui status inicial

**Check-out:** Processo formal de liberacao do incidente
- Registra horas trabalhadas
- Devolve equipamentos
- Finaliza participacao`,
  diagrams: [diagramQuandoUsarSci],
};

export const principios: Section = {
  id: 'principios',
  title: 'Os 14 Principios do SCI',
  slug: 'principios',
  part: 1,
  content: `## Os 14 Principios Fundamentais do SCI

O SCI fundamenta-se em **14 caracteristicas de gerenciamento** estabelecidas pelo NIMS (National Incident Management System). Estes principios garantem coordenacao efetiva independente da natureza ou magnitude do incidente.

### 1. Terminologia Comum
Uso de termos padronizados para funcoes, instalacoes, recursos e procedimentos.

### 2. Organizacao Modular
Estrutura que se expande ou contrai conforme a necessidade do incidente.

### 3. Gerenciamento por Objetivos
Toda acao e orientada por objetivos claros, especificos e mensuraveis (SMART).

### 4. Plano de Acao do Incidente (PAI)
Documento formal que consolida objetivos, estrategias, taticas, organizacao e recursos.

### 5. Amplitude de Controle
Numero adequado de subordinados por supervisor (3-7, ideal 5).

### 6. Instalacoes Padronizadas
Locais pre-definidos com funcoes especificas (PC, Base, Acampamento, Area de Espera).

### 7. Gerenciamento Coordenado de Recursos
Sistema unico de rastreamento, alocacao e utilizacao de todos os recursos.

### 8. Comunicacoes Integradas
Plano de comunicacao que integra todos os participantes com protocolos interoperaveis.

### 9. Estabelecimento e Transferencia de Comando
Processo formal de assumir, manter e transferir comando do incidente.

### 10. Comando Unificado
Multiplas instituicoes com jurisdicao compartilham comando do incidente.

### 11. Cadeia de Comando
Linha ordenada de autoridade e supervisao do topo ao campo.

### 12. Unidade de Comando
Cada pessoa reporta-se a apenas um supervisor direto.

### 13. Controle Efetivo de Recursos
Recursos posicionados, movidos e liberados de forma estrategica.

### 14. Mobilizacao e Desmobilizacao
Processos ordenados de trazer e liberar recursos do incidente.

---

### Objetivos SMART

Todo objetivo no SCI deve ser:

| Letra | Significado | Exemplo |
|-------|-------------|---------|
| **S** | Especifico | "Conter flanco norte" |
| **M** | Mensuravel | "Linha de 2km construida" |
| **A** | Atingivel | Recursos disponiveis |
| **R** | Relevante | Prioridade operacional |
| **T** | Temporal | "Ate as 18:00" |

**Exemplo de objetivo RUIM:**
> "Combater o fogo"

**Exemplo de objetivo BOM:**
> "Conter avanco do fogo no flanco norte ate as 18:00 usando linha de controle na estrada MT-100"`,
  diagrams: [diagramPrincipios],
};

export const caracteristicas: Section = {
  id: 'caracteristicas',
  title: 'Caracteristicas do SCI',
  slug: 'caracteristicas',
  part: 1,
  content: `## Caracteristicas Operacionais do SCI

### Organizacao Modular

O SCI permite **expansao gradual** conforme a complexidade do incidente aumenta.

**Principio:** "Ativa apenas o necessario, quando necessario"

#### Incidente Pequeno
\`\`\`
CI (sozinho, acumula todas funcoes)
\`\`\`

#### Incidente Medio
\`\`\`
CI
├── OSeg
├── Secao de Operacoes
└── Secao de Logistica
\`\`\`

#### Incidente Grande
\`\`\`
CI
├── OSeg
├── OIP
├── OLig
├── Secao de Operacoes
│   ├── Divisao Norte
│   ├── Divisao Sul
│   └── Grupo de Maquinas
├── Secao de Planejamento
├── Secao de Logistica
└── Secao de Administracao/Financas
\`\`\`

### Amplitude de Controle

**Regra:** 3 a 7 subordinados por supervisor (ideal: 5)

**Quando exceder 7 subordinados:**
- Criar nivel intermediario (Ramo, Divisao, Grupo)
- Delegar autoridade
- Redistribuir recursos

### Cadeia de Comando

Exemplo de cadeia de comando completa:

\`\`\`
CI → CSOp → Supervisor Divisao → Lider Equipe → Combatente
\`\`\`

**Beneficios:**
- Autoridade clara
- Fluxo de informacao organizado
- Responsabilidades definidas

### Unidade de Comando

**Principio:** "Um subordinado, um supervisor"

**Evita:**
- Conflito de ordens
- Confusao de responsabilidades
- Sobrecarga de subordinados

### Comunicacoes Integradas

**Niveis de Comunicacao:**

| Nivel | Funcao |
|-------|--------|
| **Tatico** | Entre combatentes em campo |
| **Comando** | Entre CI e chefes de secao |
| **Coordenacao** | Com Salas de Situacao |
| **Aereo** | Com aeronaves |

### Comando Unificado

Aplicado quando multiplas instituicoes tem **jurisdicao compartilhada**.

**Exemplo:** Incendio em UC federal que atinge terras estaduais
- CI ICMBio + CI CBMMT
- Objetivos definidos conjuntamente
- Estrutura unica de operacoes, planejamento, logistica

**Beneficios:**
- Respeita autoridades legais
- Evita conflitos de comando
- Otimiza recursos
- Apresenta resposta unificada`,
  diagrams: [diagramEstruturaModular],
};

// Exportar todas as secoes da Parte I
export const parteISections: Section[] = [
  oQueESci,
  historico,
  conceitos,
  principios,
  caracteristicas,
];

// Mapa de slug para secao
export const parteISectionMap: Record<string, Section> = {
  'o-que-e-sci': oQueESci,
  'historico': historico,
  'conceitos': conceitos,
  'principios': principios,
  'caracteristicas': caracteristicas,
};
