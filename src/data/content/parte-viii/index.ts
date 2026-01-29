import type { Section, Diagram } from '@/data/types';

// ============================================================================
// PARTE VIII - REQUISITOS DE SISTEMA ARGOS-SCI
// ============================================================================

// ----------------------------------------------------------------------------
// DIAGRAMAS DA PARTE VIII
// ----------------------------------------------------------------------------

const diagramaCriteriosAceitacao: Diagram = {
  id: 'criterios-aceitacao-diagrama',
  title: 'Critérios de Aceitação do Sistema',
  type: 'flowchart',
  description: 'Visão geral dos critérios técnicos e operacionais para aceitação do sistema',
  code: `flowchart TB
    subgraph TITULO["📋 CRITÉRIOS DE ACEITAÇÃO ARGOS-SCI"]
        direction TB
    end

    subgraph TECNICOS["⚙️ CRITÉRIOS TÉCNICOS"]
        COD["💻 CÓDIGO<br/>Build sem erros<br/>70% cobertura testes<br/>Sem vulnerabilidades<br/>Code review aprovado"]
        FUNC["✅ FUNCIONALIDADE<br/>Requisitos implementados<br/>Validações funcionando<br/>Mensagens em PT-BR<br/>Tratamento exceções"]
        INT["🔗 INTEGRAÇÃO<br/>ARGOS base ok<br/>Dados sincronizando<br/>APIs documentadas"]
        USAB["👤 USABILIDADE<br/>Interface intuitiva<br/>Responsiva<br/>Tooltips presentes<br/>Resposta < 2s"]
        SEG["🔒 SEGURANÇA<br/>Autenticação ok<br/>RBAC implementado<br/>Audit log ativo<br/>Dados criptografados"]
    end

    subgraph OPERACIONAIS["📊 CRITÉRIOS OPERACIONAIS"]
        DOC["📚 DOCUMENTAÇÃO<br/>Doc técnica<br/>Manual usuário<br/>Vídeos treinamento"]
        TRAIN["🎓 TREINAMENTO<br/>Equipe SSC treinada<br/>Material disponível<br/>20+ capacitados"]
        TEST["🧪 TESTES<br/>UAT realizados<br/>Bugs corrigidos<br/>Feedback documentado"]
        DEPLOY["🚀 DEPLOY<br/>Produção configurada<br/>Monitoramento ativo<br/>Rollback testado"]
        HOMOL["✔️ HOMOLOGAÇÃO<br/>Aprovação DOp<br/>Aprovação BEA<br/>Aprovação CG"]
    end

    subgraph SUCESSO["🏆 CRITÉRIOS DE SUCESSO FINAL"]
        S1["🎯 Gestão profissional de incidentes"]
        S2["🛡️ Redução de acidentes"]
        S3["📑 Prestação de contas transparente"]
        S4["⭐ CBMMT referência nacional"]
        S5["🌎 Adoção por outros estados"]
    end

    TITULO --> TECNICOS
    TITULO --> OPERACIONAIS
    TECNICOS --> SUCESSO
    OPERACIONAIS --> SUCESSO

    style TITULO fill:#DC2626,color:#FFFFFF
    style TECNICOS fill:#1E40AF,color:#FFFFFF
    style OPERACIONAIS fill:#059669,color:#FFFFFF
    style SUCESSO fill:#7C3AED,color:#FFFFFF

    style COD fill:#1E3A8A,color:#FFFFFF
    style FUNC fill:#1E3A8A,color:#FFFFFF
    style INT fill:#1E3A8A,color:#FFFFFF
    style USAB fill:#1E3A8A,color:#FFFFFF
    style SEG fill:#1E3A8A,color:#FFFFFF

    style DOC fill:#047857,color:#FFFFFF
    style TRAIN fill:#047857,color:#FFFFFF
    style TEST fill:#047857,color:#FFFFFF
    style DEPLOY fill:#047857,color:#FFFFFF
    style HOMOL fill:#047857,color:#FFFFFF

    style S1 fill:#6D28D9,color:#FFFFFF
    style S2 fill:#6D28D9,color:#FFFFFF
    style S3 fill:#6D28D9,color:#FFFFFF
    style S4 fill:#6D28D9,color:#FFFFFF
    style S5 fill:#6D28D9,color:#FFFFFF`
};

const diagramaArquiteturaSistema: Diagram = {
  id: 'arquitetura-sistema',
  title: 'Arquitetura do Sistema ARGOS-SCI',
  type: 'flowchart',
  description: 'Visão geral da arquitetura e integrações do módulo SCI',
  code: `flowchart TB
    subgraph ARGOS["🖥️ PLATAFORMA ARGOS"]
        EF["📍 Eventos de Fogo"]
        OS["📋 Ordens de Serviço"]
        MAP["🗺️ Mapas e Geolocalização"]
        MET["🌡️ Dados Meteorológicos"]
    end

    subgraph SCI["🔥 MÓDULO SCI"]
        INC["📌 Incidente SCI"]
        EOR["👥 Estrutura Organizacional"]
        PAI["📑 Plano de Ação"]
        REC["🚒 Gestão de Recursos"]
        FORM["📝 Formulários SCI"]
    end

    subgraph EXTERNOS["🔗 SISTEMAS EXTERNOS"]
        RH["👤 Sistema RH"]
        FIN["💰 Sistema Financeiro"]
        SSC["📡 Sala de Situação"]
    end

    subgraph MOBILE["📱 MOBILE"]
        OFF["💾 Modo Offline"]
        SYNC["🔄 Sincronização"]
    end

    EF -->|"Ativa SCI"| INC
    OS -->|"IRTs/Recursos"| REC
    MAP -->|"Geolocalização"| INC
    MET -->|"Condições"| INC

    INC --> EOR
    INC --> PAI
    INC --> REC
    PAI --> FORM

    REC -->|"Horas"| RH
    INC -->|"Custos"| FIN
    INC -->|"Dashboard"| SSC

    INC <-->|"Sync"| OFF
    OFF <--> SYNC

    style ARGOS fill:#1E40AF,color:#FFFFFF
    style SCI fill:#DC2626,color:#FFFFFF
    style EXTERNOS fill:#059669,color:#FFFFFF
    style MOBILE fill:#D97706,color:#FFFFFF`
};

