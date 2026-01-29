import type { Section, Diagram } from '@/data/types';

// Diagrama: Organograma CBMMT
const diagramOrgCBMMT: Diagram = {
  id: 'org-cbmmt',
  title: 'Estrutura Organizacional CBMMT para TIF',
  type: 'flowchart',
  code: `flowchart TB
    subgraph GESTAO["Instrumentos de Gestão"]
        CG[Comando Geral]
        DOp[Diretoria Operacional]
        BEA[Batalhão de Emergências Ambientais]
        SSC[Sala de Situação Central]

        CG --> DOp
        CG --> BEA
        DOp --> SSC
        BEA -.->|assessora| SSC
    end

    subgraph REGIONAIS["Comandos Regionais"]
        CRBM1[CRBM I - Metropolitana]
        CRBM2[CRBM II - Sul]
        CRBM3[CRBM III - Norte]
        CRBM4[CRBM IV - Araguaia]
        CRBM5[CRBM V - Oeste]
        CRBM6[CRBM VI - Noroeste]
        CRBM7[CRBM VII - Sudeste]

        DOp --> CRBM1
        DOp --> CRBM2
        DOp --> CRBM3
        DOp --> CRBM4
        DOp --> CRBM5
        DOp --> CRBM6
        DOp --> CRBM7
    end

    subgraph SALAS["Salas de Situação"]
        SSD1[SSD I]
        SSD2[SSD II]
        SSD3[SSD III]
        SSD4[SSD IV]
        SSD5[SSD V]
        SSD6[SSD VI]
        SSD7[SSD VII]
        SSPAN[SSPAN - Pantanal]

        CRBM1 --> SSD1
        CRBM2 --> SSD2
        CRBM3 --> SSD3
        CRBM4 --> SSD4
        CRBM5 --> SSD5
        CRBM6 --> SSD6
        CRBM7 --> SSD7
        SSC --> SSPAN
    end

    style CG fill:#DC2626,color:#fff
    style DOp fill:#B91C1C,color:#fff
    style BEA fill:#1E40AF,color:#fff
    style SSC fill:#059669,color:#fff`,
  description: 'Estrutura organizacional do CBMMT para operações de incêndio florestal'
};

// Diagrama: Tipos de IRTs
const diagramTiposIRTs: Diagram = {
  id: 'tipos-irts',
  title: 'Instrumentos de Resposta Temporários (IRTs)',
  type: 'flowchart',
  code: `flowchart TB
    subgraph IRTS["INSTRUMENTOS DE RESPOSTA TEMPORÁRIOS"]
        direction TB
    end

    subgraph EIAOPS["EIAOPs"]
        E1["10 equipes<br/>10 BM cada"]
        E2["BEA coordena<br/>Resposta rápida"]
    end

    subgraph BDBMS["BDBMs"]
        B1["15 brigadas<br/>5-10 BM"]
        B2["CRBMs coordenam<br/>Base móvel"]
    end

    subgraph BMMS["BMMs"]
        M1["13 brigadas<br/>Mistas BM + local"]
        M2["Conhecimento<br/>local"]
    end

    subgraph BEMS["BEMs"]
        BE1["Estaduais mistas<br/>BM + servidores"]
        BE2["Integração<br/>estado"]
    end

    subgraph GAVBM["GAvBM"]
        G1["Aviação<br/>Helicópteros"]
        G2["Reconhecimento<br/>aéreo"]
    end

    subgraph EMEC["EMec"]
        EM1["Maquinário<br/>pesado"]
        EM2["Aceiros e linhas<br/>de controle"]
    end

    subgraph GCIFS["GCIFs"]
        GC1["Equipes táticas<br/>3-5 BM"]
        GC2["Resposta<br/>inicial"]
    end

    IRTS --> EIAOPS
    IRTS --> BDBMS
    IRTS --> BMMS
    IRTS --> BEMS
    IRTS --> GAVBM
    IRTS --> EMEC
    IRTS --> GCIFS

    classDef eiaopStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef bdbmStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef bmmStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef bemStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef gavStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF
    classDef emecStyle fill:#0891B2,stroke:#0E7490,color:#FFFFFF
    classDef gcifStyle fill:#DB2777,stroke:#BE185D,color:#FFFFFF

    class E1,E2 eiaopStyle
    class B1,B2 bdbmStyle
    class M1,M2 bmmStyle
    class BE1,BE2 bemStyle
    class G1,G2 gavStyle
    class EM1,EM2 emecStyle
    class GC1,GC2 gcifStyle`,
  description: 'Os 7 tipos de Instrumentos de Resposta Temporários do CBMMT'
};

