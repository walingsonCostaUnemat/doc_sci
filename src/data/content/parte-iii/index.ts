import type { Section, Diagram } from '@/data/types';

// Diagrama: Organograma CBMMT
const diagramOrgCBMMT: Diagram = {
  id: 'org-cbmmt',
  title: 'Estrutura Organizacional CBMMT para TIF',
  type: 'flowchart',
  code: `flowchart TB
    subgraph GESTAO["Instrumentos de Gestao"]
        CG[Comando Geral]
        DOp[Diretoria Operacional]
        BEA[Batalhao de Emergencias Ambientais]
        SSC[Sala de Situacao Central]

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

    subgraph SALAS["Salas de Situacao"]
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
  description: 'Estrutura organizacional do CBMMT para operacoes de incendio florestal'
};

// Diagrama: Tipos de IRTs
const diagramTiposIRTs: Diagram = {
  id: 'tipos-irts',
  title: 'Instrumentos de Resposta Temporarios (IRTs)',
  type: 'flowchart',
  code: `flowchart TB
    subgraph IRTS["INSTRUMENTOS DE RESPOSTA TEMPORARIOS"]
        direction TB
    end

    subgraph EIAOPS["EIAOPs"]
        E1["10 equipes<br/>10 BM cada"]
        E2["BEA coordena<br/>Resposta rapida"]
    end

    subgraph BDBMS["BDBMs"]
        B1["15 brigadas<br/>5-10 BM"]
        B2["CRBMs coordenam<br/>Base movel"]
    end

    subgraph BMMS["BMMs"]
        M1["13 brigadas<br/>Mistas BM + local"]
        M2["Conhecimento<br/>local"]
    end

    subgraph BEMS["BEMs"]
        BE1["Estaduais mistas<br/>BM + servidores"]
        BE2["Integracao<br/>estado"]
    end

    subgraph GAVBM["GAvBM"]
        G1["Aviacao<br/>Helicopteros"]
        G2["Reconhecimento<br/>aereo"]
    end

    subgraph EMEC["EMec"]
        EM1["Maquinario<br/>pesado"]
        EM2["Aceiros e linhas<br/>de controle"]
    end

    subgraph GCIFS["GCIFs"]
        GC1["Equipes taticas<br/>3-5 BM"]
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
  description: 'Os 7 tipos de Instrumentos de Resposta Temporarios do CBMMT'
};

// Diagrama: Niveis de Complexidade
const diagramNiveis: Diagram = {
  id: 'niveis-complexidade',
  title: 'Niveis de Complexidade Operacional',
  type: 'flowchart',
  code: `flowchart LR
    subgraph N1["NIVEL 1"]
        N1T[Operacao Simples]
        N1C[Ate 3 IRTs]
        N1S[SCI Opcional]
    end

    subgraph N2["NIVEL 2"]
        N2T[Operacao Intermediaria]
        N2C[4-7 IRTs]
        N2S[SCI Obrigatorio]
    end

    subgraph N3["NIVEL 3"]
        N3T[Operacao Complexa]
        N3C[7+ IRTs + Federais]
        N3S[SCI Completo]
    end

    subgraph N4["NIVEL 4"]
        N4T[Grande Emergencia]
        N4C[Maximos recursos]
        N4S[Comando Unificado]
    end

    N1 --> N2 --> N3 --> N4

    style N1 fill:#059669,color:#fff
    style N2 fill:#D97706,color:#fff
    style N3 fill:#DC2626,color:#fff
    style N4 fill:#7C3AED,color:#fff`,
  description: 'Os 4 niveis de complexidade operacional definidos no POTIF 2025'
};