const diagramaRequisitosFuncionais: Diagram = {
  id: 'requisitos-funcionais',
  title: 'Requisitos Funcionais por Categoria',
  type: 'flowchart',
  description: 'Os 30 requisitos funcionais organizados por categoria',
  code: `flowchart TB
    subgraph RF["30 REQUISITOS FUNCIONAIS"]
        direction TB
    end

    subgraph ESSENCIAIS["ESSENCIAIS"]
        E1["RF001 Ativação SCI"]
        E2["RF002 Designação CI"]
        E3["RF003 Estrutura EOR"]
        E4["RF004 Objetivos"]
        E5["RF029 Controle Acesso"]
    end

    subgraph OPERACOES["OPERAÇÕES"]
        O1["RF010 Seção Operações"]
        O2["RF011 Operações Aéreas"]
        O3["RF014 Divisões/Grupos"]
        O4["RF025 Mapas"]
    end

    subgraph PLANEJAMENTO["PLANEJAMENTO"]
        P1["RF005 PAI Completo"]
        P2["RF006 Períodos Operacionais"]
        P3["RF012 Seção Planejamento"]
        P4["RF019 Ciclo P"]
    end

    subgraph RECURSOS["RECURSOS"]
        R1["RF013 Gestão Recursos"]
        R2["RF022 Desmobilização"]
        R3["RF023 Integração CBMMT"]
    end

    subgraph STAFF["STAFF"]
        S1["RF007 Oficial Segurança"]
        S2["RF008 Oficial Ligação"]
        S3["RF009 Oficial Informações"]
    end

    subgraph LOGISTICA["LOGÍSTICA"]
        L1["RF015 Planos Com/Med"]
        L2["RF016 Seção Logística"]
        L3["RF017 Suprimentos"]
        L4["RF018 Admin/Finanças"]
    end

    RF --> ESSENCIAIS
    RF --> OPERACOES
    RF --> PLANEJAMENTO
    RF --> RECURSOS
    RF --> STAFF
    RF --> LOGISTICA

    classDef essStyle fill:#DC2626,stroke:#991B1B,color:#FFFFFF
    classDef opStyle fill:#059669,stroke:#047857,color:#FFFFFF
    classDef planStyle fill:#1E40AF,stroke:#1E3A8A,color:#FFFFFF
    classDef recStyle fill:#D97706,stroke:#B45309,color:#FFFFFF
    classDef staffStyle fill:#7C3AED,stroke:#6D28D9,color:#FFFFFF
    classDef logStyle fill:#0891B2,stroke:#0E7490,color:#FFFFFF

    class E1,E2,E3,E4,E5 essStyle
    class O1,O2,O3,O4 opStyle
    class P1,P2,P3,P4 planStyle
    class R1,R2,R3 recStyle
    class S1,S2,S3 staffStyle
    class L1,L2,L3,L4 logStyle`
};

const diagramaRequisitosNaoFuncionais: Diagram = {
  id: 'requisitos-nao-funcionais',
  title: 'Requisitos Não-Funcionais',
  type: 'flowchart',
  description: 'Os 13 requisitos não-funcionais do sistema',
  code: `flowchart TB
    subgraph QUALIDADE["🏆 QUALIDADE DO SISTEMA"]
        subgraph PERF["⚡ Desempenho"]
            RNF001["RNF001<br/>Resposta < 2s<br/>200 usuários"]
        end

        subgraph DISP["🔄 Disponibilidade"]
            RNF002["RNF002<br/>> 99,5%<br/>RTO < 2h"]
        end

        subgraph USAB["👤 Usabilidade"]
            RNF003["RNF003<br/>Treinamento < 8h<br/>Responsivo"]
        end
    end

    subgraph SEGURANCA["🔒 SEGURANÇA"]
        RNF004["RNF004<br/>RBAC + Criptografia<br/>Audit Log"]
        RNF012["RNF012<br/>Rastreabilidade<br/>5 anos retenção"]
    end

    subgraph TECNICO["⚙️ TÉCNICO"]
        RNF005["RNF005<br/>Portabilidade<br/>Web + Mobile"]
        RNF006["RNF006<br/>Manutenibilidade<br/>70% cobertura"]
        RNF007["RNF007<br/>Escalabilidade<br/>10→50 incidentes"]
        RNF008["RNF008<br/>Interoperabilidade<br/>API REST"]
    end

    subgraph RESILIENCIA["💪 RESILIÊNCIA"]
        RNF010["RNF010<br/>Recuperação<br/>Backup 6h"]
        RNF011["RNF011<br/>Offline-First<br/>Mobile"]
    end

    subgraph CONFORMIDADE["📋 CONFORMIDADE"]
        RNF009["RNF009<br/>NIMS 2017<br/>LGPD"]
        RNF013["RNF013<br/>i18n<br/>Futuro"]
    end

    style QUALIDADE fill:#1E40AF,color:#FFFFFF
    style SEGURANCA fill:#DC2626,color:#FFFFFF
    style TECNICO fill:#059669,color:#FFFFFF
    style RESILIENCIA fill:#D97706,color:#FFFFFF
    style CONFORMIDADE fill:#7C3AED,color:#FFFFFF`
};

const diagramaRoadmap: Diagram = {
  id: 'roadmap-implementacao',
  title: 'Roadmap de Implementação',
  type: 'gantt',
  description: 'As 4 fases de implementação do sistema em 11 meses',
  code: `gantt
    title Roadmap ARGOS-SCI (11 meses)
    dateFormat YYYY-MM
    axisFormat %b/%Y

    section Fase 1 - MVP
    Ativação SCI (RF001)           :mvp1, 2026-02, 1M
    Designação CI (RF002)          :mvp2, after mvp1, 1M
    Estrutura EOR (RF003)          :mvp3, after mvp1, 1M
    Objetivos (RF004)              :mvp4, after mvp2, 1M
    Seção Operações básica         :mvp5, after mvp3, 1M
    Piloto incidente real          :milestone, after mvp5, 0d

    section Fase 2 - Core SCI
    PAI Completo (RF005)           :core1, 2026-05, 1M
    Períodos Operacionais          :core2, after core1, 1M
    Oficial Segurança (RF007)      :core3, after core1, 1M
    Gestão Recursos (RF013)        :core4, after core2, 1M
    Dashboard SSC (RF026)          :core5, after core3, 1M
    Produção Nível 2-4             :milestone, after core5, 0d

    section Fase 3 - Expansão
    Oficial Ligação (RF008)        :exp1, 2026-08, 1M
    Operações Aéreas (RF011)       :exp2, after exp1, 1M
    Seção Logística (RF016)        :exp3, after exp2, 1M
    Desmobilização (RF022)         :exp4, after exp3, 1M
    Sistema completo NIMS          :milestone, after exp4, 0d

    section Fase 4 - Otimizações
    Sugestões automáticas IA       :opt1, 2026-11, 1M
    Análises preditivas            :opt2, after opt1, 1M
    Sistema otimizado              :milestone, after opt2, 0d`
};

