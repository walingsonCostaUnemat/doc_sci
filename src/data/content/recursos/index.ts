import type { Section, Diagram } from '@/data/types';

// ============================================================
// RECURSOS - GLOSSARIO, REFERENCIAS E GALERIA DE DIAGRAMAS
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS
// ------------------------------------------------------------

const diagramTermosSCI: Diagram = {
  id: 'termos-sci',
  title: 'Principais Termos e Siglas do SCI',
  type: 'flowchart',
  description: 'Organizacao dos principais termos do Sistema de Comando de Incidentes',
  code: `flowchart TB
    subgraph COMANDO["COMANDO"]
        CI["CI<br/>Comandante Incidente"]
        CU["CU<br/>Comando Unificado"]
        PC["PC<br/>Posto de Comando"]
    end

    subgraph STAFF_CMD["STAFF DO COMANDO"]
        OSeg["OSeg<br/>Oficial Seguranca"]
        OIP["OIP<br/>Oficial Informacao"]
        OLig["OLig<br/>Oficial Ligacao"]
    end

    subgraph STAFF_GERAL["STAFF GERAL - SECOES"]
        CSOp["CSOp<br/>Chefe Operacoes"]
        CSPlan["CSPlan<br/>Chefe Planejamento"]
        CSLog["CSLog<br/>Chefe Logistica"]
        CSAdmin["CSAdmin<br/>Chefe Admin/Fin"]
    end

    subgraph DOCUMENTOS["DOCUMENTOS PRINCIPAIS"]
        PAI["PAI<br/>Plano de Acao"]
        SCI201["SCI 201<br/>Briefing"]
        SCI202["SCI 202<br/>Objetivos"]
    end

    subgraph PROCESSOS["PROCESSOS"]
        CICLOP["Ciclo P<br/>14 Fases"]
        DESMOB["Desmobilizacao"]
        AAR["AAR<br/>Revisao Pos-Acao"]
    end

    COMANDO --> STAFF_CMD
    COMANDO --> STAFF_GERAL
    STAFF_GERAL --> DOCUMENTOS
    DOCUMENTOS --> PROCESSOS

    classDef cmdStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef staffCStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef staffGStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef docStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef procStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF

    class CI,CU,PC cmdStyle
    class OSeg,OIP,OLig staffCStyle
    class CSOp,CSPlan,CSLog,CSAdmin staffGStyle
    class PAI,SCI201,SCI202 docStyle
    class CICLOP,DESMOB,AAR procStyle`
};

const diagramGaleriaEor: Diagram = {
  id: 'galeria-eor',
  title: 'Estrutura Organizacional de Resposta (EOR)',
  type: 'flowchart',
  description: 'Organograma completo do SCI',
  code: `flowchart TB
    subgraph COMANDO["COMANDO"]
        CI["Comandante do<br/>Incidente (CI)"]
    end

    subgraph STAFF_COMANDO["STAFF DO COMANDO"]
        OSeg["Oficial de<br/>Seguranca"]
        OIP["Oficial de<br/>Informacao Publica"]
        OLig["Oficial de<br/>Ligacao"]
    end

    subgraph STAFF_GERAL["STAFF GERAL"]
        direction LR
        CSOp["Chefe Secao<br/>Operacoes"]
        CSPlan["Chefe Secao<br/>Planejamento"]
        CSLog["Chefe Secao<br/>Logistica"]
        CSAdmin["Chefe Secao<br/>Admin/Financas"]
    end

    CI --> OSeg
    CI --> OIP
    CI --> OLig
    CI --> CSOp
    CI --> CSPlan
    CI --> CSLog
    CI --> CSAdmin

    classDef comandoStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef staffCmdStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef staffGeralStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF

    class CI comandoStyle
    class OSeg,OIP,OLig staffCmdStyle
    class CSOp,CSPlan,CSLog,CSAdmin staffGeralStyle`
};