// Diagrama: Níveis de Complexidade
const diagramNiveis: Diagram = {
  id: 'niveis-complexidade',
  title: 'Níveis de Complexidade Operacional',
  type: 'flowchart',
  code: `flowchart LR
    subgraph N1["NÍVEL 1"]
        N1T[Operação Simples]
        N1C[Até 3 IRTs]
        N1S[SCI Opcional]
    end

    subgraph N2["NÍVEL 2"]
        N2T[Operação Intermediária]
        N2C[4-7 IRTs]
        N2S[SCI Obrigatório]
    end

    subgraph N3["NÍVEL 3"]
        N3T[Operação Complexa]
        N3C[7+ IRTs + Federais]
        N3S[SCI Completo]
    end

    subgraph N4["NÍVEL 4"]
        N4T[Grande Emergência]
        N4C[Máximos recursos]
        N4S[Comando Unificado]
    end

    N1 --> N2 --> N3 --> N4

    style N1 fill:#059669,color:#fff
    style N2 fill:#D97706,color:#fff
    style N3 fill:#DC2626,color:#fff
    style N4 fill:#7C3AED,color:#fff`,
  description: 'Os 4 níveis de complexidade operacional definidos no POTIF 2025'
};

// Diagrama: Integração SCI-CBMMT
const diagramIntegracaoSCI: Diagram = {
  id: 'integracao-sci-cbmmt',
  title: 'Integração SCI com Estrutura CBMMT',
  type: 'flowchart',
  code: `flowchart TB
    subgraph CBMMT["ESTRUTURA CBMMT"]
        DOp[DOp - Diretoria Operacional]
        SSC[SSC - Sala Central]
        SSD[SSD - Salas Descentralizadas]
        BEA[BEA - Emergências Ambientais]
    end

    subgraph SCI["ESTRUTURA SCI"]
        CI[Comandante do Incidente]
        STAFF[Staff de Comando]
        SECOES[Seções SCI]
    end

    subgraph CAMPO["CAMPO"]
        IRTs[Equipes de Combate]
    end

    DOp -->|Autoriza Nível 3-4| SSC
    SSC -->|Coordena despacho| SSD
    BEA -->|Assessora| SSC
    BEA -->|Capacita| CI

    SSC -->|Designa CI| CI
    SSD -->|Apoio logístico| CI
    CI --> STAFF
    CI --> SECOES
    SECOES --> IRTs

    SSC <-.->|Reportes| CI

    style DOp fill:#DC2626,color:#fff
    style SSC fill:#059669,color:#fff
    style CI fill:#1E40AF,color:#fff
    style BEA fill:#7C3AED,color:#fff`,
  description: 'Como o SCI se integra com a estrutura existente do CBMMT'
};

// Diagrama: Fases do POTIF
const diagramFasesPOTIF: Diagram = {
  id: 'fases-potif',
  title: 'Fases da Temporada de Incêndios Florestais',
  type: 'gantt',
  code: `gantt
    title POTIF 2025 - Fases da Temporada
    dateFormat YYYY-MM
    axisFormat %b

    section Preparação
    Treinamentos         :prep1, 2025-03, 3M
    Equipamentos         :prep2, 2025-04, 2M

    section Alerta
    Ativação IRTs        :alert1, 2025-06, 1M

    section Crítica
    Operações Intensivas :crit1, 2025-07, 4M

    section Desmobilização
    Encerramento         :desm1, 2025-11, 1M`,
  description: 'Cronograma das fases da Temporada de Incêndios Florestais'
};

// Diagrama: Árvore de Decisão POTIF
const diagramDecisaoPOTIF: Diagram = {
  id: 'decisao-potif',
  title: 'Árvore de Decisão - Classificação de Nível',
  type: 'flowchart',
  code: `flowchart TD
    START[Incidente Iniciado] --> Q1{Quantos IRTs?}

    Q1 -->|Até 3| CHECK1{Recursos especiais?}
    Q1 -->|4-7| CHECK2{Órgãos federais?}
    Q1 -->|7+| CHECK3{Multi-institucional?}

    CHECK1 -->|Não| NIVEL1[NÍVEL 1]
    CHECK1 -->|Sim| NIVEL2[NÍVEL 2]

    CHECK2 -->|Não| NIVEL2
    CHECK2 -->|Sim| NIVEL3[NÍVEL 3]

    CHECK3 -->|Não| NIVEL3
    CHECK3 -->|Sim| Q4{Grande emergência?}

    Q4 -->|Não| NIVEL3
    Q4 -->|Sim| NIVEL4[NÍVEL 4]

    NIVEL1 --> A1[SCI Opcional]
    NIVEL2 --> A2[SCI Obrigatório]
    NIVEL3 --> A3[SCI Completo]
    NIVEL4 --> A4[Comando Unificado]

    style NIVEL1 fill:#059669,color:#fff
    style NIVEL2 fill:#D97706,color:#fff
    style NIVEL3 fill:#DC2626,color:#fff
    style NIVEL4 fill:#7C3AED,color:#fff`,
  description: 'Fluxograma para classificação do nível de complexidade operacional'
};