const diagramaModeloDados: Diagram = {
  id: 'modelo-dados',
  title: 'Modelo de Dados Conceitual',
  type: 'erDiagram',
  description: 'As 15 entidades principais e seus relacionamentos',
  code: `erDiagram
    EVENTO_FOGO ||--o| INCIDENTE_SCI : "ativa"
    INCIDENTE_SCI ||--|{ COMANDANTE_INCIDENTE : "histórico"
    INCIDENTE_SCI ||--|{ ESTRUTURA_ORG : "versões"
    ESTRUTURA_ORG ||--|{ POSICAO_ORG : "contém"
    POSICAO_ORG }|--|| MILITAR : "ocupa"
    POSICAO_ORG ||--|{ RECURSO : "aloca"
    INCIDENTE_SCI ||--|{ PERIODO_OPERACIONAL : "tem"
    PERIODO_OPERACIONAL ||--|{ OBJETIVO : "define"
    PERIODO_OPERACIONAL ||--|| PAI : "gera"
    PAI ||--|{ FORMULARIO_SCI : "contém"
    INCIDENTE_SCI ||--|{ DIVISAO_GEO : "divide"
    INCIDENTE_SCI ||--|{ GRUPO_FUNCIONAL : "organiza"
    POSICAO_ORG ||--|{ ATRIBUICAO : "recebe"
    RECURSO ||--|{ REGISTRO_ATIVIDADE : "registra"
    INCIDENTE_SCI ||--|{ MENSAGEM : "comunica"

    INCIDENTE_SCI {
        uuid id PK
        string nome
        int nivel_potif
        datetime ativacao
        string status
    }

    PAI {
        uuid id PK
        uuid periodo_id FK
        datetime aprovacao
        string status
    }

    FORMULARIO_SCI {
        uuid id PK
        uuid pai_id FK
        string tipo
        json conteudo
        int versao
    }

    RECURSO {
        uuid id PK
        string tipo
        string identificacao
        string status
        uuid posicao_id FK
    }`
};

const diagramaPerfiisUsuario: Diagram = {
  id: 'perfis-usuario',
  title: 'Perfis de Usuário do Sistema',
  type: 'flowchart',
  description: 'Os 7 perfis de usuário e suas responsabilidades',
  code: `flowchart TB
    subgraph SSC_PERFIL["📡 SALA DE SITUAÇÃO"]
        SSC["SSC/SSD<br/>• Ativa/desativa SCI<br/>• Dashboard todos incidentes<br/>• Despacha recursos<br/>• Monitoramento estratégico"]
    end

    subgraph COMANDO["👑 COMANDO"]
        CI["COMANDANTE<br/>• Estabelece objetivos<br/>• Aprova PAI<br/>• Decisões estratégicas<br/>• Transfere comando"]

        STAFF["STAFF DO COMANDO"]
        OSEG["OSeg<br/>Segurança"]
        OIP["OIP<br/>Informações"]
        OLIG["OLig<br/>Ligação"]

        STAFF --> OSEG
        STAFF --> OIP
        STAFF --> OLIG
    end

    subgraph SECOES["📊 CHEFES DE SEÇÃO"]
        CSOP["CSOp<br/>Operações"]
        CSPLAN["CSPlan<br/>Planejamento"]
        CSLOG["CSLog<br/>Logística"]
        CSADM["CSAdmin<br/>Admin/Finanças"]
    end

    subgraph TATICO["🎯 NÍVEL TÁTICO"]
        LID["LÍDERES UNIDADES<br/>• Recursos<br/>• Situação<br/>• Documentação"]

        SUP["SUPERVISORES<br/>• Divisão/Grupo<br/>• Recebem SCI 204<br/>• Reportam progresso"]
    end

    subgraph OPERACIONAL["🔥 NÍVEL OPERACIONAL"]
        IRT["COMBATENTES<br/>• Visualizam informações<br/>• Reportam status<br/>• Acessam mapas"]
    end

    SSC_PERFIL --> COMANDO
    CI --> STAFF
    CI --> SECOES
    SECOES --> TATICO
    TATICO --> OPERACIONAL

    style SSC_PERFIL fill:#7C3AED,color:#FFFFFF
    style COMANDO fill:#DC2626,color:#FFFFFF
    style SECOES fill:#1E40AF,color:#FFFFFF
    style TATICO fill:#059669,color:#FFFFFF
    style OPERACIONAL fill:#D97706,color:#FFFFFF`
};

const diagramaFases: Diagram = {
  id: 'fases-implementacao',
  title: 'Fases de Implementação',
  type: 'flowchart',
  description: 'Detalhamento das 4 fases do roadmap',
  code: `flowchart LR
    subgraph F1["FASE 1: MVP<br/>3 meses"]
        direction TB
        F1A["✅ RF001-004<br/>Ativação + CI + EOR"]
        F1B["✅ RF010, RF014<br/>Operações básicas"]
        F1C["✅ RF023, RF029<br/>Integração + Acesso"]
        F1D["📋 SCI 201, 202, 203"]
        F1E["🎯 Piloto: 1 incidente"]
    end

    subgraph F2["FASE 2: Core<br/>3 meses"]
        direction TB
        F2A["✅ RF005-007<br/>PAI + Segurança"]
        F2B["✅ RF012-013<br/>Planejamento + Recursos"]
        F2C["✅ RF019-020, RF024-027<br/>Ciclo P + Comunicação"]
        F2D["📋 SCI 204-215A"]
        F2E["🎯 Produção Nível 2-4"]
    end

    subgraph F3["FASE 3: Expansão<br/>3 meses"]
        direction TB
        F3A["✅ RF008-009, RF011<br/>Staff + Aéreo"]
        F3B["✅ RF016-018<br/>Logística + Admin"]
        F3C["✅ RF021-022, RF030<br/>Unificado + Desmob"]
        F3D["📋 SCI 218-233CG"]
        F3E["🎯 Sistema NIMS completo"]
    end

    subgraph F4["FASE 4: IA<br/>2 meses"]
        direction TB
        F4A["🤖 Sugestão ativação SCI"]
        F4B["🤖 Sugestão recursos"]
        F4C["🤖 Preenchimento auto"]
        F4D["📊 Analytics avançado"]
        F4E["🎯 -30% tempo planej."]
    end

    F1 --> F2 --> F3 --> F4

    style F1 fill:#DC2626,color:#FFFFFF
    style F2 fill:#1E40AF,color:#FFFFFF
    style F3 fill:#059669,color:#FFFFFF
    style F4 fill:#7C3AED,color:#FFFFFF`
};