const diagramGaleriaCicloP: Diagram = {
  id: 'galeria-ciclo-p',
  title: 'As 14 Fases do Ciclo P',
  type: 'flowchart',
  description: 'Ciclo de Planejamento Operacional completo',
  code: `flowchart LR
    subgraph BASE["BASE"]
        F1["1.Resposta"]
        F2["2.Briefing"]
        F3["3.Rep Inst"]
        F4["4.Cmd Unif"]
    end

    subgraph CENTRO["PLANEJAMENTO"]
        F5["5.Objetivos"]
        F6["6.Staff"]
        F7["7.Prep RT"]
        F8["8.REUNIAO<br/>TATICA"]
        F9["9.Prep RP"]
        F10["10.REUNIAO<br/>PLANEJ"]
    end

    subgraph IMPL["IMPLEMENTACAO"]
        F11["11.PAI"]
        F12["12.Briefing"]
        F13["13.Execucao"]
        F14["14.Avaliacao"]
    end

    F1 --> F2 --> F3 --> F4
    F4 --> F5 --> F6 --> F7 --> F8 --> F9 --> F10
    F10 --> F11 --> F12 --> F13 --> F14
    F14 -.->|Proximo PO| F5

    classDef baseStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef centroStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef reuniaoStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef implStyle fill:#D1FAE5,stroke:#059669,color:#065F46

    class F1,F2,F3,F4 baseStyle
    class F5,F6,F7,F9 centroStyle
    class F8,F10 reuniaoStyle
    class F11,F12,F13,F14 implStyle`
};

const diagramGaleriaNiveis: Diagram = {
  id: 'galeria-niveis',
  title: 'Niveis de Complexidade CBMMT',
  type: 'flowchart',
  description: 'Escalada de recursos por nivel',
  code: `flowchart TB
    subgraph N1["NIVEL 1 - Local"]
        N1R["1-3 IRTs<br/>Recursos locais"]
        N1C["CI: Primeiro BM"]
    end

    subgraph N2["NIVEL 2 - Regional"]
        N2R["4-6 IRTs<br/>Recursos regionais"]
        N2C["CI: Oficial designado"]
    end

    subgraph N3["NIVEL 3 - Estadual"]
        N3R["7+ IRTs<br/>Recursos estaduais"]
        N3C["CI: Oficial superior"]
    end

    subgraph N4["NIVEL 4 - Federal"]
        N4R["Multiestadual<br/>Recursos federais"]
        N4C["CI: Comando Unificado"]
    end

    N1 --> N2 --> N3 --> N4

    classDef n1Style fill:#059669,stroke:#047857,color:#FFFFFF
    classDef n2Style fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef n3Style fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef n4Style fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF

    class N1R,N1C n1Style
    class N2R,N2C n2Style
    class N3R,N3C n3Style
    class N4R,N4C n4Style`
};

const diagramFormularios: Diagram = {
  id: 'galeria-formularios',
  title: 'Os 24 Formularios SCI',
  type: 'flowchart',
  description: 'Formularios organizados por categoria',
  code: `flowchart TB
    subgraph PAI_OBR["PAI - OBRIGATORIOS"]
        direction LR
        P1["SCI 200CG<br/>Capa"]
        P2["SCI 202<br/>Objetivos"]
        P3["SCI 204<br/>Atribuicoes"]
        P4["SCI 205<br/>Radio"]
        P5["SCI 206<br/>Medico"]
        P6["SCI 208<br/>Seguranca"]
    end

    subgraph PAI_OPC["PAI - OPCIONAIS"]
        direction LR
        O1["SCI 203<br/>Organizacao"]
        O2["SCI 205A<br/>Lista Contatos"]
        O3["SCI 207<br/>Organograma"]
    end

    subgraph PLANEJ["PLANEJAMENTO"]
        direction LR
        PL1["SCI 201<br/>Briefing"]
        PL2["SCI 215<br/>Matriz"]
        PL3["SCI 215A<br/>Riscos"]
    end

    subgraph OPER["OPERACIONAIS"]
        direction LR
        OP1["SCI 209<br/>Status"]
        OP2["SCI 211<br/>Check-In"]
        OP3["SCI 213RR<br/>Requisicao"]
        OP4["SCI 221<br/>Desmob"]
    end

    PAI_OBR --> PAI_OPC
    PAI_OPC --> PLANEJ
    PLANEJ --> OPER

    classDef obrStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef opcStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef planStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef operStyle fill:#059669,stroke:#047857,color:#FFFFFF

    class P1,P2,P3,P4,P5,P6 obrStyle
    class O1,O2,O3 opcStyle
    class PL1,PL2,PL3 planStyle
    class OP1,OP2,OP3,OP4 operStyle`
};

