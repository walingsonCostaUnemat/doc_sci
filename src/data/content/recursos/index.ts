import type { Section, Diagram } from '@/data/types';

// ============================================================
// RECURSOS - GLOSSÁRIO, REFERÊNCIAS E GALERIA DE DIAGRAMAS
// ============================================================

// ------------------------------------------------------------
// DIAGRAMAS
// ------------------------------------------------------------

const diagramTermosSCI: Diagram = {
  id: 'termos-sci',
  title: 'Principais Termos e Siglas do SCI',
  type: 'flowchart',
  description: 'Organização dos principais termos do Sistema de Comando de Incidentes',
  code: `flowchart TB
    subgraph COMANDO["COMANDO"]
        CI["CI<br/>Comandante Incidente"]
        CU["CU<br/>Comando Unificado"]
        PC["PC<br/>Posto de Comando"]
    end

    subgraph STAFF_CMD["STAFF DO COMANDO"]
        OSeg["OSeg<br/>Oficial Segurança"]
        OIP["OIP<br/>Oficial Informação"]
        OLig["OLig<br/>Oficial Ligação"]
    end

    subgraph STAFF_GERAL["STAFF GERAL - SEÇÕES"]
        CSOp["CSOp<br/>Chefe Operações"]
        CSPlan["CSPlan<br/>Chefe Planejamento"]
        CSLog["CSLog<br/>Chefe Logística"]
        CSAdmin["CSAdmin<br/>Chefe Admin/Fin"]
    end

    subgraph DOCUMENTOS["DOCUMENTOS PRINCIPAIS"]
        PAI["PAI<br/>Plano de Ação"]
        SCI201["SCI 201<br/>Briefing"]
        SCI202["SCI 202<br/>Objetivos"]
    end

    subgraph PROCESSOS["PROCESSOS"]
        CICLOP["Ciclo P<br/>14 Fases"]
        DESMOB["Desmobilização"]
        AAR["AAR<br/>Revisão Pós-Ação"]
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
        OSeg["Oficial de<br/>Segurança"]
        OIP["Oficial de<br/>Informação Pública"]
        OLig["Oficial de<br/>Ligação"]
    end

    subgraph STAFF_GERAL["STAFF GERAL"]
        direction LR
        CSOp["Chefe Seção<br/>Operações"]
        CSPlan["Chefe Seção<br/>Planejamento"]
        CSLog["Chefe Seção<br/>Logística"]
        CSAdmin["Chefe Seção<br/>Admin/Finanças"]
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
        F8["8.REUNIÃO<br/>TÁTICA"]
        F9["9.Prep RP"]
        F10["10.REUNIÃO<br/>PLANEJ"]
    end

    subgraph IMPL["IMPLEMENTAÇÃO"]
        F11["11.PAI"]
        F12["12.Briefing"]
        F13["13.Execução"]
        F14["14.Avaliação"]
    end

    F1 --> F2 --> F3 --> F4
    F4 --> F5 --> F6 --> F7 --> F8 --> F9 --> F10
    F10 --> F11 --> F12 --> F13 --> F14
    F14 -.->|Próximo PO| F5

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
  title: 'Níveis de Complexidade CBMMT',
  type: 'flowchart',
  description: 'Escalada de recursos por nível',
  code: `flowchart TB
    subgraph N1["NÍVEL 1 - Local"]
        N1R["1-3 IRTs<br/>Recursos locais"]
        N1C["CI: Primeiro BM"]
    end

    subgraph N2["NÍVEL 2 - Regional"]
        N2R["4-6 IRTs<br/>Recursos regionais"]
        N2C["CI: Oficial designado"]
    end

    subgraph N3["NÍVEL 3 - Estadual"]
        N3R["7+ IRTs<br/>Recursos estaduais"]
        N3C["CI: Oficial superior"]
    end

    subgraph N4["NÍVEL 4 - Federal"]
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
  title: 'Os 24 Formulários SCI',
  type: 'flowchart',
  description: 'Formulários organizados por categoria',
  code: `flowchart TB
    subgraph PAI_OBR["PAI - OBRIGATÓRIOS"]
        direction LR
        P1["SCI 200CG<br/>Capa"]
        P2["SCI 202<br/>Objetivos"]
        P3["SCI 204<br/>Atribuições"]
        P4["SCI 205<br/>Rádio"]
        P5["SCI 206<br/>Médico"]
        P6["SCI 208<br/>Segurança"]
    end

    subgraph PAI_OPC["PAI - OPCIONAIS"]
        direction LR
        O1["SCI 203<br/>Organização"]
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
        OP3["SCI 213RR<br/>Requisição"]
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
  title: 'Processo de Desmobilização',
  type: 'flowchart',
  description: 'Fases da desmobilização de recursos',
  code: `flowchart LR
    subgraph PLAN["1. PLANEJAMENTO"]
        PL1["Incidente<br/>Estabiliza"]
        PL2["Plano<br/>Desmob"]
    end

    subgraph PRIOR["2. PRIORIZAÇÃO"]
        PR1["Recursos<br/>Excedentes"]
        PR2["Lista de<br/>Liberações"]
    end

    subgraph EXEC["3. EXECUÇÃO"]
        EX1["Check-Out<br/>SCI 221"]
        EX2["Liberação"]
    end

    subgraph ENCER["4. ENCERRAMENTO"]
        EN1["Documentação<br/>Final"]
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
// SEÇÕES DE CONTEÚDO
// ------------------------------------------------------------

const glossario: Section = {
  id: 'glossario',
  slug: 'glossario',
  title: 'Glossário de Termos',
  part: 0,
  order: 1,
  content: `## Glossário de Termos do SCI

Este glossário apresenta os principais termos utilizados no Sistema de Comando de Incidentes (SCI) no contexto do CBMMT.

---

### A

| Termo | Definição |
|-------|-----------|
| **AAR** | After Action Review. Revisão pós-ação para identificar lições aprendidas |
| **Aceiro** | Faixa de terreno desprovida de vegetação como barreira contra o fogo |
| **Amplitude de Controle** | Número de subordinados que um supervisor gerencia (ideal: 3-7) |
| **Área de Espera** | Local para recursos disponíveis aguardando atribuição |
| **ARGOS** | Plataforma de gestão operacional integrada do CBMMT |

---

### B

| Termo | Definição |
|-------|-----------|
| **Base** | Local para funções logísticas (alimentação, alojamento, manutenção) |
| **BEA** | Bureau de Estratégia e Assessoramento do CBMMT |
| **Briefing** | Reunião curta para transmitir informações essenciais |

---

### C

| Termo | Definição |
|-------|-----------|
| **Cadeia de Comando** | Linha de autoridade do CI para níveis inferiores |
| **Check-in** | Registro de recursos ao chegarem (SCI 211) |
| **Check-out** | Liberação de recursos ao saírem (SCI 221) |
| **CI** | Comandante do Incidente. Responsável por todas atividades |
| **Ciclo P** | Ciclo de Planejamento com 14 fases para desenvolver o PAI |
| **Comando Unificado** | Múltiplas agências compartilhando responsabilidade de comando |
| **CSOp** | Chefe da Seção de Operações |
| **CSPlan** | Chefe da Seção de Planejamento |
| **CSLog** | Chefe da Seção de Logística |
| **CSAdmin** | Chefe da Seção de Administração/Finanças |

---

### D-E

| Termo | Definição |
|-------|-----------|
| **Desmobilização** | Processo ordenado de liberação de recursos |
| **Divisão** | Subdivisão da SOp por área geográfica |
| **DOp** | Diretoria de Operações do CBMMT |
| **EIAOP** | Equipe de Intervenção Aquática e Operações de Praia |
| **EOR** | Estrutura Organizacional de Resposta (organograma do SCI) |
| **Equipe de Intervenção** | Menor unidade tática (até 7 pessoas) |

---

### F-G

| Termo | Definição |
|-------|-----------|
| **Força-Tarefa** | Combinação de recursos diferentes com liderança comum |
| **Formulário SCI** | Documentos padronizados (SCI 201 a SCI 225) |
| **GAvBM** | Grupamento de Aviação do Corpo de Bombeiros Militar |
| **GCIF** | Grupo de Combate a Incêndios Florestais |
| **Grupo** | Subdivisão da SOp por função (ex: Grupo Aéreo) |

---

### I-L

| Termo | Definição |
|-------|-----------|
| **ICMBio** | Instituto Chico Mendes de Conservação da Biodiversidade |
| **IRT** | Instalação de Resposta Tática |
| **LCES** | Lookouts, Communications, Escape Routes, Safety Zones |
| **Linha de Controle** | Barreira para conter propagação do incêndio |

---

### M-O

| Termo | Definição |
|-------|-----------|
| **Modularidade** | Princípio de expansão/contração da estrutura conforme necessidade |
| **OIP** | Oficial de Informação Pública |
| **OLig** | Oficial de Ligação |
| **OSeg** | Oficial de Segurança |

---

### P

| Termo | Definição |
|-------|-----------|
| **PAI** | Plano de Ação do Incidente |
| **PC** | Posto de Comando |
| **Período Operacional** | Intervalo para planejamento de táticas (típico: 12h) |
| **POTIF** | Plano Operativo de Temporada de Incêndio Florestal |
| **Prevfogo** | Centro Nacional de Prevenção e Combate aos Incêndios Florestais |

---

### R-S

| Termo | Definição |
|-------|-----------|
| **Rescaldo** | Extinção de focos residuais após controle |
| **Reunião de Planejamento** | Reunião formal para aprovar o PAI |
| **Reunião Tática** | Reunião para desenvolver táticas |
| **SCI** | Sistema de Comando de Incidentes |
| **Seção** | Nível organizacional funcional (Op, Plan, Log, Admin) |
| **SINFRA** | Secretaria de Estado de Infraestrutura e Logística |
| **SSC** | Sala de Situação Central do CBMMT |
| **SSD** | Sala de Situação Descentralizada do CBMMT |
| **Staff do Comando** | OSeg, OIP e OLig |
| **Staff Geral** | CSOp, CSPlan, CSLog e CSAdmin |

---

### T-Z

| Termo | Definição |
|-------|-----------|
| **Terminologia Comum** | Princípio de uso de linguagem padronizada |
| **Transferência de Comando** | Passagem formal de autoridade entre CIs |
| **UC** | Unidade de Conservação |
| **Unidade Comando** | Princípio: cada pessoa reporta a apenas um supervisor |
| **URec** | Unidade de Recursos (SPlan) |
| **USit** | Unidade de Situação (SPlan) |
| **Zona de Segurança** | Área para abrigo de combatentes em emergência |`,
  diagrams: [diagramTermosSCI]
};

const referencias: Section = {
  id: 'referencias',
  slug: 'referencias',
  title: 'Referências e Bibliografia',
  part: 0,
  order: 2,
  content: `## Referências e Bibliografia

Esta seção lista as principais referências utilizadas na elaboração desta documentação.

---

### Documentos Oficiais CBMMT

| Documento | Descrição |
|-----------|-----------|
| **POTIF 2025** | Plano Operativo de Temporada de Incêndio Florestal |
| **Portaria CBMMT** | Normas internas de operações |
| **Manual de Operações** | Procedimentos operacionais padrão |

---

### Referências Nacionais

**SISTEMA NACIONAL DE PROTEÇÃO E DEFESA CIVIL**

| Documento | Descrição |
|-----------|-----------|
| Instrução Normativa n. 02/2016 | Sistema de Comando de Incidentes |
| Material didático SEDEC | Capacitação em SCI |

**CORPO DE BOMBEIROS MILITAR DO DISTRITO FEDERAL**

| Documento | Descrição |
|-----------|-----------|
| Manual de Gerenciamento | Crises e Desastres |
| Curso SCI | Sistema de Comando de Incidentes |

---

### Referências Internacionais

**NIMS (National Incident Management System) - EUA**

| Curso | Conteúdo |
|-------|----------|
| FEMA IS-100 | Introduction to ICS |
| FEMA IS-200 | ICS for Single Resources |
| FEMA IS-700 | Introduction to NIMS |
| FEMA IS-800 | National Response Framework |

**NWCG (National Wildfire Coordinating Group) - EUA**

| Publicação | Conteúdo |
|------------|----------|
| PMS 932 | ICS Organizational Structure |
| PMS 210 | Wildland Fire Incident Management Field Guide |

---

### Organizações de Referência

**Nacionais**

| Sigla | Organização |
|-------|-------------|
| CBMMT | Corpo de Bombeiros Militar do Mato Grosso |
| IBAMA | Instituto Brasileiro do Meio Ambiente |
| ICMBio | Instituto Chico Mendes |
| SEDEC | Secretaria Nacional de Defesa Civil |

**Internacionais**

| Sigla | Organização |
|-------|-------------|
| FEMA | Federal Emergency Management Agency (EUA) |
| NWCG | National Wildfire Coordinating Group (EUA) |
| CIFFC | Canadian Interagency Forest Fire Centre |

---

### Normas Técnicas

| Norma | Descrição |
|-------|-----------|
| **NFPA 1561** | Standard on Emergency Services Incident Management System |
| **NFPA 295** | Standard for Wildfire Control |
| **ISO 22320** | Emergency management - Requirements for incident response |

---

### Formulários SCI Referenciados

Os 24 formulários oficiais do SCI utilizados nesta documentação:

**Formulários do PAI (Obrigatórios)**

| Código | Nome |
|--------|------|
| SCI 200CG | Capa do PAI |
| SCI 202 | Objetivos do Incidente |
| SCI 204 | Formulário de Atribuições |
| SCI 205 | Plano de Comunicações de Rádio |
| SCI 206 | Plano Médico |
| SCI 208 | Plano de Segurança |

**Formulários do PAI (Opcionais)**

| Código | Nome |
|--------|------|
| SCI 203 | Designações da Organização |
| SCI 205A | Lista de Comunicações |
| SCI 207 | Organograma |

**Formulários de Planejamento**

| Código | Nome |
|--------|------|
| SCI 201 | Briefing do Incidente |
| SCI 215 | Matriz de Planejamento Operacional |
| SCI 215A | Análise de Risco |

**Formulários Operacionais**

| Código | Nome |
|--------|------|
| SCI 209 | Resumo do Incidente |
| SCI 210 | Status de Recursos |
| SCI 211 | Check-in |
| SCI 213 | Ordem de Pedido |
| SCI 213RR | Requisição de Recursos |
| SCI 214 | Registro de Atividades |
| SCI 220 | Sumário de Recursos Aéreos |
| SCI 221 | Check-out |

**Formulários Administrativos**

| Código | Nome |
|--------|------|
| SCI 218 | Inventário de Viaturas/Equipamentos |
| SCI 219 | Cartão T de Recursos |
| SCI 224 | Log de Horário do Pessoal |
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

Esta seção apresenta os principais diagramas do SCI-ARGOS. Use o modo Diagrama (no cabeçalho) para visualizar todos os diagramas abaixo de forma interativa.

---

### Diagramas Disponíveis nesta Página

| Diagrama | Descrição |
|----------|-----------|
| **Estrutura Organizacional (EOR)** | Organograma completo do SCI com Comando, Staff e Seções |
| **Ciclo P** | As 14 fases do Ciclo de Planejamento Operacional |
| **Níveis de Complexidade** | Escalada de recursos por nível (1 a 4) do CBMMT |
| **Formulários SCI** | Os 24 formulários organizados por categoria |
| **Desmobilização** | Fases do processo de desmobilização |

---

### Como Usar os Diagramas

**Controles de Visualização:**

| Controle | Função |
|----------|--------|
| **Zoom (+/-)** | Ampliar ou reduzir o diagrama |
| **Arrastar** | Mover o diagrama na tela |
| **Tela Cheia** | Expandir para visualização completa |
| **Download** | Baixar o diagrama em formato SVG |
| **Reset** | Restaurar visualização original |

**Dicas:**
- Use o scroll do mouse para zoom rápido
- Pressione ESC para sair do modo tela cheia
- Diagramas em SVG podem ser usados em apresentações

---

### Legenda de Cores

Os diagramas seguem um padrão consistente de cores:

| Cor | Significado | Exemplo |
|-----|-------------|---------|
| **Vermelho** | Comando / Decisão crítica | CI, Reuniões importantes |
| **Laranja** | Staff do Comando | OSeg, OIP, OLig |
| **Azul** | Staff Geral / Planejamento | CSOp, CSPlan, CSLog, CSAdmin |
| **Verde** | Execução / Sucesso / Conclusão | Implementação, Check-out |
| **Roxo** | Funções especiais | Nível 4, Comando Unificado |
| **Amarelo** | Atenção / Transição | Fases iniciais, Preparação |

---

### Diagramas por Parte da Documentação

**Parte I - Fundamentos do SCI**
- Conceito do SCI
- 14 Princípios do SCI

**Parte II - Estrutura Organizacional**
- EOR Completa (Organograma)
- Seção de Operações detalhada
- Seção de Planejamento detalhada
- Seção de Logística detalhada
- Seção de Admin/Finanças detalhada
- Amplitude de Controle

**Parte III - Contexto CBMMT**
- Níveis de Complexidade (1-4)
- Estrutura SSC/SSD
- Integração com ARGOS
- Fluxo de Detecção

**Parte IV - Fluxo Operacional**
- 7 Fases do Fluxo
- Estabelecimento do Comando
- Estrutura da Reunião Tática
- Componentes do PAI

**Parte V - Ciclo de Planejamento**
- 14 Fases do Ciclo P
- Períodos Operacionais
- Objetivos SMART
- Reunião Tática
- Reunião de Planejamento
- Briefing Operacional

**Parte VI - Desmobilização**
- Fases da Desmobilização
- Prioridades de Liberação
- Processo de Check-Out
- Estrutura do AAR

**Parte VII - Formulários**
- 24 Formulários por Categoria
- Fluxo de Uso dos Formulários
- Comunicações e Segurança

**Parte VIII - Requisitos do Sistema**
- Arquitetura ARGOS-SCI
- Requisitos Funcionais
- Requisitos Não-Funcionais
- Roadmap de Implementação`,
  diagrams: [diagramGaleriaEor, diagramGaleriaCicloP, diagramGaleriaNiveis, diagramFormularios, diagramDesmobilizacao]
};

// ------------------------------------------------------------
// EXPORTAÇÕES
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