const diagramaIntegracoes: Diagram = {
  id: 'integracoes-argos',
  title: 'Integrações com Sistemas CBMMT',
  type: 'flowchart',
  description: 'Fluxo de dados entre ARGOS-SCI e sistemas externos',
  code: `flowchart LR
    subgraph ARGOS_BASE["ARGOS BASE"]
        EF["📍 Evento Fogo<br/>ID, local, perímetro"]
        OS["📋 Ordem Serviço<br/>Despachos, IRTs, ETAs"]
        MET["🌡️ Meteorologia<br/>Temp, umidade, vento"]
        MAP["🗺️ Mapas<br/>Topografia, vegetação"]
        CAD["👤 Cadastro<br/>Militares, viaturas"]
    end

    subgraph SCI_MOD["MÓDULO SCI"]
        INC["🔥 Incidente SCI"]
        STATUS["📊 Status atualizado"]
        REC["🚒 Recursos empenhados"]
        ALERT["⚠️ Alertas segurança"]
        REL["📑 Relatórios SCI 209"]
        CUSTO["💰 Custos acumulados"]
    end

    subgraph RH["SISTEMA RH"]
        HORAS["⏱️ Horas trabalhadas"]
        DIARIAS["💵 Diárias"]
        EXTRAS["📈 Horas extras"]
    end

    subgraph FIN["SISTEMA FINANCEIRO"]
        CUSTOS["💰 Custos operacionais"]
        CONTR["📝 Contratações"]
        PREST["📋 Prestação contas"]
    end

    subgraph SSC_SIS["SALA DE SITUAÇÃO"]
        DASH["📊 Dashboard consolidado"]
        NOTIF["🔔 Alertas críticos"]
    end

    EF -->|"Ativa"| INC
    OS -->|"Recursos"| INC
    MET -->|"Condições"| INC
    MAP -->|"Geoloc"| INC
    CAD -->|"Pessoal"| INC

    INC --> STATUS
    INC --> REC
    INC --> ALERT
    INC --> REL
    INC --> CUSTO

    REC -->|"Check-in/out"| HORAS
    HORAS --> DIARIAS
    HORAS --> EXTRAS

    CUSTO --> CUSTOS
    CUSTO --> CONTR
    CUSTO --> PREST

    STATUS --> DASH
    ALERT --> NOTIF

    style ARGOS_BASE fill:#1E40AF,color:#FFFFFF
    style SCI_MOD fill:#DC2626,color:#FFFFFF
    style RH fill:#059669,color:#FFFFFF
    style FIN fill:#D97706,color:#FFFFFF
    style SSC_SIS fill:#7C3AED,color:#FFFFFF`
};

// ----------------------------------------------------------------------------
// SEÇÕES DA PARTE VIII
// ----------------------------------------------------------------------------

const visaoGeralSistema: Section = {
  id: 'visao-geral-sistema',
  slug: 'visao-geral-sistema',
  title: '61. Visão Geral do Módulo SCI',
  part: 8,
  order: 1,
  content: `# Visão Geral do Módulo SCI

## Objetivo do Sistema

**PROPÓSITO:**
Digitalizar completamente o Sistema de Comando de Incidentes (SCI) na Plataforma ARGOS, permitindo gestão profissional de incidentes florestais complexos no Estado de Mato Grosso.

### Benefícios Esperados

- **Coordenação eficiente** de múltiplas IRTs
- **Planejamento formal** e documentado
- **Segurança aumentada** através de LCES sistemático
- **Prestação de contas** transparente
- **Análises e melhorias** baseadas em dados históricos

---

## Escopo do Sistema

### Dentro do Escopo

- Gestão completa de incidentes usando SCI (Níveis 1-4 do POTIF 2025)
- Todos os **24 formulários SCI** documentados
- Estrutura organizacional completa (5 seções)
- **Ciclo de Planejamento** completo (Ciclo "P")
- Integração com ARGOS existente (Eventos de Fogo, Despachos)
- Integração com sistemas CBMMT (RH, Financeiro, SSC)
- Aplicação **web e mobile**
- Funcionamento **offline** no mobile

### Fora do Escopo (nesta versão)

- Gestão de outros tipos de incidentes (não florestais)
- Integração com sistemas externos ao CBMMT
- Inteligência artificial avançada (futuro)
- Realidade aumentada para operações

---

## Perfis de Usuário

O sistema atende **7 perfis** distintos:

### 1. Sala de Situação (SSC/SSD)
- Ativa/desativa modo SCI em eventos
- Visualiza dashboard de todos incidentes
- Despacha recursos adicionais
- Monitora situação estratégica

### 2. Comandante do Incidente (CI)
- Estabelece objetivos
- Aprova PAI
- Toma decisões estratégicas
- Transfere comando

### 3. Staff do Comando (OSeg, OIP, OLig)
- **OSeg:** desenvolve análise de riscos, monitora segurança
- **OIP:** gerencia informações públicas
- **OLig:** coordena com outras agências

### 4. Chefes de Seção
- CSOp, CSPlan, CSLog, CSAdmin
- Desenvolvem componentes do PAI
- Gerenciam suas seções
- Reportam ao CI

### 5. Líderes de Unidades
- Recursos, Situação, Documentação, Suprimentos
- Executam tarefas específicas

### 6. Supervisores de Divisão/Grupo
- Recebem atribuições (SCI 204)
- Executam operações táticas
- Reportam progresso

### 7. Combatentes (IRTs)
- Visualizam informações do incidente
- Reportam status
- Acessam mapas e orientações

---

## Modos de Operação

### Modo Normal (sem SCI)
Sistema ARGOS opera normalmente para eventos de fogo simples (Nível 1).

### Modo SCI Ativado
Quando SSC ou CI ativa SCI para um evento:
- Interface muda para modo SCI
- Estrutura organizacional é criada
- Formulários SCI ficam disponíveis
- Ciclo de Planejamento é habilitado
- Dashboards SCI são exibidos

### Modo Offline (Mobile)
Aplicativo mobile deve funcionar sem conexão:
- Visualizar dados já sincronizados
- Preencher formulários localmente
- Registrar atividades
- Sincronizar automaticamente quando reconectar

---

> **NOTA:** Este documento especifica O QUE o sistema deve fazer, não COMO implementar. As decisões tecnológicas são de responsabilidade da Equipe de Desenvolvimento ARGOS.`,
  diagrams: [diagramaArquiteturaSistema, diagramaPerfiisUsuario]
};