const diagramDesmobilizacao: Diagram = {
  id: 'galeria-desmob',
  title: 'Processo de Desmobilizacao',
  type: 'flowchart',
  description: 'Fases da desmobilizacao de recursos',
  code: `flowchart LR
    subgraph PLAN["1. PLANEJAMENTO"]
        PL1["Incidente<br/>Estabiliza"]
        PL2["Plano<br/>Desmob"]
    end

    subgraph PRIOR["2. PRIORIZACAO"]
        PR1["Recursos<br/>Excedentes"]
        PR2["Lista de<br/>Liberacoes"]
    end

    subgraph EXEC["3. EXECUCAO"]
        EX1["Check-Out<br/>SCI 221"]
        EX2["Liberacao"]
    end

    subgraph ENCER["4. ENCERRAMENTO"]
        EN1["Documentacao<br/>Final"]
        EN2["AAR"]
    end

    PL1 --> PL2 --> PR1 --> PR2 --> EX1 --> EX2 --> EN1 --> EN2

    classDef planStyle fill:#DBEAFE,stroke:#2563EB,color:#1E40AF
    classDef priorStyle fill:#FEF3C7,stroke:#D97706,color:#92400E
    classDef execStyle fill:#D1FAE5,stroke:#059669,color:#065F46
    classDef encerStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF

    class PL1,PL2 planStyle
    class PR1,PR2 priorStyle
    class EX1,EX2 execStyle
    class EN1,EN2 encerStyle`
};

// ------------------------------------------------------------
// SECOES DE CONTEUDO
// ------------------------------------------------------------