export const estruturaCbmmt: Section = {
  id: 'estrutura-cbmmt',
  title: 'Estrutura de Gestão do CBMMT',
  slug: 'estrutura-cbmmt',
  part: 3,
  content: `## Estrutura de Gestão do CBMMT

A estrutura organizacional do CBMMT para operações de incêndio florestal distingue **instrumentos de gestão** (estrutura permanente) de **instrumentos de resposta** (estrutura temporária).

### Instrumentos de Gestão

Estruturas permanentes responsáveis pelo planejamento, coordenação e suporte.

#### Diretoria Operacional (DOp)

| Aspecto | Descrição |
|---------|-----------|
| **Função** | Direção estratégica de todas atividades operacionais |
| **Autoridade** | Maior autoridade operacional, reporta ao Comando-Geral |
| **Responsabilidades TIF** | Coordenar SSC, aprovar diárias, gerenciar SCI nível 2-4 |

#### Batalhão de Emergências Ambientais (BEA)

| Aspecto | Descrição |
|---------|-----------|
| **Função** | Unidade especializada em emergências ambientais |
| **Sede** | Cuiabá-MT |
| **Subordinação** | Direto ao Comando-Geral |
| **Responsabilidades** | Assessorar CBMMT, criar doutrina, coordenar EIAOPs |

#### Comandos Regionais (CRBM I a VII)

| Regional | Região | Sede |
|----------|--------|------|
| CRBM I | Metropolitana | Cuiabá, Várzea Grande |
| CRBM II | Sul | Rondonópolis |
| CRBM III | Norte | Sinop |
| CRBM IV | Araguaia | Barra do Garças |
| CRBM V | Oeste | Cáceres |
| CRBM VI | Noroeste | Alta Floresta |
| CRBM VII | Sudeste | Primavera do Leste |

### Salas de Situação

#### Sala de Situação Central (SSC)

- **Coordenação:** Diretor Operacional, assessorado pelo BEA
- **Período:** Junho a Novembro
- **Localização:** BEA, Cuiabá-MT
- **Função:** Coordenar operações nível 2, 3 e 4

#### Sala de Situação do Pantanal (SSPAN)

- **Caráter:** Temporária, durante fase resposta no Pantanal
- **Coordenação:** CI da Operação Pantanal (rodízio)
- **Subordinação:** SSC
- **Localização:** Dentro do Bioma Pantanal (instalação móvel)

#### Salas de Situação Descentralizadas (SSD)

- **Quantidade:** 7 (uma por CRBM)
- **Coordenação:** Comandante Regional
- **Função:** Gestão descentralizada de IRTs em nível regional`,
  diagrams: [diagramOrgCBMMT],
};