const requisitosFuncionais: Section = {
  id: 'requisitos-funcionais',
  slug: 'requisitos-funcionais',
  title: '62. Requisitos Funcionais (30 RFs)',
  part: 8,
  order: 2,
  content: `# Requisitos Funcionais Detalhados

O módulo ARGOS-SCI possui **30 requisitos funcionais** organizados por categoria e prioridade.

---

## Requisitos Essenciais (MVP - Fase 1)

### RF001 - Ativação e Desativação do Modo SCI

**Descrição:** Sistema deve permitir ativar e desativar o modo SCI para um Evento de Fogo específico.

**Regras de Negócio:**
- Apenas perfis "SSC" ou "Comandante" podem ativar SCI
- Ativação transforma "Evento de Fogo" em "Incidente SCI"
- Ao ativar, sistema cria estrutura organizacional mínima (CI + SOp)
- Ao desativar, dados SCI são arquivados (não deletados)
- Ativação registra: data/hora, usuário responsável, justificativa

**Critérios de Aceitação:**
- ✅ Botão "Ativar Modo SCI" visível em tela de Evento de Fogo
- ✅ Modal de confirmação explicando o que será ativado
- ✅ Campo obrigatório: justificativa para ativação
- ✅ Após ativação, interface exibe elementos SCI
- ✅ Notificação enviada a todos usuários com acesso ao evento
- ✅ Histórico completo de ativações/desativações preservado

---

### RF002 - Designação de Comandante do Incidente

**Descrição:** Sistema deve permitir designar formalmente um CI com delegação de autoridade.

**Regras de Negócio:**
- CI deve ser militar cadastrado no sistema
- Apenas um CI ativo por vez (pode ter substituto designado)
- Delegação de autoridade deve ser documentada formalmente
- Histórico completo de todos CIs preservado
- Transferência de comando usa formulário SCI 201

---

### RF003 - Estrutura Organizacional de Resposta (EOR)

**Descrição:** Sistema deve permitir criar, visualizar e editar a EOR do incidente.

**Regras de Negócio:**
- Estrutura baseada nos 5 elementos SCI
- Amplitude de controle respeitada (3-7 subordinados)
- Seção Admin/Finanças é opcional
- Geração automática de SCI 203 e SCI 207

---

### RF004 - Desenvolvimento de Objetivos do Incidente

**Descrição:** Sistema deve permitir CI criar objetivos por período operacional.

**Regras de Negócio:**
- Objetivos devem seguir padrão **SMART**
- Mínimo 2 objetivos, máximo 7 por período
- Primeiro objetivo sempre relacionado à **segurança**
- Apenas CI pode aprovar objetivos

---

## Requisitos de Operações

### RF010 - Seção de Operações Completa
- CSOp cria Divisões geográficas e Grupos funcionais
- Desenvolve SCI 215 (Matriz Operacional)
- Prepara SCI 204 (Atribuições) para cada supervisor
- Conduz Briefing Operacional

### RF011 - Operações Aéreas
- Grupo Aéreo dentro da Seção de Operações
- SCI 220 (Resumo Operações Aéreas)
- Marcação de Helibase e LZs no mapa

### RF014 - Divisões Geográficas e Grupos Funcionais
- Divisões são áreas geográficas com geometria no mapa
- Grupos são funcionais (ex: Grupo Aéreo, Grupo Máquinas)
- Cada divisão/grupo tem supervisor designado

### RF025 - Mapas Interativos
- Mapa base (topografia, vegetação, hidrografia)
- Camadas: perímetro, divisões, recursos, instalações
- Ferramentas de desenho e medição
- Export de mapas como imagem

---

## Requisitos de Planejamento

### RF005 - Plano de Ação do Incidente (PAI)
- PAI composto de múltiplos formulários SCI
- Gerado para cada período operacional
- Apenas CI pode aprovar PAI
- Export PDF com formatação profissional

### RF006 - Períodos Operacionais
- Período típico: 12 horas (diurno/noturno)
- Períodos sequenciais e numerados (PO1, PO2...)
- Sistema alerta 2h antes do fim do período

### RF012 - Seção de Planejamento Completa
- Gerencia Unidade de Recursos (check-in, cartões "T")
- Gerencia Unidade de Situação (mapas, projeções)
- Gerencia Unidade de Documentação
- SCI 209 (Resumo Status) gerado automaticamente

### RF019 - Ciclo de Planejamento (Ciclo "P")
- Workflows guiados para cada etapa
- Agendamento de reuniões
- Alertas de prazos

---

## Requisitos de Recursos

### RF013 - Gerenciamento de Recursos
- 5 status: Disponível, Despachado, Designado, Fora de Serviço, Desmobilizado
- Check-in (SCI 211) e Check-out (SCI 221) obrigatórios
- Rastreamento de horas trabalhadas

### RF022 - Desmobilização
- Plano de Desmobilização formal
- Priorização de liberação de recursos
- Verificação de pendências

### RF023 - Integração com Relatórios CBMMT
- Dados de relatórios alimentam formulários SCI
- Sem duplicação de entrada de dados

---

## Requisitos de Staff do Comando

### RF007 - Oficial de Segurança
- Desenvolve Análise de Risco (SCI 215A)
- Desenvolve Plano de Segurança (SCI 208)
- Botão "Alerta de Segurança" para notificação imediata
- Dashboard de segurança

### RF008 - Oficial de Ligação
- Cadastro de agências cooperadoras
- Registro de acordos e compromissos

### RF009 - Oficial de Informações Públicas
- Comunicados à imprensa
- Aprovação CI obrigatória

---

## Requisitos de Logística e Admin

### RF015 - Planos de Comunicações e Médico
- SCI 205: frequências de rádio
- SCI 206: postos médicos, hospitais, rotas

### RF016 - Seção de Logística Completa
- Unidades: Suprimentos, Instalações, Suporte, Comunicações, Médica

### RF017 - Unidade de Suprimentos
- Controle de estoque
- Alertas de estoque baixo

### RF018 - Seção Admin/Finanças
- Registro de custos
- Integração com Sistema Financeiro

---

## Requisitos de Comunicação e Gestão

### RF020 - Registro de Atividades (SCI 214)
- Diário de bordo cronológico
- Registros permanentes (não podem ser deletados)
- Anexar fotos/vídeos

### RF024 - Mensagens e Comunicações
- SCI 213 para mensagens gerais
- SCI 213RR para requisição de recursos
- Rastreamento de status

### RF026 - Dashboard SSC
- Visão consolidada de todos incidentes SCI ativos
- Alertas críticos em destaque
- Capacidade de despachar recursos

### RF027 - Notificações e Alertas
- Push notifications (web e mobile)
- Configurações de preferências

### RF028 - Relatórios e Análises
- SCI 209 gerado automaticamente
- Ferramenta para AAR (Análise Pós-Ação)
- Export múltiplos formatos

### RF029 - Controle de Acesso e Permissões
- Sistema de perfis configurável
- Auditoria completa de todas ações

### RF030 - Histórico e Arquivo
- Todos dados de incidentes encerrados preservados
- Biblioteca de lições aprendidas

### RF021 - Comando Unificado
- Múltiplos CIs de instituições diferentes
- Aprovação colegiada de PAI`,
  diagrams: [diagramaRequisitosFuncionais]
};