const glossario: Section = {
  id: 'glossario',
  slug: 'glossario',
  title: 'Glossario de Termos',
  part: 0,
  order: 1,
  content: `## Glossario de Termos do SCI

Este glossario apresenta os principais termos utilizados no Sistema de Comando de Incidentes (SCI) no contexto do CBMMT.

---

### A

| Termo | Definicao |
|-------|-----------|
| **AAR** | After Action Review. Revisao pos-acao para identificar licoes aprendidas |
| **Aceiro** | Faixa de terreno desprovida de vegetacao como barreira contra o fogo |
| **Amplitude de Controle** | Numero de subordinados que um supervisor gerencia (ideal: 3-7) |
| **Area de Espera** | Local para recursos disponiveis aguardando atribuicao |
| **ARGOS** | Plataforma de gestao operacional integrada do CBMMT |

---

### B

| Termo | Definicao |
|-------|-----------|
| **Base** | Local para funcoes logisticas (alimentacao, alojamento, manutencao) |
| **BEA** | Bureau de Estrategia e Assessoramento do CBMMT |
| **Briefing** | Reuniao curta para transmitir informacoes essenciais |

---

### C

| Termo | Definicao |
|-------|-----------|
| **Cadeia de Comando** | Linha de autoridade do CI para niveis inferiores |
| **Check-in** | Registro de recursos ao chegarem (SCI 211) |
| **Check-out** | Liberacao de recursos ao sairem (SCI 221) |
| **CI** | Comandante do Incidente. Responsavel por todas atividades |
| **Ciclo P** | Ciclo de Planejamento com 14 fases para desenvolver o PAI |
| **Comando Unificado** | Multiplas agencias compartilhando responsabilidade de comando |
| **CSOp** | Chefe da Secao de Operacoes |
| **CSPlan** | Chefe da Secao de Planejamento |
| **CSLog** | Chefe da Secao de Logistica |
| **CSAdmin** | Chefe da Secao de Administracao/Financas |

---

### D-E

| Termo | Definicao |
|-------|-----------|
| **Desmobilizacao** | Processo ordenado de liberacao de recursos |
| **Divisao** | Subdivisao da SOp por area geografica |
| **DOp** | Diretoria de Operacoes do CBMMT |
| **EIAOP** | Equipe de Intervencao Aquatica e Operacoes de Praia |
| **EOR** | Estrutura Organizacional de Resposta (organograma do SCI) |
| **Equipe de Intervencao** | Menor unidade tatica (ate 7 pessoas) |

---

### F-G

| Termo | Definicao |
|-------|-----------|
| **Forca-Tarefa** | Combinacao de recursos diferentes com lideranca comum |
| **Formulario SCI** | Documentos padronizados (SCI 201 a SCI 225) |
| **GAvBM** | Grupamento de Aviacao do Corpo de Bombeiros Militar |
| **GCIF** | Grupo de Combate a Incendios Florestais |
| **Grupo** | Subdivisao da SOp por funcao (ex: Grupo Aereo) |

---

### I-L

| Termo | Definicao |
|-------|-----------|
| **ICMBio** | Instituto Chico Mendes de Conservacao da Biodiversidade |
| **IRT** | Instalacao de Resposta Tatica |
| **LCES** | Lookouts, Communications, Escape Routes, Safety Zones |
| **Linha de Controle** | Barreira para conter propagacao do incendio |

---

### M-O

| Termo | Definicao |
|-------|-----------|
| **Modularidade** | Principio de expansao/contracao da estrutura conforme necessidade |
| **OIP** | Oficial de Informacao Publica |
| **OLig** | Oficial de Ligacao |
| **OSeg** | Oficial de Seguranca |

---

### P

| Termo | Definicao |
|-------|-----------|
| **PAI** | Plano de Acao do Incidente |
| **PC** | Posto de Comando |
| **Periodo Operacional** | Intervalo para planejamento de taticas (tipico: 12h) |
| **POTIF** | Plano Operativo de Temporada de Incendio Florestal |
| **Prevfogo** | Centro Nacional de Prevencao e Combate aos Incendios Florestais |

---

### R-S

| Termo | Definicao |
|-------|-----------|
| **Rescaldo** | Extincao de focos residuais apos controle |
| **Reuniao de Planejamento** | Reuniao formal para aprovar o PAI |
| **Reuniao Tatica** | Reuniao para desenvolver taticas |
| **SCI** | Sistema de Comando de Incidentes |
| **Secao** | Nivel organizacional funcional (Op, Plan, Log, Admin) |
| **SINFRA** | Secretaria de Estado de Infraestrutura e Logistica |
| **SSC** | Sala de Situacao Central do CBMMT |
| **SSD** | Sala de Situacao Descentralizada do CBMMT |
| **Staff do Comando** | OSeg, OIP e OLig |
| **Staff Geral** | CSOp, CSPlan, CSLog e CSAdmin |

---

### T-Z

| Termo | Definicao |
|-------|-----------|
| **Terminologia Comum** | Principio de uso de linguagem padronizada |
| **Transferencia de Comando** | Passagem formal de autoridade entre CIs |
| **UC** | Unidade de Conservacao |
| **Unidade Comando** | Principio: cada pessoa reporta a apenas um supervisor |
| **URec** | Unidade de Recursos (SPlan) |
| **USit** | Unidade de Situacao (SPlan) |
| **Zona de Seguranca** | Area para abrigo de combatentes em emergencia |`,
  diagrams: [diagramTermosSCI]
};