export const operacoesIncendio: Section = {
  id: 'operacoes-incendio',
  title: 'Instrumentos de Resposta Temporários',
  slug: 'operacoes-incendio',
  part: 3,
  content: `## Instrumentos de Resposta Temporários (IRTs)

Os IRTs são estruturas criadas especificamente para a Temporada de Incêndios Florestais (TIF), com prazo determinado.

### Características Gerais

- Existem apenas durante TIF (junho a novembro)
- Dedicação exclusiva a incêndios florestais
- Bombeiros recebem diárias
- Distribuídos estrategicamente pelo estado
- Treinamento específico em incêndio florestal

### EIAOP - Equipe de Intervenção e Apoio Operacional

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | 10 bombeiros militares + viatura especializada |
| **Quantidade** | 10 EIAOPs (EIAOP 01 a 10) |
| **Coordenação** | BEA (diretamente) |
| **Qualificação** | Curso de Formação de Brigadista Florestal (CFBF) |
| **Emprego** | Pronta-resposta, operações nível 2, 3 e 4 |

### BDBM - Brigada de Deslocamento Base Móvel

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | 5 a 10 bombeiros + viatura |
| **Quantidade** | 15 BDBMs |
| **Coordenação** | Comandos Regionais (via SSD) |
| **Característica** | Base móvel permite reposicionamento |
| **Emprego** | Resposta inicial, operações nível 1 e 2 |

### BMM - Brigada Mista Municipal

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | 5-10 pessoas (min. 2 BM + brigadistas locais) |
| **Quantidade** | 13 BMMs |
| **Coordenação** | Comandos Regionais |
| **Vantagem** | Combina expertise BM com conhecimento local |
| **Emprego** | Resposta local, operações nível 1 |

### BEM - Brigada Estadual Mista

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | BM + servidores estaduais + voluntários |
| **Coordenação** | Comandos Regionais |
| **Emprego** | Operações integradas estado-municípios |

### GAvBM - Grupo de Aviação Bombeiro Militar

| Aspecto | Descrição |
|---------|-----------|
| **Recursos** | Helicópteros CBMMT + Defesa Civil + CIOPAer |
| **Coordenação** | BEA (acionamento), CI (quando SCI ativado) |
| **Atividades** | Reconhecimento, lançamento de água, transporte |
| **Base** | Cuiabá-MT |

### EMec - Equipe de Mecanização

| Aspecto | Descrição |
|---------|-----------|
| **Recursos** | Motoniveladoras, tratores, pás-carregadeiras |
| **Atividades** | Abertura de aceiros, linhas de controle |
| **Parcerias** | SINFRA, municípios |

### GCIF - Guarnição de Combate a Incêndios Florestais

| Aspecto | Descrição |
|---------|-----------|
| **Composição** | 3 a 5 bombeiros + viatura leve |
| **Origem** | Guarnições de serviço ordinário |
| **Emprego** | Resposta inicial, operações nível 1 |`,
  diagrams: [diagramTiposIRTs],
};

export const integracaoSci: Section = {
  id: 'integracao-sci',
  title: 'Integração SCI-CBMMT',
  slug: 'integracao-sci',
  part: 3,
  content: `## Integração SCI-CBMMT

O SCI não substitui a estrutura existente do CBMMT, mas **complementa** as operações quando a complexidade exige.

### Princípio de Integração

| Estrutura | Função |
|-----------|--------|
| **Salas de Situação** | Coordenam despacho de recursos |
| **SCI** | Gerencia recursos no campo |
| **BEA** | Fornece suporte técnico especializado |
| **DOp** | Mantém comando estratégico |

### Quando SCI é Ativado

O SCI é ativado quando a operação é classificada como:

- **Nível 2:** 4-7 IRTs empenhados (SCI obrigatório)
- **Nível 3:** 7+ IRTs com órgãos federais (SCI completo)
- **Nível 4:** Grande emergência (Comando Unificado)

### Relação Salas de Situação x SCI

**Sem SCI (Nível 1):**
- SSC/SSD coordenam diretamente os IRTs
- Despacho centralizado
- Supervisão remota

**Com SCI (Níveis 2-4):**
- CI assume comando no campo
- SSC/SSD apoiam com logística e recursos
- Coordenação estratégica mantida
- Reportes periódicos ao CI

### Capacitação

O CBMMT está capacitando oficiais e praças em:

| Curso | Público | Objetivo |
|-------|---------|----------|
| SCI 100 | Todos | Introdução ao SCI |
| SCI 200 | Supervisores | Resposta inicial |
| SCI 300 | Comandantes | Incidentes em expansão |

### Comando Unificado

Aplicado quando múltiplas instituições têm jurisdição:

**Exemplo:** Incêndio em UC federal no Pantanal
- CI CBMMT + CI ICMBio
- Objetivos definidos conjuntamente
- Estrutura única de operações`,
  diagrams: [diagramIntegracaoSCI],
};

export const potif2025: Section = {
  id: 'potif-2025',
  title: 'POTIF 2025',
  slug: 'potif-2025',
  part: 3,
  content: `## POTIF 2025 - Plano de Operações para Temporada de Incêndios Florestais

O POTIF 2025 é o documento que estabelece as diretrizes operacionais do CBMMT para a Temporada de Incêndios Florestais.

### Objetivo

Definir estratégias, recursos e procedimentos para:
- Prevenção de incêndios florestais
- Preparação de equipes e equipamentos
- Resposta efetiva a ocorrências
- Integração entre instituições

### Período de Vigência

| Fase | Período | Atividades |
|------|---------|------------|
| **Preparação** | Março a Maio | Treinamentos, logística |
| **Alerta** | Junho | Ativação de IRTs |
| **Crítica** | Julho a Outubro | Operações intensivas |
| **Desmobilização** | Novembro | Encerramento gradual |

### Estrutura do POTIF

1. **Prevenção:** Campanhas, monitoramento, fiscalização
2. **Preparação:** Treinamentos, equipamentos, logística
3. **Resposta:** Níveis de complexidade, SCI, recursos
4. **Responsabilização:** Investigação, perícias

### Níveis de Complexidade

O POTIF define 4 níveis baseados em:

- Quantidade de IRTs empenhados
- Tipos de recursos especiais
- Instituições envolvidas
- Complexidade geográfica
- Interesse institucional`,
  diagrams: [diagramFasesPOTIF],
};