const requisitosNaoFuncionais: Section = {
  id: 'requisitos-nao-funcionais',
  slug: 'requisitos-nao-funcionais',
  title: '63. Requisitos Não-Funcionais (13 RNFs)',
  part: 8,
  order: 3,
  content: `# Requisitos Não-Funcionais

O módulo ARGOS-SCI possui **13 requisitos não-funcionais** que definem como o sistema deve se comportar.

---

## RNF001 - Desempenho

**Requisitos:**
- Tempo de resposta **< 2 segundos** para 95% das operações
- Suporte a mínimo **10 incidentes SCI simultâneos**
- Suporte a mínimo **200 usuários simultâneos**
- Carregamento de mapas **< 3 segundos**
- Sincronização offline → online **< 10 segundos**

**Prioridade:** Alta

---

## RNF002 - Disponibilidade

**Requisitos:**
- Disponibilidade **> 99,5%** durante temporada crítica (maio a outubro)
- Manutenções programadas apenas fora da temporada
- Backup automático a cada 6 horas
- **Recovery Time Objective (RTO)** < 2 horas
- **Recovery Point Objective (RPO)** < 1 hora

**Prioridade:** Alta

---

## RNF003 - Usabilidade

**Requisitos:**
- Interface em **português brasileiro**
- Tooltips e ajuda contextual em todos formulários SCI
- Wizard para operações complexas (ex: primeiro PAI)
- Tempo de treinamento **< 8 horas** para uso básico
- Compatibilidade com leitores de tela (acessibilidade)
- Design **responsivo** (desktop, tablet, mobile)

**Prioridade:** Alta

---

## RNF004 - Segurança

**Requisitos:**
- Autenticação obrigatória (integração CBMMT)
- Controle de acesso baseado em perfis (**RBAC**)
- Criptografia de dados em trânsito (**HTTPS**)
- Criptografia de dados sensíveis em repouso
- **Audit log** completo de todas ações
- Sessões expiram após inatividade
- Proteção contra SQL injection, XSS, CSRF
- Backup criptografado

**Prioridade:** Alta

---

## RNF005 - Portabilidade

**Requisitos:**
- Aplicação **web responsiva** (desktop, tablet, smartphone)
- Aplicativo **mobile nativo ou híbrido** (Android e iOS)
- Funcionamento **offline** no mobile
- Compatibilidade com navegadores modernos (últimas 2 versões)

**Prioridade:** Alta

---

## RNF006 - Manutenibilidade

**Requisitos:**
- Código bem documentado
- Arquitetura modular
- Testes automatizados (cobertura mínima **70%**)
- Logs estruturados para debugging
- Monitoramento de erros em produção
- Deploy automatizado (**CI/CD**)

**Prioridade:** Média

---

## RNF007 - Escalabilidade

**Requisitos:**
- Arquitetura que suporta escalabilidade horizontal
- Suporte a crescimento de **10 para 50 incidentes** sem degradação
- Banco de dados escalável
- Cache para reduzir carga

**Prioridade:** Média

---

## RNF008 - Interoperabilidade

**Requisitos:**
- **API REST** bem documentada (OpenAPI/Swagger)
- Webhooks para eventos importantes
- Export de dados em formatos padrão (JSON, CSV, PDF, KML)
- Integração com ARGOS base
- Integração com Sistema RH e Financeiro
- Possibilidade de integração futura com sistemas federais

**Prioridade:** Alta

---

## RNF009 - Conformidade

**Requisitos:**
- Conformidade com **NIMS 2017** / SCI oficial
- Formulários conforme padrões FEMA/IBAMA/CBMDF
- Conformidade com **LGPD**
- Conformidade com normas de segurança CBMMT
- Terminologia oficial do CBMMT
- Adequação ao **POTIF 2025**

**Prioridade:** Alta

---

## RNF010 - Recuperação de Desastres

**Requisitos:**
- Backup automático diário
- Backup incremental a cada 6 horas
- Armazenamento em local geograficamente separado
- Procedimento documentado de recuperação
- Testes periódicos de recuperação
- Dados críticos replicados em tempo real

**Prioridade:** Média

---

## RNF011 - Offline-First (Mobile)

**Requisitos:**
- Dados essenciais sincronizados para uso offline
- Preencher formulários offline
- **Mapas offline** (tiles pré-carregados)
- Sincronização automática ao reconectar
- Indicador claro de status online/offline
- **Resolução de conflitos** em sincronização

**Prioridade:** Alta

---

## RNF012 - Auditoria e Rastreabilidade

**Requisitos:**
- Log de todas operações (criar, editar, deletar, aprovar)
- Registro inclui: usuário, data/hora, ação, dados antes/depois
- Logs **imutáveis** (não podem ser alterados)
- Retenção de logs por mínimo **5 anos**
- Busca e filtros em logs de auditoria

**Prioridade:** Média

---

## RNF013 - Internacionalização (futuro)

**Requisitos:**
- Textos da interface externalizados (não hardcoded)
- Estrutura preparada para traduções
- Suporte a português brasileiro (inicial)
- Possibilidade futura de inglês, espanhol

**Prioridade:** Baixa (preparação apenas)`,
  diagrams: [diagramaRequisitosNaoFuncionais]
};