// Diagrama: Integracao SCI-CBMMT
const diagramIntegracaoSCI: Diagram = {
  id: 'integracao-sci-cbmmt',
  title: 'Integracao SCI com Estrutura CBMMT',
  type: 'flowchart',
  code: `flowchart TB
    subgraph CBMMT["ESTRUTURA CBMMT"]
        DOp[DOp - Diretoria Operacional]
        SSC[SSC - Sala Central]
        SSD[SSD - Salas Descentralizadas]
        BEA[BEA - Emergencias Ambientais]
    end

    subgraph SCI["ESTRUTURA SCI"]
        CI[Comandante do Incidente]
        STAFF[Staff de Comando]
        SECOES[Secoes SCI]
    end

    subgraph CAMPO["CAMPO"]
        IRTs[Equipes de Combate]
    end

    DOp -->|Autoriza Nivel 3-4| SSC
    SSC -->|Coordena despacho| SSD
    BEA -->|Assessora| SSC
    BEA -->|Capacita| CI

    SSC -->|Designa CI| CI
    SSD -->|Apoio logistico| CI
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
  title: 'Fases da Temporada de Incendios Florestais',
  type: 'gantt',
  code: `gantt
    title POTIF 2025 - Fases da Temporada
    dateFormat YYYY-MM
    axisFormat %b

    section Preparacao
    Treinamentos         :prep1, 2025-03, 3M
    Equipamentos         :prep2, 2025-04, 2M

    section Alerta
    Ativacao IRTs        :alert1, 2025-06, 1M

    section Critica
    Operacoes Intensivas :crit1, 2025-07, 4M

    section Desmobilizacao
    Encerramento         :desm1, 2025-11, 1M`,
  description: 'Cronograma das fases da Temporada de Incendios Florestais'
};

// Diagrama: Arvore de Decisao POTIF
const diagramDecisaoPOTIF: Diagram = {
  id: 'decisao-potif',
  title: 'Arvore de Decisao - Classificacao de Nivel',
  type: 'flowchart',
  code: `flowchart TD
    START[Incidente Iniciado] --> Q1{Quantos IRTs?}

    Q1 -->|Ate 3| CHECK1{Recursos especiais?}
    Q1 -->|4-7| CHECK2{Orgaos federais?}
    Q1 -->|7+| CHECK3{Multi-institucional?}

    CHECK1 -->|Nao| NIVEL1[NIVEL 1]
    CHECK1 -->|Sim| NIVEL2[NIVEL 2]

    CHECK2 -->|Nao| NIVEL2
    CHECK2 -->|Sim| NIVEL3[NIVEL 3]

    CHECK3 -->|Nao| NIVEL3
    CHECK3 -->|Sim| Q4{Grande emergencia?}

    Q4 -->|Nao| NIVEL3
    Q4 -->|Sim| NIVEL4[NIVEL 4]

    NIVEL1 --> A1[SCI Opcional]
    NIVEL2 --> A2[SCI Obrigatorio]
    NIVEL3 --> A3[SCI Completo]
    NIVEL4 --> A4[Comando Unificado]

    style NIVEL1 fill:#059669,color:#fff
    style NIVEL2 fill:#D97706,color:#fff
    style NIVEL3 fill:#DC2626,color:#fff
    style NIVEL4 fill:#7C3AED,color:#fff`,
  description: 'Fluxograma para classificacao do nivel de complexidade operacional'
};