export const cenariosNiveis: Section = {
  id: 'cenarios-niveis',
  title: 'Cenários Operacionais - Níveis 1 a 4',
  slug: 'cenarios-niveis',
  part: 3,
  content: `## Níveis de Complexidade Operacional

O POTIF 2025 estabelece 4 níveis de complexidade para classificar operações de incêndio florestal.

### Critérios de Classificação

Uma operação é classificada quando atende **pelo menos um** critério do nível.

| Critério | Nível 1 | Nível 2 | Nível 3 | Nível 4 |
|----------|---------|---------|---------|---------|
| **IRTs** | Até 3 | 4-7 | 7+ | Máximos |
| **Recursos** | Básicos | Especiais | Complexos | Todos |
| **Instituições** | Privadas/Municipais | Estaduais | Federais | Multi-esferas |
| **Geográfica** | Fácil acesso | Deslocamento >4h | Múltiplas frentes | Extrema |
| **Interesse** | Moderado | Elevado | Muito elevado | Máximo |

---

### NÍVEL 1 - Operação Simples

**Características:**
- Até 3 IRTs empenhados
- Área de fácil acesso
- Deslocamento até 4h entre pontos
- Interesse institucional moderado

**Estrutura de Comando:**
- Primeiro BM no local assume como CI
- SCI formal **opcional** (recomendado para treinamento)
- Coordenação via SSD

**Exemplos:**
- Incêndio em pasto de propriedade privada
- Pequeno incêndio em área urbana-rural
- Incêndio inicial contido rapidamente

---

### NÍVEL 2 - Operação Intermediária

**Características:**
- 4 a 7 IRTs empenhados
- Recursos especiais necessários (aviação, mecanização)
- Deslocamentos superiores a 4h
- Interesse institucional elevado

**Estrutura de Comando:**
- CI designado formalmente (oficial)
- SCI **obrigatório**
- PAI escrito
- Staff de Comando ativado

**Exemplos:**
- Incêndio em UC estadual de médio porte
- Operação com duração superior a 24h
- Necessidade de coordenação entre CRBMs

---

### NÍVEL 3 - Operação Complexa

**Características:**
- Mais de 7 IRTs empenhados
- Integração com órgãos federais (ICMBio, Prevfogo)
- Múltiplas frentes de combate
- Interesse institucional muito elevado

**Estrutura de Comando:**
- CI experiente (oficial superior)
- SCI **completo** (todas seções)
- Possibilidade de Comando Unificado
- Bases avançadas estabelecidas

**Exemplos:**
- Grande incêndio no Pantanal
- Incêndio em UC federal
- Operação com duração superior a 1 semana

---

### NÍVEL 4 - Grande Emergência

**Características:**
- Máxima quantidade de recursos
- Todas as esferas governamentais
- UCs prioritárias afetadas
- Repercussão nacional/internacional

**Estrutura de Comando:**
- **Comando Unificado** obrigatório
- Múltiplos CIs (um por instituição)
- Todas seções do SCI ativadas
- Centro de Operações Integrado

**Exemplos:**
- Crise do Pantanal 2020
- Incêndios simultâneos em múltiplas UCs
- Declaração de emergência estadual/federal`,
  diagrams: [diagramNiveis, diagramDecisaoPOTIF],
};

// Exportar todas as seções da Parte III
export const parteIIISections: Section[] = [
  estruturaCbmmt,
  operacoesIncendio,
  integracaoSci,
  potif2025,
  cenariosNiveis,
];

// Mapa de slug para seção
export const parteIIISectionMap: Record<string, Section> = {
  'estrutura-cbmmt': estruturaCbmmt,
  'operacoes-incendio': operacoesIncendio,
  'integracao-sci': integracaoSci,
  'potif-2025': potif2025,
  'cenarios-niveis': cenariosNiveis,
};