const roadmapImplementacao: Section = {
  id: 'roadmap-implementacao',
  slug: 'roadmap-implementacao',
  title: '64. Roadmap de Implementação',
  part: 8,
  order: 4,
  content: `# Roadmap de Implementação

O desenvolvimento do módulo ARGOS-SCI está planejado em **4 fases** totalizando **11 meses**.

---

## Fase 1: MVP (Mínimo Produto Viável)
**Duração:** 3 meses

### Objetivo
Estrutura básica funcional para testar conceito em incidente real.

### Funcionalidades (Requisitos Funcionais)
| ID | Requisito |
|----|-----------|
| RF001 | Ativação/desativação modo SCI |
| RF002 | Designação de CI |
| RF003 | Estrutura organizacional básica |
| RF004 | Desenvolvimento de objetivos |
| RF010 | Seção de Operações básica |
| RF014 | Divisões geográficas e Grupos |
| RF023 | Integração com relatórios CBMMT |
| RF025 | Mapas interativos básicos |
| RF029 | Controle de acesso básico |

### Formulários SCI
- SCI 201 (Briefing Incidente)
- SCI 202 (Objetivos)
- SCI 203 (Organização)

### Entrega
Piloto em 1 incidente real (Nível 2 ou 3).

### Critério de Sucesso
Sistema usado com sucesso em incidente real, feedback coletado.

---

## Fase 2: Core SCI
**Duração:** 3 meses

### Objetivo
Funcionalidades centrais completas do SCI.

### Funcionalidades Adicionadas
| ID | Requisito |
|----|-----------|
| RF005 | PAI completo |
| RF006 | Períodos operacionais |
| RF007 | Oficial de Segurança |
| RF010 | Seção de Operações completa |
| RF012 | Seção de Planejamento completa |
| RF013 | Gerenciamento de recursos completo |
| RF015 | Planos Comunicações e Médico |
| RF019 | Ciclo de Planejamento básico |
| RF020 | Registro de atividades (SCI 214) |
| RF024 | Mensagens e comunicações |
| RF026 | Dashboard SSC |
| RF027 | Notificações e alertas |
| RF028 | Relatórios básicos |

### Formulários SCI Adicionados
- SCI 204, 205, 206, 208, 209
- SCI 211, 213, 214, 215, 215A

### Entrega
Sistema em produção para todos incidentes SCI (Nível 2, 3 e 4).

### Critério de Sucesso
Uso regular em múltiplos incidentes, 80% dos usuários consideram sistema útil.

---

## Fase 3: Expansão
**Duração:** 3 meses

### Objetivo
Funcionalidades avançadas e seções completas.

### Funcionalidades Adicionadas
| ID | Requisito |
|----|-----------|
| RF008 | Oficial de Ligação |
| RF009 | Oficial de Informações Públicas |
| RF011 | Operações Aéreas |
| RF016 | Seção de Logística completa |
| RF017 | Unidade de Suprimentos |
| RF018 | Seção Admin/Finanças |
| RF021 | Comando Unificado |
| RF022 | Desmobilização |
| RF030 | Histórico e arquivo |

### Formulários SCI Adicionados
- SCI 205A, 207, 218, 219, 220
- SCI 221, 233CG, 234CG

### Entrega
Sistema completo conforme NIMS 2017 e documentação CBMMT.

### Critério de Sucesso
Capacidade de gerenciar incidentes de qualquer complexidade (Nível 1-4).

---

## Fase 4: Otimizações e IA
**Duração:** 2 meses

### Objetivo
Melhorias de UX, automações e recursos inteligentes.

### Funcionalidades Adicionadas
- 🤖 Sugestão automática de ativação SCI (baseada em critérios POTIF)
- 🤖 Sugestão de recursos necessários (baseada em histórico)
- 🤖 Preenchimento automático de formulários
- 📊 Dashboard analítico avançado (tendências, comparações)
- 🚁 Integração com drones para mapeamento
- 📈 Análises preditivas (comportamento do fogo)

### Entrega
Sistema otimizado e inteligente.

### Critério de Sucesso
Redução de **30%** no tempo de planejamento, aumento de precisão em estimativas.

---

## Priorização de Requisitos

### Requisitos Essenciais (Fase 1 - MVP)
| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF001 | Ativação/desativação SCI | Base do sistema |
| RF002 | Designação CI | Fundamental SCI |
| RF003 | Estrutura organizacional | Core do SCI |
| RF004 | Objetivos | Direção estratégica |
| RF029 | Controle acesso | Segurança |
| RNF003 | Usabilidade | Adoção |
| RNF004 | Segurança | Proteção dados |
| RNF005 | Portabilidade | Acesso campo |

### Requisitos Importantes (Fase 2 - Core)
| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF005 | PAI completo | Documento central |
| RF006 | Períodos operacionais | Organização temporal |
| RF007 | Oficial Segurança | Prioridade 1 sempre |
| RF012 | Seção Planejamento | Coordenação |
| RF013 | Gestão recursos | Eficiência |
| RF026 | Dashboard SSC | Visão estratégica |

### Requisitos Desejáveis (Fase 3 - Expansão)
| ID | Requisito | Justificativa |
|----|-----------|---------------|
| RF008 | Oficial Ligação | Interagências |
| RF011 | Operações Aéreas | GAvBM |
| RF016 | Seção Logística | Suporte completo |
| RF022 | Desmobilização | Encerramento ordenado |`,
  diagrams: [diagramaRoadmap, diagramaFases]
};

const modeloDados: Section = {
  id: 'modelo-dados',
  slug: 'modelo-dados',
  title: '65. Modelo de Dados Conceitual',
  part: 8,
  order: 5,
  content: `# Modelo de Dados Conceitual

> **NOTA:** Detalhes de implementação (tipos de dados, índices, relacionamentos exatos) são responsabilidade da equipe de desenvolvimento. Abaixo apenas conceitos lógicos.

---

## Entidades Principais

O sistema possui **15 entidades principais** que formam o core do módulo SCI.

### INCIDENTE SCI
- Identificador único
- Relação com Evento de Fogo (ARGOS)
- Nome do incidente
- Datas de ativação/desativação
- Status (ativo, finalizado)
- Nível de complexidade (1-4 conforme POTIF)

### COMANDANTE DO INCIDENTE
- Identificador
- Relação com Incidente SCI
- Militar designado
- Data/hora início e fim
- Delegação de autoridade (texto)
- Limitações

### ESTRUTURA ORGANIZACIONAL (EOR)
- Identificador
- Relação com Incidente
- Data de criação
- Versão

### POSIÇÃO ORGANIZACIONAL
- Identificador
- Relação com EOR
- Posição pai (hierarquia)
- Tipo (comando, staff, seção, divisão, grupo, unidade)
- Nome da posição
- Militar designado

### PERÍODO OPERACIONAL
- Identificador
- Relação com Incidente
- Número do período (PO1, PO2...)
- Data/hora início e fim
- Status (planejado, ativo, concluído)

### OBJETIVO DO INCIDENTE
- Identificador
- Relação com Período Operacional
- Número do objetivo
- Descrição
- Prioridade
- Status (não iniciado, em andamento, concluído, não alcançado)

### PLANO DE AÇÃO (PAI)
- Identificador
- Relação com Período Operacional
- Data criação e aprovação
- Militar que aprovou (CI)
- Status (elaboração, aprovado, distribuído)

### FORMULÁRIO SCI
- Identificador
- Relação com PAI
- Tipo de formulário (201, 202, 203...)
- Conteúdo (estrutura flexível, JSON)
- Versão
- Data criação

### RECURSO
- Identificador
- Tipo (IRT, viatura, aeronave, equipamento)
- Identificação específica (EIAOP 03, Heli-01, etc.)
- Status (disponível, despachado, designado, fora de serviço, desmobilizado)
- Relação com Posição Organizacional
- Unidade de origem

### DIVISÃO GEOGRÁFICA
- Identificador
- Relação com Incidente
- Nome (Divisão Norte, Sul...)
- Geometria (polígono no mapa)
- Supervisor designado

### GRUPO FUNCIONAL
- Identificador
- Relação com Incidente
- Nome (Grupo Aéreo, Grupo Máquinas...)
- Função
- Supervisor designado

### ATRIBUIÇÃO DE TRABALHO (SCI 204)
- Identificador
- Relação com Posição Organizacional
- Relação com Período Operacional
- Descrição da atribuição
- Instruções especiais
- Status de execução

### REGISTRO DE ATIVIDADE (SCI 214)
- Identificador
- Relação com Recurso ou Posição
- Data/hora
- Descrição do evento/ação
- Anexos (fotos, documentos)

### MENSAGEM (SCI 213)
- Identificador
- Relação com Incidente
- Remetente
- Destinatário(s)
- Assunto
- Conteúdo
- Data/hora envio
- Status (lida, respondida)

---

## Relacionamentos Principais

\`\`\`
EVENTO_DE_FOGO (ARGOS) ←→ INCIDENTE_SCI (1:1)

INCIDENTE_SCI ←→ COMANDANTE_INCIDENTE (1:N - histórico)

INCIDENTE_SCI ←→ ESTRUTURA_ORGANIZACIONAL (1:N - versões)

ESTRUTURA_ORGANIZACIONAL ←→ POSICAO_ORGANIZACIONAL (1:N)

POSICAO_ORGANIZACIONAL ←→ MILITAR (N:1)

POSICAO_ORGANIZACIONAL ←→ RECURSO (1:N)

INCIDENTE_SCI ←→ PERIODO_OPERACIONAL (1:N)

PERIODO_OPERACIONAL ←→ OBJETIVO_INCIDENTE (1:N)

PERIODO_OPERACIONAL ←→ PAI (1:1)

PAI ←→ FORMULARIO_SCI (1:N)

INCIDENTE_SCI ←→ DIVISAO_GEOGRAFICA (1:N)

INCIDENTE_SCI ←→ GRUPO_FUNCIONAL (1:N)

POSICAO_ORGANIZACIONAL ←→ ATRIBUICAO_TRABALHO (1:N por período)
\`\`\`

---

## Status de Recursos

O sistema utiliza **5 status** para gerenciar recursos:

| Status | Descrição |
|--------|-----------|
| **Disponível** | Recurso pronto para ser despachado |
| **Despachado** | A caminho do incidente |
| **Designado** | Em operação, alocado a uma posição |
| **Fora de Serviço** | Indisponível temporariamente |
| **Desmobilizado** | Liberado do incidente |`,
  diagrams: [diagramaModeloDados, diagramaIntegracoes]
};