export const estruturaCbmmt: Section = {
  id: 'estrutura-cbmmt',
  title: 'Estrutura de Gestao do CBMMT',
  slug: 'estrutura-cbmmt',
  part: 3,
  content: `## Estrutura de Gestao do CBMMT

A estrutura organizacional do CBMMT para operacoes de incendio florestal distingue **instrumentos de gestao** (estrutura permanente) de **instrumentos de resposta** (estrutura temporaria).

### Instrumentos de Gestao

Estruturas permanentes responsaveis pelo planejamento, coordenacao e suporte.

#### Diretoria Operacional (DOp)

| Aspecto | Descricao |
|---------|-----------|
| **Funcao** | Direcao estrategica de todas atividades operacionais |
| **Autoridade** | Maior autoridade operacional, reporta ao Comando-Geral |
| **Responsabilidades TIF** | Coordenar SSC, aprovar diarias, gerenciar SCI nivel 2-4 |

#### Batalhao de Emergencias Ambientais (BEA)

| Aspecto | Descricao |
|---------|-----------|
| **Funcao** | Unidade especializada em emergencias ambientais |
| **Sede** | Cuiaba-MT |
| **Subordinacao** | Direto ao Comando-Geral |
| **Responsabilidades** | Assessorar CBMMT, criar doutrina, coordenar EIAOPs |

#### Comandos Regionais (CRBM I a VII)

| Regional | Regiao | Sede |
|----------|--------|------|
| CRBM I | Metropolitana | Cuiaba, Varzea Grande |
| CRBM II | Sul | Rondonopolis |
| CRBM III | Norte | Sinop |
| CRBM IV | Araguaia | Barra do Garcas |
| CRBM V | Oeste | Caceres |
| CRBM VI | Noroeste | Alta Floresta |
| CRBM VII | Sudeste | Primavera do Leste |

### Salas de Situacao

#### Sala de Situacao Central (SSC)

- **Coordenacao:** Diretor Operacional, assessorado pelo BEA
- **Periodo:** Junho a Novembro
- **Localizacao:** BEA, Cuiaba-MT
- **Funcao:** Coordenar operacoes nivel 2, 3 e 4

#### Sala de Situacao do Pantanal (SSPAN)

- **Carater:** Temporaria, durante fase resposta no Pantanal
- **Coordenacao:** CI da Operacao Pantanal (rodizio)
- **Subordinacao:** SSC
- **Localizacao:** Dentro do Bioma Pantanal (instalacao movel)

#### Salas de Situacao Descentralizadas (SSD)

- **Quantidade:** 7 (uma por CRBM)
- **Coordenacao:** Comandante Regional
- **Funcao:** Gestao descentralizada de IRTs em nivel regional`,
  diagrams: [diagramOrgCBMMT],
};

export const operacoesIncendio: Section = {
  id: 'operacoes-incendio',
  title: 'Instrumentos de Resposta Temporarios',
  slug: 'operacoes-incendio',
  part: 3,
  content: `## Instrumentos de Resposta Temporarios (IRTs)

Os IRTs sao estruturas criadas especificamente para a Temporada de Incendios Florestais (TIF), com prazo determinado.

### Caracteristicas Gerais

- Existem apenas durante TIF (junho a novembro)
- Dedicacao exclusiva a incendios florestais
- Bombeiros recebem diarias
- Distribuidos estrategicamente pelo estado
- Treinamento especifico em incendio florestal

### EIAOP - Equipe de Intervencao e Apoio Operacional

| Aspecto | Descricao |
|---------|-----------|
| **Composicao** | 10 bombeiros militares + viatura especializada |
| **Quantidade** | 10 EIAOPs (EIAOP 01 a 10) |
| **Coordenacao** | BEA (diretamente) |
| **Qualificacao** | Curso de Formacao de Brigadista Florestal (CFBF) |
| **Emprego** | Pronta-resposta, operacoes nivel 2, 3 e 4 |

### BDBM - Brigada de Deslocamento Base Movel

| Aspecto | Descricao |
|---------|-----------|
| **Composicao** | 5 a 10 bombeiros + viatura |
| **Quantidade** | 15 BDBMs |
| **Coordenacao** | Comandos Regionais (via SSD) |
| **Caracteristica** | Base movel permite reposicionamento |
| **Emprego** | Resposta inicial, operacoes nivel 1 e 2 |

### BMM - Brigada Mista Municipal

| Aspecto | Descricao |
|---------|-----------|
| **Composicao** | 5-10 pessoas (min. 2 BM + brigadistas locais) |
| **Quantidade** | 13 BMMs |
| **Coordenacao** | Comandos Regionais |
| **Vantagem** | Combina expertise BM com conhecimento local |
| **Emprego** | Resposta local, operacoes nivel 1 |

### BEM - Brigada Estadual Mista

| Aspecto | Descricao |
|---------|-----------|
| **Composicao** | BM + servidores estaduais + voluntarios |
| **Coordenacao** | Comandos Regionais |
| **Emprego** | Operacoes integradas estado-municipios |

### GAvBM - Grupo de Aviacao Bombeiro Militar

| Aspecto | Descricao |
|---------|-----------|
| **Recursos** | Helicopteros CBMMT + Defesa Civil + CIOPAer |
| **Coordenacao** | BEA (acionamento), CI (quando SCI ativado) |
| **Atividades** | Reconhecimento, lancamento de agua, transporte |
| **Base** | Cuiaba-MT |

### EMec - Equipe de Mecanizacao

| Aspecto | Descricao |
|---------|-----------|
| **Recursos** | Motoniveladoras, tratores, pas-carregadeiras |
| **Atividades** | Abertura de aceiros, linhas de controle |
| **Parcerias** | SINFRA, municipios |

### GCIF - Guarnicao de Combate a Incendios Florestais

| Aspecto | Descricao |
|---------|-----------|
| **Composicao** | 3 a 5 bombeiros + viatura leve |
| **Origem** | Guarnicoes de servico ordinario |
| **Emprego** | Resposta inicial, operacoes nivel 1 |`,
  diagrams: [diagramTiposIRTs],
};