const referencias: Section = {
  id: 'referencias',
  slug: 'referencias',
  title: 'Referencias e Bibliografia',
  part: 0,
  order: 2,
  content: `## Referencias e Bibliografia

Esta secao lista as principais referencias utilizadas na elaboracao desta documentacao.

---

### Documentos Oficiais CBMMT

| Documento | Descricao |
|-----------|-----------|
| **POTIF 2025** | Plano Operativo de Temporada de Incendio Florestal |
| **Portaria CBMMT** | Normas internas de operacoes |
| **Manual de Operacoes** | Procedimentos operacionais padrao |

---

### Referencias Nacionais

**SISTEMA NACIONAL DE PROTECAO E DEFESA CIVIL**

| Documento | Descricao |
|-----------|-----------|
| Instrucao Normativa n. 02/2016 | Sistema de Comando de Incidentes |
| Material didatico SEDEC | Capacitacao em SCI |

**CORPO DE BOMBEIROS MILITAR DO DISTRITO FEDERAL**

| Documento | Descricao |
|-----------|-----------|
| Manual de Gerenciamento | Crises e Desastres |
| Curso SCI | Sistema de Comando de Incidentes |

---

### Referencias Internacionais

**NIMS (National Incident Management System) - EUA**

| Curso | Conteudo |
|-------|----------|
| FEMA IS-100 | Introduction to ICS |
| FEMA IS-200 | ICS for Single Resources |
| FEMA IS-700 | Introduction to NIMS |
| FEMA IS-800 | National Response Framework |

**NWCG (National Wildfire Coordinating Group) - EUA**

| Publicacao | Conteudo |
|------------|----------|
| PMS 932 | ICS Organizational Structure |
| PMS 210 | Wildland Fire Incident Management Field Guide |

---

### Organizacoes de Referencia

**Nacionais**

| Sigla | Organizacao |
|-------|-------------|
| CBMMT | Corpo de Bombeiros Militar do Mato Grosso |
| IBAMA | Instituto Brasileiro do Meio Ambiente |
| ICMBio | Instituto Chico Mendes |
| SEDEC | Secretaria Nacional de Defesa Civil |

**Internacionais**

| Sigla | Organizacao |
|-------|-------------|
| FEMA | Federal Emergency Management Agency (EUA) |
| NWCG | National Wildfire Coordinating Group (EUA) |
| CIFFC | Canadian Interagency Forest Fire Centre |

---

### Normas Tecnicas

| Norma | Descricao |
|-------|-----------|
| **NFPA 1561** | Standard on Emergency Services Incident Management System |
| **NFPA 295** | Standard for Wildfire Control |
| **ISO 22320** | Emergency management - Requirements for incident response |

---

### Formularios SCI Referenciados

Os 24 formularios oficiais do SCI utilizados nesta documentacao:

**Formularios do PAI (Obrigatorios)**

| Codigo | Nome |
|--------|------|
| SCI 200CG | Capa do PAI |
| SCI 202 | Objetivos do Incidente |
| SCI 204 | Formulario de Atribuicoes |
| SCI 205 | Plano de Comunicacoes de Radio |
| SCI 206 | Plano Medico |
| SCI 208 | Plano de Seguranca |

**Formularios do PAI (Opcionais)**

| Codigo | Nome |
|--------|------|
| SCI 203 | Designacoes da Organizacao |
| SCI 205A | Lista de Comunicacoes |
| SCI 207 | Organograma |

**Formularios de Planejamento**

| Codigo | Nome |
|--------|------|
| SCI 201 | Briefing do Incidente |
| SCI 215 | Matriz de Planejamento Operacional |
| SCI 215A | Analise de Risco |

**Formularios Operacionais**

| Codigo | Nome |
|--------|------|
| SCI 209 | Resumo do Incidente |
| SCI 210 | Status de Recursos |
| SCI 211 | Check-in |
| SCI 213 | Ordem de Pedido |
| SCI 213RR | Requisicao de Recursos |
| SCI 214 | Registro de Atividades |
| SCI 220 | Sumario de Recursos Aereos |
| SCI 221 | Check-out |

**Formularios Administrativos**

| Codigo | Nome |
|--------|------|
| SCI 218 | Inventario de Viaturas/Equipamentos |
| SCI 219 | Cartao T de Recursos |
| SCI 224 | Log de Horario do Pessoal |
| SCI 225 | Registro de Desempenho |`,
  diagrams: [diagramGaleriaEor]
};