const criteriosAceitacao: Section = {
  id: 'criterios-aceitacao',
  slug: 'criterios-aceitacao',
  title: '66. Critérios de Aceitação',
  part: 8,
  order: 6,
  content: `# Critérios de Aceitação Gerais

## Critérios Técnicos

### Código
- ✅ Build sem erros
- ✅ Testes automatizados passando (mínimo **70% cobertura**)
- ✅ Sem vulnerabilidades críticas de segurança
- ✅ Code review aprovado

### Funcionalidade
- ✅ Todos requisitos da fase implementados
- ✅ Validações funcionando corretamente
- ✅ Mensagens de erro claras e em português
- ✅ Tratamento adequado de exceções

### Integração
- ✅ Integrações com ARGOS base funcionando
- ✅ Dados sincronizando corretamente
- ✅ APIs documentadas (Swagger/OpenAPI)

### Usabilidade
- ✅ Interface intuitiva conforme protótipos aprovados
- ✅ Responsiva (desktop, tablet, mobile)
- ✅ Tooltips e ajuda contextual presentes
- ✅ Tempo de resposta < 2 segundos

### Segurança
- ✅ Autenticação funcionando
- ✅ Controle de acesso implementado corretamente
- ✅ Audit log registrando todas ações
- ✅ Dados sensíveis criptografados

---

## Critérios Operacionais

### Documentação
- ✅ Documentação técnica atualizada
- ✅ Manual do usuário disponível
- ✅ Vídeos de treinamento produzidos

### Treinamento
- ✅ Equipe SSC treinada
- ✅ Material de treinamento disponível
- ✅ Pelo menos 20 usuários capacitados

### Testes
- ✅ Testes de aceitação realizados por usuários finais
- ✅ Bugs críticos corrigidos
- ✅ Feedback documentado

### Deploy
- ✅ Ambiente de produção configurado
- ✅ Monitoramento ativo
- ✅ Plano de rollback testado

### Homologação
- ✅ Aprovação formal DOp
- ✅ Aprovação BEA
- ✅ Aprovação Comando-Geral (para produção final)

---

## Flexibilidade de Implementação

### Tecnologias
A equipe de desenvolvimento ARGOS tem liberdade total para escolher:
- Linguagens de programação
- Frameworks e bibliotecas
- Bancos de dados
- Infraestrutura e cloud
- Ferramentas de desenvolvimento

### Desde que:
- Requisitos funcionais sejam atendidos
- Requisitos não-funcionais sejam respeitados
- Integração com ARGOS existente seja mantida
- Padrões de qualidade CBMMT sejam seguidos

---

## Iteração e Feedback

### Desenvolvimento Ágil
- Implementação faseada permite feedback contínuo
- Usuários finais devem ser consultados em cada fase
- Ajustes de requisitos são esperados e bem-vindos
- Prioridades podem ser reavaliadas entre fases

### Pilotos
- Cada fase deve ter piloto em incidente real
- Lições aprendidas documentadas
- Melhorias implementadas antes de próxima fase

---

## Critérios de Sucesso Final

O projeto será considerado bem-sucedido quando:

1. ✅ CBMMT gerencia incidentes complexos profissionalmente
2. ✅ Redução de acidentes através de planejamento formal
3. ✅ Prestação de contas transparente e documentada
4. ✅ CBMMT referência nacional em SCI digitalizado
5. ✅ Sistema adotado por outros estados brasileiros

---

> **NOTA:** Este documento especifica O QUE o sistema deve fazer e COMO deve se comportar, sem prescrever tecnologias específicas de implementação. As decisões tecnológicas são de responsabilidade da Equipe de Desenvolvimento ARGOS.`,
  diagrams: [diagramaCriteriosAceitacao]
};

// ----------------------------------------------------------------------------
// EXPORTS
// ----------------------------------------------------------------------------

export const parteVIIISections: Section[] = [
  visaoGeralSistema,
  requisitosFuncionais,
  requisitosNaoFuncionais,
  roadmapImplementacao,
  modeloDados,
  criteriosAceitacao
];

export const parteVIIISectionMap: Record<string, Section> = {
  'visao-geral-sistema': visaoGeralSistema,
  'requisitos-funcionais': requisitosFuncionais,
  'requisitos-nao-funcionais': requisitosNaoFuncionais,
  'roadmap-implementacao': roadmapImplementacao,
  'modelo-dados': modeloDados,
  'criterios-aceitacao': criteriosAceitacao
};