export const integracaoSci: Section = {
  id: 'integracao-sci',
  title: 'Integracao SCI-CBMMT',
  slug: 'integracao-sci',
  part: 3,
  content: `## Integracao SCI-CBMMT

O SCI nao substitui a estrutura existente do CBMMT, mas **complementa** as operacoes quando a complexidade exige.

### Principio de Integracao

| Estrutura | Funcao |
|-----------|--------|
| **Salas de Situacao** | Coordenam despacho de recursos |
| **SCI** | Gerencia recursos no campo |
| **BEA** | Fornece suporte tecnico especializado |
| **DOp** | Mantem comando estrategico |

### Quando SCI e Ativado

O SCI e ativado quando a operacao e classificada como:

- **Nivel 2:** 4-7 IRTs empenhados (SCI obrigatorio)
- **Nivel 3:** 7+ IRTs com orgaos federais (SCI completo)
- **Nivel 4:** Grande emergencia (Comando Unificado)

### Relacao Salas de Situacao x SCI

**Sem SCI (Nivel 1):**
- SSC/SSD coordenam diretamente os IRTs
- Despacho centralizado
- Supervisao remota

**Com SCI (Niveis 2-4):**
- CI assume comando no campo
- SSC/SSD apoiam com logistica e recursos
- Coordenacao estrategica mantida
- Reportes periodicos ao CI

### Capacitacao

O CBMMT esta capacitando oficiais e pracas em:

| Curso | Publico | Objetivo |
|-------|---------|----------|
| SCI 100 | Todos | Introducao ao SCI |
| SCI 200 | Supervisores | Resposta inicial |
| SCI 300 | Comandantes | Incidentes em expansao |

### Comando Unificado

Aplicado quando multiplas instituicoes tem jurisdicao:

**Exemplo:** Incendio em UC federal no Pantanal
- CI CBMMT + CI ICMBio
- Objetivos definidos conjuntamente
- Estrutura unica de operacoes`,
  diagrams: [diagramIntegracaoSCI],
};

export const potif2025: Section = {
  id: 'potif-2025',
  title: 'POTIF 2025',
  slug: 'potif-2025',
  part: 3,
  content: `## POTIF 2025 - Plano de Operacoes para Temporada de Incendios Florestais

O POTIF 2025 e o documento que estabelece as diretrizes operacionais do CBMMT para a Temporada de Incendios Florestais.

### Objetivo

Definir estrategias, recursos e procedimentos para:
- Prevencao de incendios florestais
- Preparacao de equipes e equipamentos
- Resposta efetiva a ocorrencias
- Integracao entre instituicoes

### Periodo de Vigencia

| Fase | Periodo | Atividades |
|------|---------|------------|
| **Preparacao** | Marco a Maio | Treinamentos, logistica |
| **Alerta** | Junho | Ativacao de IRTs |
| **Critica** | Julho a Outubro | Operacoes intensivas |
| **Desmobilizacao** | Novembro | Encerramento gradual |

### Estrutura do POTIF

1. **Prevencao:** Campanhas, monitoramento, fiscalizacao
2. **Preparacao:** Treinamentos, equipamentos, logistica
3. **Resposta:** Niveis de complexidade, SCI, recursos
4. **Responsabilizacao:** Investigacao, pericias

### Niveis de Complexidade

O POTIF define 4 niveis baseados em:

- Quantidade de IRTs empenhados
- Tipos de recursos especiais
- Instituicoes envolvidas
- Complexidade geografica
- Interesse institucional`,
  diagrams: [diagramFasesPOTIF],
};