const galeriaDiagramas: Section = {
  id: 'galeria-diagramas',
  slug: 'galeria-diagramas',
  title: 'Galeria de Diagramas',
  part: 0,
  order: 3,
  content: `## Galeria de Diagramas

Esta secao apresenta os principais diagramas do SCI-ARGOS. Use o modo Diagrama (no cabecalho) para visualizar todos os diagramas abaixo de forma interativa.

---

### Diagramas Disponiveis nesta Pagina

| Diagrama | Descricao |
|----------|-----------|
| **Estrutura Organizacional (EOR)** | Organograma completo do SCI com Comando, Staff e Secoes |
| **Ciclo P** | As 14 fases do Ciclo de Planejamento Operacional |
| **Niveis de Complexidade** | Escalada de recursos por nivel (1 a 4) do CBMMT |
| **Formularios SCI** | Os 24 formularios organizados por categoria |
| **Desmobilizacao** | Fases do processo de desmobilizacao |

---

### Como Usar os Diagramas

**Controles de Visualizacao:**

| Controle | Funcao |
|----------|--------|
| **Zoom (+/-)** | Ampliar ou reduzir o diagrama |
| **Arrastar** | Mover o diagrama na tela |
| **Tela Cheia** | Expandir para visualizacao completa |
| **Download** | Baixar o diagrama em formato SVG |
| **Reset** | Restaurar visualizacao original |

**Dicas:**
- Use o scroll do mouse para zoom rapido
- Pressione ESC para sair do modo tela cheia
- Diagramas em SVG podem ser usados em apresentacoes

---

### Legenda de Cores

Os diagramas seguem um padrao consistente de cores:

| Cor | Significado | Exemplo |
|-----|-------------|---------|
| **Vermelho** | Comando / Decisao critica | CI, Reunioes importantes |
| **Laranja** | Staff do Comando | OSeg, OIP, OLig |
| **Azul** | Staff Geral / Planejamento | CSOp, CSPlan, CSLog, CSAdmin |
| **Verde** | Execucao / Sucesso / Conclusao | Implementacao, Check-out |
| **Roxo** | Funcoes especiais | Nivel 4, Comando Unificado |
| **Amarelo** | Atencao / Transicao | Fases iniciais, Preparacao |

---

### Diagramas por Parte da Documentacao

**Parte I - Fundamentos do SCI**
- Conceito do SCI
- 14 Principios do SCI

**Parte II - Estrutura Organizacional**
- EOR Completa (Organograma)
- Secao de Operacoes detalhada
- Secao de Planejamento detalhada
- Secao de Logistica detalhada
- Secao de Admin/Financas detalhada
- Amplitude de Controle

**Parte III - Contexto CBMMT**
- Niveis de Complexidade (1-4)
- Estrutura SSC/SSD
- Integracao com ARGOS
- Fluxo de Deteccao

**Parte IV - Fluxo Operacional**
- 7 Fases do Fluxo
- Estabelecimento do Comando
- Estrutura da Reuniao Tatica
- Componentes do PAI

**Parte V - Ciclo de Planejamento**
- 14 Fases do Ciclo P
- Periodos Operacionais
- Objetivos SMART
- Reuniao Tatica
- Reuniao de Planejamento
- Briefing Operacional

**Parte VI - Desmobilizacao**
- Fases da Desmobilizacao
- Prioridades de Liberacao
- Processo de Check-Out
- Estrutura do AAR

**Parte VII - Formularios**
- 24 Formularios por Categoria
- Fluxo de Uso dos Formularios
- Comunicacoes e Seguranca

**Parte VIII - Requisitos do Sistema**
- Arquitetura ARGOS-SCI
- Requisitos Funcionais
- Requisitos Nao-Funcionais
- Roadmap de Implementacao`,
  diagrams: [diagramGaleriaEor, diagramGaleriaCicloP, diagramGaleriaNiveis, diagramFormularios, diagramDesmobilizacao]
};

// ------------------------------------------------------------
// EXPORTACOES
// ------------------------------------------------------------

export const recursosSections: Section[] = [
  glossario,
  referencias,
  galeriaDiagramas
];

export const recursosSectionMap: Record<string, Section> = {
  'glossario': glossario,
  'referencias': referencias,
  'galeria-diagramas': galeriaDiagramas
};