export const cenariosNiveis: Section = {
  id: 'cenarios-niveis',
  title: 'Cenarios Operacionais - Niveis 1 a 4',
  slug: 'cenarios-niveis',
  part: 3,
  content: `## Niveis de Complexidade Operacional

O POTIF 2025 estabelece 4 niveis de complexidade para classificar operacoes de incendio florestal.

### Criterios de Classificacao

Uma operacao e classificada quando atende **pelo menos um** criterio do nivel.

| Criterio | Nivel 1 | Nivel 2 | Nivel 3 | Nivel 4 |
|----------|---------|---------|---------|---------|
| **IRTs** | Ate 3 | 4-7 | 7+ | Maximos |
| **Recursos** | Basicos | Especiais | Complexos | Todos |
| **Instituicoes** | Privadas/Municipais | Estaduais | Federais | Multi-esferas |
| **Geografica** | Facil acesso | Deslocamento >4h | Multiplas frentes | Extrema |
| **Interesse** | Moderado | Elevado | Muito elevado | Maximo |

---

### NIVEL 1 - Operacao Simples

**Caracteristicas:**
- Ate 3 IRTs empenhados
- Area de facil acesso
- Deslocamento ate 4h entre pontos
- Interesse institucional moderado

**Estrutura de Comando:**
- Primeiro BM no local assume como CI
- SCI formal **opcional** (recomendado para treinamento)
- Coordenacao via SSD

**Exemplos:**
- Incendio em pasto de propriedade privada
- Pequeno incendio em area urbana-rural
- Incendio inicial contido rapidamente

---

### NIVEL 2 - Operacao Intermediaria

**Caracteristicas:**
- 4 a 7 IRTs empenhados
- Recursos especiais necessarios (aviacao, mecanizacao)
- Deslocamentos superiores a 4h
- Interesse institucional elevado

**Estrutura de Comando:**
- CI designado formalmente (oficial)
- SCI **obrigatorio**
- PAI escrito
- Staff de Comando ativado

**Exemplos:**
- Incendio em UC estadual de medio porte
- Operacao com duracao superior a 24h
- Necessidade de coordenacao entre CRBMs

---

### NIVEL 3 - Operacao Complexa

**Caracteristicas:**
- Mais de 7 IRTs empenhados
- Integracao com orgaos federais (ICMBio, Prevfogo)
- Multiplas frentes de combate
- Interesse institucional muito elevado

**Estrutura de Comando:**
- CI experiente (oficial superior)
- SCI **completo** (todas secoes)
- Possibilidade de Comando Unificado
- Bases avancadas estabelecidas

**Exemplos:**
- Grande incendio no Pantanal
- Incendio em UC federal
- Operacao com duracao superior a 1 semana

---

### NIVEL 4 - Grande Emergencia

**Caracteristicas:**
- Maxima quantidade de recursos
- Todas as esferas governamentais
- UCs prioritarias afetadas
- Repercussao nacional/internacional

**Estrutura de Comando:**
- **Comando Unificado** obrigatorio
- Multiplos CIs (um por instituicao)
- Todas secoes do SCI ativadas
- Centro de Operacoes Integrado

**Exemplos:**
- Crise do Pantanal 2020
- Incendios simultaneos em multiplas UCs
- Declaracao de emergencia estadual/federal`,
  diagrams: [diagramNiveis, diagramDecisaoPOTIF],
};

// Exportar todas as secoes da Parte III
export const parteIIISections: Section[] = [
  estruturaCbmmt,
  operacoesIncendio,
  integracaoSci,
  potif2025,
  cenariosNiveis,
];

// Mapa de slug para secao
export const parteIIISectionMap: Record<string, Section> = {
  'estrutura-cbmmt': estruturaCbmmt,
  'operacoes-incendio': operacoesIncendio,
  'integracao-sci': integracaoSci,
  'potif-2025': potif2025,
  'cenarios-niveis': cenariosNiveis,
};
